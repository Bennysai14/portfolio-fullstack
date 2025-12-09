// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const params = new URLSearchParams();
    params.append("name", form.name);
    params.append("email", form.email);
    params.append("message", form.message);

    try {
      const res = await fetch(
        "http://localhost:8081/venkatasai-portfolio-api/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      if (!res.ok) {
        console.error("Backend HTTP error:", res.status);
        setStatus("error");
        return;
      }

      const data = await res.json();

      if (data.status === "ok") {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Network or JSON error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section fade-in">
      <h2>Contact</h2>
      <p className="section-lead">
        Reach out for roles, collaborations or questions. Always open to
        interesting problems and learning opportunities.
      </p>

      <div className="contact-grid">
        {/* LEFT: FORM */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <div className="field-label">Name</div>
            <input
              className="field-input"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <div className="field-label">Email</div>
            <input
              className="field-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <div className="field-label">Message</div>
            <textarea
              className="field-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "ok" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* RIGHT: SOCIAL LINKS */}
        <div className="contact-social-links">
          <h3>Reach me directly</h3>
          <p>Click any option below to open the app or page in a new tab.</p>
          <div className="social-links-grid">
            <a href="mailto:venkatasaivorsu@gmail.com">📧 Email</a>
            <a href="https://wa.me/15735371351" target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/venkatasai-vorsu-6988b1235/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/Bennysai14"
              target="_blank"
              rel="noreferrer"
            >
              🧑‍💻 GitHub
            </a>
            <a
              href="https://www.instagram.com/venkatasaivorsu/"
              target="_blank"
              rel="noreferrer"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
