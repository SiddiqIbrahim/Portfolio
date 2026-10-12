import { useState } from "react";

import {
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import {  
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import {
  FaCss3Alt,  
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import "./Skills.css";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    skills: [
      {
        name: "HTML",
        level: 95,
        icon: SiHtml5,
      },
      {
        name: "CSS",
        level: 90,
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        level: 95,
        icon: SiJavascript,
      },
      {
        name: "React.js",
        level: 95,
        icon: SiReact,
      },      
      {
        name: "Tailwind CSS",
        level: 95,
        icon: SiTailwindcss,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "code",
    skills: [
      {
        name: "Node.js",
        level: 90,
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        level: 90,
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        level: 95,
        icon: Network,
      },
      {
        name: "Authentication",
        level: 90,
        icon: ShieldCheck,
      },      
      {
        name: "Mongoose",
        level: 90,
        icon: SiMongoose,
      }      
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: [
      {
        name: "MongoDB",
        level: 90,
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        level: 95,
        icon: SiMysql,
      }      
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: [
      {
        name: "Git",
        level: 90,
        icon: SiGit,
      },
      {
        name: "GitHub",
        level: 95,
        icon: SiGithub,
      },
      {
        name: "VS Code",
        level: 100,
        icon: VscVscode,
      },
      {
        name: "Render",
        level: 90,
        icon: SiRender,
      },
      {
        name: "Vercel",
        level: 90,
        icon: SiVercel,
      },
    ],
  },
];

const categoryTabs = [
  {
    id: "all",
    title: "All Skills",
  },
  {
    id: "frontend",
    title: "Frontend",
  },
  {
    id: "backend",
    title: "Backend",
  },
  {
    id: "database",
    title: "Database",
  },
  {
    id: "tools",
    title: "Tools",
  },
];

function getCategoryIcon(category) {
  if (category === "database") {
    return <Database size={14} />;
  }

  if (category === "tools") {
    return <Wrench size={14} />;
  }

  return <Code2 size={16} />;
}

function Skills() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  return (
    <section className="skills" id="skills">
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="skills-grid"></div>

      <div className="skills-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-kicker">
            <span className="kicker-line"></span>

            <span>MY EXPERTISE</span>

            <span className="kicker-line reverse"></span>
          </div>

          <h2 className="skills-title">
            MY <span>TECH</span> ARSENAL
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build
            practical, responsive and engaging
            digital experiences.
          </p>
        </div>

        <div className="skills-tabs">
          {categoryTabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`skill-tab ${
                activeCategory === tab.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(tab.id)
              }
            >
              <span className="tab-icon">
                {tab.id === "all" ? (
                  <Layers3 size={17} />
                ) : (
                  getCategoryIcon(tab.id)
                )}
              </span>

              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="skills-cards">
          {skillCategories.map((category) => (
            <div
              className={`skill-card ${
                activeCategory === category.id
                  ? "skill-card-selected"
                  : ""
              }`}
              key={category.id}
            >
              <div className="skill-card-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(category.id)}
                </div>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <div
                      className="skill-item"
                      key={skill.name}
                    >
                      <div className="skill-info">
                        <span className="skill-name">
                          {SkillIcon && (
                            <SkillIcon
                              size={16}
                              aria-hidden="true"
                            />
                          )}

                          <span>{skill.name}</span>
                        </span>

                        <span className="skill-level">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="skill-track">
                        <div
                          className="skill-progress"
                          style={{
                            "--skill-level": `${skill.level}%`,
                          }}
                        >
                          <span></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <div className="skills-highlight">
            <div className="highlight-icon">
              <BookOpenCheck size={24} />
            </div>

            <div>
              <h3>Always Learning</h3>

              <p>
                Continuously improving my development
                skills by building and experimenting
                with projects.
              </p>
            </div>
          </div>

          <div className="highlight-divider"></div>

          <div className="skills-highlight">
            <div className="highlight-icon">
              <Lightbulb size={24} />
            </div>

            <div>
              <h3>Problem Solver</h3>

              <p>
                I enjoy breaking complex problems
                into smaller and practical solutions.
              </p>
            </div>
          </div>

          <div className="highlight-divider"></div>

          <div className="skills-highlight">
            <div className="highlight-icon">
              <Code2 size={24} />
            </div>

            <div>
              <h3>Passionate Developer</h3>

              <p>
                I enjoy creating web applications
                with strong visual experiences.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          className="skills-project-link"
        >
          <span>Explore My Projects</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default Skills;