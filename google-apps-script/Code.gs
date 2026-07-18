/**
 * Next Gen Summit — RSVP backend
 * Deploy this inside a Google Sheet's Apps Script editor (Extensions > Apps Script).
 * See README.md for full step-by-step setup.
 */

const SHEET_NAME = "RSVPs";
const CAPACITY = 300;
const EVENT_NAME = "Next Gen Summit";
const EVENT_DATE = "September 19, 2026";
const EVENT_LOCATION = "Port Harcourt";

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Name", "Email", "Role"]);
  }
  return sheet;
}

function doGet(e) {
  const action = e.parameter.action;
  if (action === "count") {
    const sheet = getSheet();
    const count = Math.max(0, sheet.getLastRow() - 1); // minus header row
    return jsonResponse({ count });
  }
  return jsonResponse({ status: "error", message: "Unknown action" });
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);

  if (body.action !== "rsvp") {
    return jsonResponse({ status: "error", message: "Unknown action" });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim().toLowerCase();
  const role = (body.role || "").toString().trim();

  if (!name || !email) {
    return jsonResponse({ status: "error", message: "Missing name or email" });
  }

  const sheet = getSheet();

  // Check for duplicate email
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if ((data[i][2] || "").toString().trim().toLowerCase() === email) {
      return jsonResponse({ status: "duplicate" });
    }
  }

  const currentCount = Math.max(0, sheet.getLastRow() - 1);
  if (currentCount >= CAPACITY) {
    return jsonResponse({ status: "full" });
  }

  sheet.appendRow([new Date(), name, email, role]);

  // Send confirmation email
  try {
    sendConfirmationEmail(name, email);
  } catch (err) {
    // Row is saved even if email fails — log it, don't block the RSVP.
    console.error("Email send failed: " + err);
  }

  return jsonResponse({ status: "ok", count: currentCount + 1 });
}

function sendConfirmationEmail(name, email) {
  const subject = `You're in — ${EVENT_NAME}`;
  const body =
    `Hi ${name},\n\n` +
    `You're confirmed for ${EVENT_NAME}!\n\n` +
    `Date: ${EVENT_DATE}\n` +
    `Location: ${EVENT_LOCATION} (full venue details coming closer to the date)\n` +
    `Entry: Free\n\n` +
    `We'll send more details as the date gets closer. See you there.\n\n` +
    `— Next Gen Summit Team`;

  MailApp.sendEmail(email, subject, body);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
