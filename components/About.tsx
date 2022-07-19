import Image from "next/image";
import styles from "../styles/layouts/About.module.scss";

const About = () => {
  interface Certification {
    id: number;
    name: string;
    description: string;
  }

  const certifications: Certification[] = [
    {
      id: 1,
      name: "IBM Data Science Professional Certificate",
      description:
        "Completed 10 courses related to Data Sceince and ML in Python",
    },
    {
      id: 2,
      name: "Deep Learning, IIT Ropar",
      description: "Among one of the toppers of the course",
    },
  ];
  return (
    <section id="about">
      <h2 className={styles.heading}>
        <span id="highlight">ABOUT ME</span>
      </h2>

      <div className={styles.about}>
        <div className={styles.bio}>
          <p>
            Hey there, my name is Sanskar Sharma. I am a Frontend Web Developer
            based out of India, with a Bachelor&apos;s degree in Information
            Technology.
            <br />
            <br />I have developed a number of full stack applications over the
            past few years using modern web technologies for both my
            undergraduate work and personal projects. I enjoy technology because
            it gives me the opportunity to continually learn and explore new
            areas such as UI/UX design, web development, and machine learning.
            <br />
            <br />I am result-oriented individual and believe in providing the
            best user experience possible. In my spare time, I enjoy sketching
            and have a keen eye for detail. Also, chances are I&apos;ve already
            seen your favourite movie, TV show, or anime.
          </p>
          <div className={styles.image}>
            <Image
              className={styles.myimage}
              alt="My image"
              src="/profile-lavender.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>

        <h3>CERTIFICATIONS</h3>
        {certifications.map((cert) => (
          <div key={cert.id} className={styles.certificate}>
            <p>
              <b>{cert.name}</b>
            </p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
