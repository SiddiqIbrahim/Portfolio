

import {
  ArrowUpRight,
  FolderKanban,
  Network,
} from "lucide-react";

import {
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import { FaCss3Alt, FaGithub } from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "X-Clone",
    category: "Social media company",
    description:
      "X (formerly Twitter) is a social media platform where people share thoughts, news, opinions, images, videos, and connect with others around the world.",
    longDescription:
      "X (formerly known as Twitter) is a social media and communication platform that allows users to share short posts, thoughts, opinions, news, images, videos, and links. Users can follow people, brands, celebrities, and organizations to see their latest updates on their timeline. X also provides features such as likes, reposts, replies, bookmarks, direct messages, trending topics, communities, and real-time conversations, making it a platform for discovering and discussing what is happening around the world.",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: true,    
    image: "/projects/Xclone.png",
    liveUrl: "https://xclone-dusky.vercel.app/",
    githubUrl: "https://github.com/SiddiqIbrahim/Twitter-Clone",
  },

  {
    id: 2,
    title: "E-Commerce",
    category: "Retail",
    description:
      "A modern e-commerce website that allows users to browse products, view product details, add items to their cart, and manage their shopping experience through a clean and responsive interface.",
    longDescription:
      "Developed a modern and responsive e-commerce website designed to provide users with a smooth online shopping experience. The website allows users to browse and explore products, view detailed product information, select products, add or remove items from the shopping cart, and manage their purchases. The interface is designed to be simple, user-friendly, and responsive across different screen sizes.",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: false,   
    image: "/projects/shopper.png",
    liveUrl: "https://e-commerce-tau-two-43.vercel.app/",
    githubUrl: "https://github.com/SiddiqIbrahim/E-commerce",
  }  

];

/* ── Main Projects Section ─────────────────────────── */

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects" id="projects">
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-grid"></div>

      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-kicker">
            <span></span>
            MY WORK
            <span></span>
          </div>

          <h2 className="projects-title">
            PROJECT <span>ARCHIVE</span>
          </h2>

          <p className="projects-description">
            A collection of applications, experiments and digital experiences
            I've built while developing my skills. Click any project to explore
            it in depth.
          </p>
        </div>

        {featuredProject && (
          <article className="featured-project">
            <div className="featured-visual">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} project preview`}
                className="featured-project-image"
              />

              <div className="featured-project-overlay"></div>

              <div className="featured-label">FEATURED</div>
            </div>

            <div className="featured-content">
              <div className="project-category">{featuredProject.category}</div>

              <h3>{featuredProject.title}</h3>

              <p>{featuredProject.description}</p>

              <div className="project-technologies">
                {featuredProject.technologies.map((technology) => {
                  const TechnologyIcon = technology.icon;

                  return (
                    <span key={technology.name}>
                      {TechnologyIcon && <TechnologyIcon size={14} />}

                      {technology.name}
                    </span>
                  );
                })}
              </div>

              <div className="project-actions">
                <a
                  href={featuredProject.liveUrl}
                  className="project-primary-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={featuredProject.githubUrl}
                  className="project-secondary-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={17} />
                  <span>Github Code</span>
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="projects-grid-list">
          {otherProjects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.id}
            >
              <div className="project-card-visual">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-card-image"
                  />
                )}

                <div className="project-card-overlay"></div>

                <div className="project-card-corner"></div>

                <span className="project-status">PROJECT</span>
              </div>

              <div className="project-card-content">
                <span className="project-card-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card-footer">
                  <div className="project-mini-tech">
                    {project.technologies.slice(0, 3).map((technology) => {
                      const TechnologyIcon = technology.icon;

                      return (
                        <span key={technology.name}>
                          {TechnologyIcon && <TechnologyIcon size={13} />}

                          {technology.name}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom">
          <div className="projects-bottom-icon">
            <FolderKanban size={25} />
          </div>

          <div>
            <h3>More projects are loading...</h3>

            <p>
              I'm continuously building, learning and experimenting with new
              technologies.
            </p>
          </div>

          <a href="#contact" className="projects-bottom-button">
            Let's Build
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
