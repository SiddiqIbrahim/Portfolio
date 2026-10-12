import {
  ArrowUpRight,
  Code2,
  FolderKanban,
} from "lucide-react";

import {
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import profilePhoto from "../../assets/s.png";

import "./About.css";

const services = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive and user-focused web applications.",
  },
  {
    title: "Frontend Development",
    description:
      "Creating clean, interactive interfaces with modern React.",
  },
  {
    title: "Backend Development",
    description:
      "Building APIs and server-side functionality with Node.js.",
  },
  {
    title: "Database & APIs",
    description:
      "Working with MongoDB and SQL to connecting applications through APIs.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">
        <div className="about-heading">
          <span className="section-badge">
            ABOUT ME
          </span>

          <p className="section-kicker">
            <span></span>
            GET TO KNOW ME
          </p>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <h2 className="about-title">
              PASSIONATE DEVELOPER
              <span>WHO LOVES TO BUILD</span>
            </h2>

            <p className="about-description">
              I'm a Electronics & Communication graduate at
             Mannar Thirumalai Nicker College and
              aspiring full-stack developer who enjoys
              turning ideas into real-world web
              applications. I like exploring modern
              technologies, building projects and
              continuously improving my development
              skills.
            </p>

            <p className="about-description secondary">
              My current focus is on creating clean,
              responsive and practical applications
              using JavaScript, React.js, Node.js and
              MongoDB, SQL.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <SiReact size={22} />

                <div>
                  <strong>Frontend</strong>
                  <span>React & JavaScript</span>
                </div>
              </div>

              <div className="highlight-card">
                <FolderKanban size={22} />

                <div>
                  <strong>Projects</strong>
                  <span>Website & Web Apps</span>
                </div>
              </div>

              <div className="highlight-card">
                <SiNodedotjs size={22} />

                <div>
                  <strong>Backend</strong>
                  <span>Node & APIs</span>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a
                href="#contact"
                className="about-primary-button"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#projects"
                className="about-secondary-button"
              >
                <span>Explore My Work</span>
              </a>
            </div>
          </div>

          <div className="about-profile">
            <div className="profile-orbit profile-orbit-one"></div>
            <div className="profile-orbit profile-orbit-two"></div>

            <div className="profile-card">
              <div className="profile-photo-wrapper">
                <img
                  src={profilePhoto}
                  alt="Hakkim - Full Stack Developer"
                  className="profile-photo"
                />
              </div>

              <div className="profile-frame-line"></div>

              <div className="availability">
                <span className="availability-dot"></span>

                <span>
                  Open to Opportunities
                </span>
              </div>
            </div>

            <div className="profile-tag profile-tag-one">
              React.js
            </div>

            <div className="profile-tag profile-tag-two">
              Node.js
            </div>

            <div className="profile-tag profile-tag-three">
              MongoDB
            </div>
          </div>

          <div className="about-services">
            <div className="services-header">
              <span className="services-icon">
                <Code2 size={21} />
              </span>

              <h3>What I Do</h3>
            </div>

            <div className="services-list">
              {services.map((service, index) => (
                <div
                  className="service-item"
                  key={service.title}
                >
                  <div className="service-number">
                    0{index + 1}
                  </div>

                  <div className="service-icon">
                    <Code2 size={20} />
                  </div>

                  <div className="service-content">
                    <h4>{service.title}</h4>

                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;