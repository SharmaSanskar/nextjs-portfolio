import Image from "next/image";
import styles from "../styles/layouts/About.module.scss";

const About = () => {
  return (
    <section id="about">
      <h2 className={styles.heading}>
        <span id="highlight">ABOUT ME</span>
      </h2>

      <div className={styles.about}>
        <div className={styles.bio}>
          <p>
            Hey, I&apos;m a Frontend Web Developer based in India. I have worked
            with various modern web technologies building full stack web
            applications. <br />
            <br />I have a bachelors degree in Information Technology from Jai
            Hind College, Mumbai. I also have a keen interest in Machine
            Learning and I have completed some certifications to complement my
            interest
            <br />
            <br />I have a bachelors degree in Information Technology from Jai
            Hind College, Mumbai. I also have a keen interest in Machine
            Learning and I have completed some certifications to complement my
            interest
          </p>
          <div className={styles.image}>
            <Image
              className={styles.myimage}
              alt="My image"
              src="/profile.jpg"
              width={150}
              height={150}
            />
          </div>
        </div>

        <h3>CERTIFICATIONS</h3>
        <div className={styles.certificate}>
          <p>
            <b>IBM Data Science Professional Certificate</b>
          </p>
          <p>Completed 10 courses related to Data Sceince and ML in Python</p>
        </div>
        <div className={styles.certificate}>
          <p>
            <b>Deep Learning, IIT Ropar</b>
          </p>
          <p>Among one of the toppers of the course</p>
        </div>
      </div>
    </section>
  );
};

export default About;
