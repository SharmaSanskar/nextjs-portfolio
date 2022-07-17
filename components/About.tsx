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
