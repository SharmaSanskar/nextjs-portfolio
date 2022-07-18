import styles from "../styles/layouts/Connect.module.scss";
import {
  AiFillMail,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Connect = () => {
  return (
    <section id="connect">
      <h2 className={styles.heading}>
        <span id="highlight">CONNECT</span>
      </h2>
      <div className={styles.socials}>
        <div>
          <AiFillMail size={25} />
          <p>
            Send me a{" "}
            <a
              href="mailto:sharmasanskar004@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Mail
            </a>
          </p>
        </div>
        <div>
          <AiFillGithub size={25} />
          <p>
            View my work on{" "}
            <a
              href="https://github.com/SharmaSanskar"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </p>
        </div>
        <div>
          <AiFillMediumCircle size={25} />
          <p>
            Read my blogs on{" "}
            <a
              href="https://sharmasanskar.medium.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Medium
            </a>
          </p>
        </div>
        <div>
          <AiFillTwitterCircle size={25} />
          <p>
            Follow me on{" "}
            <a
              href="https://twitter.com/sharma__sanskar"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Twitter
            </a>
          </p>
        </div>
        <div>
          <AiFillLinkedin size={25} />
          <p>
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/sharma-sanskar/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className={styles.quoteContainer}>
        <blockquote>
          Is this the <span>end?</span>
        </blockquote>
        <blockquote>
          Or a new <span>beginning. .</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Connect;
