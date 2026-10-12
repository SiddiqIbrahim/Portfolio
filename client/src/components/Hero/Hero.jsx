import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Mail,
  Send,
  Terminal,
} from "lucide-react";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb, 
  SiMysql,
} from "react-icons/si";

import {
  GithubIcon,
  LinkedinIcon,
} from "../Icons/SocialIcons";

import "./Hero.css";
import heroDeveloper from "../../assets/Siddiq.png";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React.js",
    icon: SiReact,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-role">
            <span className="role-dot"></span>

            <span>FULL-STACK DEVELOPER</span>

            <span className="role-line"></span>
          </div>

          <h1 className="hero-title">
            I BUILD
            <span> DIGITAL</span>
            <br />
            <strong>EXPERIENCES</strong>
            <br />
            THAT FEEL DIFFERENT.
          </h1>

          <p className="hero-description">
            I craft modern, responsive and user-focused web
            applications using modern JavaScript technologies
            and full-stack development.
          </p>

          <div className="hero-technologies">
            {technologies.map((technology) => {
              const TechnologyIcon = technology.icon;

              return (
                <div
                  className="technology-item"
                  key={technology.name}
                >
                  <span className="technology-icon">
                    <TechnologyIcon size={16} />
                  </span>

                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="hero-primary-button"
            >
              <span>View My Projects</span>
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              <Send size={18} />
              <span>Let's Connect</span>
            </a>
          </div>

          <div className="hero-social">
            <span className="social-label">
              FIND ME ON
            </span>

            <a
              href="https://github.com/SiddiqIbrahim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/siddiq-siddiq/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>

            <a
              href="#contact"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="visual-ring">
            <div className="ring-light"></div>
          </div>

          <div className="floating-chip">
            <Cpu size={38} strokeWidth={2} />
          </div>

          <div className="developer-visual">
            <div className="developer-glow"></div>

            <div className="developer-photo-wrapper">
              <img
                src={heroDeveloper}
                alt="Hakkim - Full Stack Developer"
                className="developer-photo"
              />
            </div>
          </div>

          <div className="code-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>developer.js</span>

              <Terminal size={15} />
            </div>

            <div className="terminal-code">
              <p>
                <span className="code-keyword">
                  const
                </span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="code-string">
                  "Siddiq"
                </span>
                ,
              </p>

              <p>
                &nbsp;&nbsp;stack:{" "}
                <span className="code-string">
                  "MERN"
                </span>
                ,
              </p>

              <p>
                &nbsp;&nbsp;passion:{" "}
                <span className="code-string">
                  "Building"
                </span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>

          <div className="floating-tech tech-react">
            <SiReact size={14} />
            <span>React</span>
          </div>

          <div className="floating-tech tech-node">
            <SiNodedotjs size={14} />
            <span>Node</span>
          </div>

          <div className="floating-tech tech-mongo">
            <SiMysql size={14} />
            <span>MYSQL</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About"
      >
        <div className="scroll-icon">
          <ArrowDown size={18} />
        </div>

        <span>SCROLL</span>
      </a>
    </section>
  );
}

export default Hero;