import Image from "next/image";
import styles from "../styles/layouts/Landing.module.scss";
import {
  IoDownloadOutline,
  IoShareSocialOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const Landing = () => {
  return (
    <section className={styles.landing} id="landing">
      <div className={styles.intro}>
        <h2 id="hindi">
          <span id="highlight">नमस्ते</span>
        </h2>
        <h1>
          I&apos;m <b>Sanskar Sharma</b>
        </h1>
        <h3 className={styles.description}>
          Frontend Web Developer who knows a lil&apos; bit of Machine Learning
        </h3>
        <div className={styles.buttons}>
          <button className={styles.contact}>
            <a href="#connect">
              <IoChevronForwardOutline />
              <p>Contact Me</p>
            </a>
          </button>
          <button className={styles.resume}>
            <a href="/Sanskar-Resume.pdf">
              <IoDownloadOutline />
              <p>Download Resume</p>
            </a>
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/dev-laptop.svg"
          alt="developer with laptop"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Landing;
