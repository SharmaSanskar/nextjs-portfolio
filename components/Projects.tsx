import Image from "next/image";
import styles from "../styles/layouts/Projects.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  interface Project {
    id: number;
    name: string;
    img: string;
    description: string;
    tags: string[];
    github: string;
    live: string;
  }
  const projects: Project[] = [
    {
      id: 1,
      name: "CryptoPlace",
      img: "/cryptoplace.gif",
      description:
        "Next.js and Tailwind CSS web application providing information about top cryptos and latest crypto news. Also has Flask backend to serve Sentiment analysis and Price prediction ML models.",
      tags: ["Next.js", "TailwindCSS", "Flask", "Redis"],
      github: "https://github.com/SharmaSanskar/nextjs-cryptoplace",
      live: "",
    },
    {
      id: 2,
      name: "Concord Video Chat",
      img: "/concord.gif",
      description:
        "Video chat application with ability to add friends and create rooms. Made using React, Redux, Firebase, Node.js and SASS modules.",
      tags: ["React", "SASS", "Node.js", "Firebase", "WebRTC"],
      github: "https://github.com/SharmaSanskar/react-concord-videochat",
      live: "",
    },
    {
      id: 3,
      name: "GradHelp",
      img: "/gradhelp.gif",
      description:
        "React and FastAPI application that uses Machine Learning and Deep Learning to predict admission chance in top US universities and give university recommendations.",
      tags: ["ML", "React", "TailwindCSS", "FastAPI", "MongoDB"],
      github: "https://github.com/SharmaSanskar/ml-gradhelp",
      live: "",
    },
  ];
  return (
    <section id="projects">
      <h2 className={styles.heading}>
        <span id="highlight">PROJECTS</span>
      </h2>
      <div className={styles.list}>
        {projects.map((proj) => (
          <div key={proj.id} className={styles.card}>
            <div className={styles.image}>
              <Image alt={proj.name} src={proj.img} width={400} height={200} />
            </div>
            <div className={styles.info}>
              <h3>{proj.name}</h3>
              <h5 className={styles.tags}>
                {proj.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </h5>
              <h4 className={styles.description}>{proj.description}</h4>

              <div className={styles.buttons}>
                {/* <button className={styles.link}>
                  <a href={proj.github}>
                    <FiExternalLink />
                    <h5>Try it</h5>
                  </a>
                </button> */}
                <button className={styles.code}>
                  <a href={proj.github}>
                    <AiOutlineGithub />
                    <h5>View Code</h5>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
