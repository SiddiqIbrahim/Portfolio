import {
  ArrowUpRight,
  FolderKanban,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import { useState } from "react";

import { GithubIcon, LinkedinIcon } from "../Icons/SocialIcons";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      setStatus({
        type: "",
        message: "",
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-grid"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-kicker">
            <span></span>
            GET IN TOUCH
            <span></span>
          </div>

          <h2 className="contact-title">
            LET'S <span>CONNECT</span>
          </h2>

          <p className="contact-description">
            Have an idea, project or opportunity? Let's turn it into something
            meaningful together.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-icon-main">
                <UserRound size={23} />
              </span>

              <div>
                <span>START A CONVERSATION</span>

                <h3>
                  Let's build something
                  <strong>great.</strong>
                </h3>
              </div>
            </div>

            <p className="contact-info-description">
              I'm always interested in discussing new projects, creative ideas
              and opportunities to build useful digital experiences.
            </p>

            <div className="contact-details">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=siddiqibrahim55555@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={19} />
                </span>

                <span>
                  <small>EMAIL</small>
                  <strong>siddiqibrahim55555@gmail.com</strong>
                </span>

                <ArrowUpRight size={16} />
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={19} />
                </span>

                <span>
                  <small>LOCATION</small>
                  <strong>Madurai, Tamil Nadu, India</strong>
                </span>
              </div>
            </div>

            <div className="contact-social-panel">
              <div className="social-panel-heading">
                <span>FIND ME ONLINE</span>
                <div></div>
              </div>

              <div className="contact-socials">
                <a
                  href="https://github.com/SiddiqIbrahim"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/siddiq-siddiq/?isSelfProfile=true"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <a href="#projects" aria-label="Projects">
                  <FolderKanban size={18} />
                  <span>Projects</span>
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <span></span>

              <div>
                <strong>AVAILABLE FOR OPPORTUNITIES</strong>

                <small>Open to interesting projects and developer roles.</small>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-top">
              <div>
                <span>CONTACT FORM</span>
                <h3>SEND A MESSAGE</h3>
              </div>

              <a
                href="tel:+917448937734"
                className="form-code-icon"
                aria-label="Call Hakkim"
                title="Call Siddiq"
              >
                <Phone size={22} />
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  <span></span>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>

                <Send size={18} />

                <div className="submit-shine"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-content">
            <FolderKanban size={19} />

            <span>HAVE A PROJECT IN MIND?</span>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siddiqibrahim55555@gmail.com">
              SAY HELLO
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="contact-bottom-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
