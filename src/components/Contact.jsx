import { useState } from "react";
import { submitEnquiry } from "../services/api";

const PROJECT_TYPES = [
  "Residential construction",
  "Commercial fit-out",
  "Structural / civil works",
  "Architecture & design",
  "Interior design",
  "Renovation & restoration",
  "Project management consultancy"
];

const BUDGET_RANGES = [
  "Under ₹20 Lakhs",
  "₹20L – ₹50L",
  "₹50L – ₹1 Crore",
  "₹1 Cr – ₹5 Cr",
  "Above ₹5 Crore"
];

const INITIAL_FORM = {
  fullName: "",
  phoneNumber: "",
  email: "",
  location: "",
  projectType: "",
  budget: "",
  projectBrief: ""
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      // Keeps the existing backend contract intact — same field names
      // the API already expects, so nothing on the server needs to change.
      await submitEnquiry(form);
      setStatus({
        state: "success",
        message: "✓ Received — we'll call you within 24 hours"
      });
      setForm(INITIAL_FORM);

      // Reverts the success message after 5s, matching the original
      // dummy submitForm() behavior exactly.
      setTimeout(() => {
        setStatus({ state: "idle", message: "" });
      }, 5000);
    } catch (error) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again or contact us directly."
      });
    }
  };

  const isSending = status.state === "sending";
  const isSuccess = status.state === "success";

  return (
    <section className="contact-wrap section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="s-eye">06 — Get in touch</div>
            <h2 className="s-heading">Let's build<br />something <em>great.</em></h2>
            <p style={{ marginTop: "16px" }}>
              Tell us about your project. Our team will respond within 24
              hours with a detailed assessment and arrange a site visit at
              your convenience.
            </p>

            <div className="cdetail">
              <div className="cicon">📍</div>
              <div>
                <div className="clabel">Our office</div>
                <div className="cval">Shivamogga, Karnataka</div>
                <div className="csub">Serving all of Karnataka</div>
              </div>
            </div>
            <div className="cdetail">
              <div className="cicon">📞</div>
              <div>
                <div className="clabel">Call us</div>
                <div className="cval">+91 77603 76348 / +91 87623 98728</div>
                <div className="csub">Mon – Sat, 9 am – 7 pm IST</div>
              </div>
            </div>
            <div className="cdetail">
              <div className="cicon">✉️</div>
              <div>
                <div className="clabel">Email</div>
                <div className="cval">satvikrajgowda282@gmail.com</div>
                <div className="csub">Response within 24 hours</div>
              </div>
            </div>
            <div className="cdetail">
              <div className="cicon">💬</div>
              <div>
                <div className="clabel">WhatsApp</div>
                <div className="cval">
                  <a href="https://wa.me/918762398728" style={{ color: "var(--gold)" }}>
                    +91 87623 98728
                  </a>
                </div>
                <div className="csub">Send your brief directly on WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="form-box">
              <div className="form-title">Start Your Project</div>
              <div className="form-sub">
                Fill in the details and we will get back within 24 hours.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="f-grid">
                  <div className="fg">
                    <label className="fl">Full name</label>
                    <input
                      className="fi"
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="fg">
                    <label className="fl">Phone number</label>
                    <input
                      className="fi"
                      type="tel"
                      name="phoneNumber"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="fg">
                    <label className="fl">Email address</label>
                    <input
                      className="fi"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fg">
                    <label className="fl">Project location</label>
                    <input
                      className="fi"
                      type="text"
                      name="location"
                      placeholder="City or area in Karnataka"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fg full">
                    <label className="fl">Project type</label>
                    <select
                      className="fsel"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select your project type</option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="fg full">
                    <label className="fl">Approximate budget</label>
                    <select
                      className="fsel"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div className="fg full">
                    <label className="fl">Project brief</label>
                    <textarea
                      className="fta"
                      name="projectBrief"
                      placeholder="Describe your vision, site area, timeline, and any specific requirements..."
                      value={form.projectBrief}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="f-submit" disabled={isSending}>
                  {isSending
                    ? "Sending..."
                    : isSuccess
                      ? status.message
                      : "Send Project Brief"}
                </button>

                {status.state === "error" && (
                  <div className="f-error">{status.message}</div>
                )}

                <div className="f-note">
                  🔒 Your details are private and secure. We do not share your information.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
