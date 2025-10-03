import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("https://formspree.io/f/xeorgyqe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <h2>Contact</h2>
        <p>
          Have a question or want to work together? Reach out by filling the
          form or using the contact details below.
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> contact.emaanshahid09@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +92 321 1393517
          </p>
          <p>
            <strong>Address:</strong> Jaranwala Road, Faisalabad, Pakistan
          </p>
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Failed to send. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
