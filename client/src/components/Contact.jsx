import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact({ contact = {} }) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong.");
      setStatus({ type: "success", text: "Thank you! Your message has been sent." });
      setForm(empty);
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fab fa-github"></i></div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href={contact.github} target="_blank" rel="noreferrer">github.com/FatemaM-27</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fab fa-linkedin-in"></i></div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">View my profile</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={onSubmit}>
              {[
                ["name", "Name", "text"],
                ["email", "Email", "email"],
                ["subject", "Subject", "text"],
              ].map(([field, label, type]) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>{label} *</label>
                  <input id={field} name={field} type={type} value={form[field]} onChange={onChange} required />
                </div>
              ))}
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required />
                {status.text && (
                  <span
                    className="form-error show"
                    style={{ color: status.type === "success" ? "#10b981" : "#ef4444" }}
                  >
                    {status.text}
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                <i className="fas fa-paper-plane"></i> <span>{sending ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}