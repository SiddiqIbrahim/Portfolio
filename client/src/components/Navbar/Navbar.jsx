import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Download,
  Menu,
  X,
} from "lucide-react";

import "./Navbar.css";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(
            visibleSection.target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });

      observer.disconnect();
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-icon">
            <img src="/s-logo.svg" alt="Siddiq Logo"/>
          </span>

          <span className="logo-content">
            <span className="logo-name">
              Sidd<span>iq</span>
            </span>

            <span className="logo-tagline">
              PORTFOLIO
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}

        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className={`nav-link ${
                activeSection ===
                item.href.substring(1)
                  ? "active"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}

        <div className="navbar-actions">

          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            aria-label="View Button"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="contact-button"
          >
            <span>Get In Touch</span>

            <ArrowUpRight size={18} />
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}

        <div
          className={`mobile-menu ${
            menuOpen
              ? "mobile-menu-open"
              : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume-button"
            onClick={closeMenu}
          >
            <Download size={16} />
            View Resume
          </a>

          <a
            href="#contact"
            className="mobile-contact-button"
            onClick={closeMenu}
          >
            Get In Touch

            <ArrowUpRight size={18} />
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;