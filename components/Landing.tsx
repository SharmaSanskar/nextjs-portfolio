import styles from "../styles/layouts/Landing.module.scss";
import { IoDownloadOutline, IoChevronForwardOutline } from "react-icons/io5";
import AnimatedDev from "./AnimatedDev";
import { Link } from "react-scroll";

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
          Frontend Developer with a passion for creating user-centric
          applications
        </h3>
        <div className={styles.buttons}>
          <button className={styles.contact}>
            <Link
              to="connect"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <IoChevronForwardOutline />
              <p>Contact Me</p>
            </Link>
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
        {/* <Image
          src="/dev-laptop.svg"
          alt="developer with laptop"
          width={300}
          height={300}
        /> */}
        <AnimatedDev />
      </div>
    </section>
  );
};

export default Landing;
