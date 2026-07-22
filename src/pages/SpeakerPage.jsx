import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Replace with your actual Formspree endpoint after creating the form at formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[14.5px] text-[#171513] outline-none transition-colors focus:border-[#d94a2b]";
const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-wide text-stone-500";

export default function SpeakersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    ageRange: "18-22",
    city: "",
    spokenBefore: "No",
    spokenBeforeDetails: "",
    whySpeak: "",
    topic: "",
    basedInPH: "Yes",
    handleTransport: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.topic.trim() ||
      !form.whySpeak.trim()
    ) {
      setMessage(
        "Please fill in your name, email, topic, and why you'd like to speak.",
      );
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch (err) {
      setMessage("Something went wrong — please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e7] pb-24 pt-10 lg:pt-32 font-['Inter'] text-[#171513]">
      <Navbar />
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-[13.5px] text-stone-500 underline-offset-4 hover:underline"
          >
            ← Back to Next Gen Summit
          </Link>
          <div className="mb-3 mt-8 text-[12px] font-semibold uppercase tracking-widest text-[#d94a2b]">
            Speak At Next Gen Summit
          </div>
          <h1 className="mb-4 font-['Prata'] text-[clamp(30px,5vw,46px)] leading-tight">
            Apply to speak.
          </h1>
          <p className="mb-10 max-w-[520px] text-[15px] text-stone-600">
            We're looking for builders, founders, and investors in their 20s
            with something real to share. Tell us about yourself and what you'd
            want to talk about.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm sm:p-10">
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Ada Obi"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="ada@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Age Range</label>
                <select
                  name="ageRange"
                  value={form.ageRange}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="18-22">18–22</option>
                  <option value="23-26">23–26</option>
                  <option value="27-29">27–29</option>
                 
                </select>
              </div>

              <div>
                <label className={labelClass}>Current City / Location</label>
                <input
                  name="city"
                  type="text"
                  required
                  placeholder="e.g. Port Harcourt, Lagos, Abuja"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Have you spoken at an event before?
                </label>
                <select
                  name="spokenBefore"
                  value={form.spokenBefore}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="No">No, this would be my first time</option>
                  <option value="Yes">Yes, I have experience speaking</option>
                </select>
              </div>

              {form.spokenBefore === "Yes" && (
                <div>
                  <label className={labelClass}>
                    Where / what have you spoken about before?
                  </label>
                  <input
                    name="spokenBeforeDetails"
                    type="text"
                    placeholder="Event name, topic, etc."
                    value={form.spokenBeforeDetails}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              )}

              <div>
                <label className={labelClass}>
                  Why would you like to speak at Next Gen Summit?
                </label>
                <textarea
                  name="whySpeak"
                  rows="4"
                  required
                  placeholder="Tell us what draws you to this"
                  value={form.whySpeak}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div>
                <label className={labelClass}>Proposed Talk Topic</label>
                <input
                  name="topic"
                  type="text"
                  required
                  placeholder="What would you speak about?"
                  value={form.topic}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Are you based in Port Harcourt?
                </label>
                <select
                  name="basedInPH"
                  value={form.basedInPH}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {form.basedInPH === "No" && (
                <div>
                  <label className={labelClass}>
                    Will you be able to handle your own transportation to Port
                    Harcourt?
                  </label>
                  <p className="mb-2 text-[13px] text-[#6e675e]">
                    we'll cover your accommodation for the event.
                    Just let us know about transport.
                  </p>
                  <select
                    name="handleTransport"
                    value={form.handleTransport}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes, I can handle my own transport">
                      Yes, I can handle my own transport
                    </option>
                    <option value="No, I would need support">
                      No, I would need support
                    </option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[#090909] px-8 py-4 text-[15px] font-bold text-[#fffdf8] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </button>
              {message && (
                <div className="text-[13px] text-[#d94a2b]">{message}</div>
              )}
            </form>
          ) : (
            <div className="py-10 text-center">
              <div className="mb-4 font-['Prata'] text-4xl text-[#d94a2b]">
                ✓
              </div>
              <h3 className="font-['Prata'] text-2xl">Application received.</h3>
              <p className="mt-3 text-stone-600">
                Thanks for applying — we'll review and get back to you if it's a
                fit.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
