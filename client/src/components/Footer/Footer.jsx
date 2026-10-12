import {
  ArrowUpRight,
  Code2,
  Heart,
} from "lucide-react";

import "./Footer.css";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-grid"></div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
            >
              <span className="footer-logo-icon">
                <img src="/s-logo.svg" alt="Hakkim Logo" />
              </span>

              <span className="footer-logo-content">
                <span className="footer-logo-text">
                  Sidd<span>q</span>
                </span>

                <span className="footer-tagline">
                  PORTFOLIO
                </span>
            </span>
            </a>

            <p className="footer-description">
              Electronics & Communication graduate and aspiring
              full-stack developer building modern,
              practical and engaging web experiences.
            </p>

            <div className="footer-status">
              <span></span>
              <strong>
                OPEN TO OPPORTUNITIES
              </strong>
            </div>
          </div>

          <div className="footer-navigation">
            <div className="footer-heading">
              NAVIGATION
            </div>

            <nav>
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-cta">
            <div className="footer-heading">
              READY TO BUILD?
            </div>

            <h3>
              LET'S BUILD
              <span> SOMETHING</span>
              <br />
              GREAT.
            </h3>

            <a
              href="#contact"
              className="footer-cta-button"
            >
              START A PROJECT
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-divider">
          <span></span>
          <Code2 size={13} />
          <span></span>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} CODEPORT. ALL RIGHTS
            RESERVED.
          </p>

          <p className="footer-built">
            BUILT WITH
            <Heart size={12} />
            <span>REACT</span>
            +
            <span>NODE.JS</span>
          </p>

          <a
            href="#home"
            className="footer-back-top"
          >
            BACK TO TOP
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;