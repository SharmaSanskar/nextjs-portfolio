import styles from "../styles/layouts/Skills.module.scss";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiJava,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className={styles.heading}>
        <span id="highlight">SKILLS</span>
      </h2>
      <div className={styles.list}>
        <div className={styles.card}>
          <h3>LANGUAGES</h3>
          <ul>
            <li>
              <SiJavascript /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <SiPython /> Python
            </li>
            <li>
              <SiJava /> Java
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>FRONTEND</h3>
          <ul>
            <li>
              <SiReact /> React
            </li>
            <li>
              <SiNextdotjs /> Next.js
            </li>
            <li>
              <SiSass /> SASS
            </li>
            <li>
              <SiTailwindcss /> TailwindCSS
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>BACKEND</h3>
          <ul>
            <li>
              <SiNodedotjs /> Node.js
            </li>
            <li>
              <SiFastapi /> FastAPI
            </li>
            <li>
              <SiFirebase /> Firebase
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;