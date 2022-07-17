import styles from "../styles/layouts/Nav.module.scss";
import { Link } from "react-scroll";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { FC } from "react";
import classnames from "classnames";

interface NavProps {
  isClosed: boolean;
  setIsClosed: (prevState: boolean) => void;
}

const Nav: FC<NavProps> = ({ isClosed, setIsClosed }) => {
  return (
    <nav
      className={classnames(styles.sidenav, { [styles.closednav]: isClosed })}
    >
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <h4 id="logo-name">Sanskar Sharma</h4>
        </div>
        <HiMenuAlt1 onClick={() => setIsClosed(!isClosed)} id="toggle" />
      </div>
      <ul className={styles.nav_list}>
        <li>
          <Link
            to="landing"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <FaHome />
            <span className={styles.linknames}>Home</span>
          </Link>
          <span className={styles.tooltip}>Home</span>
        </li>

        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaInfoCircle />
            <span className={styles.linknames}>About</span>
          </Link>
          <span className={styles.tooltip}>About</span>
        </li>

        <li>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaTools />
            <span className={styles.linknames}>Skills</span>
          </Link>
          <span className={styles.tooltip}>Skills</span>
        </li>

        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaLaptopCode />
            <span className={styles.linknames}>Projects</span>
          </Link>
          <span className={styles.tooltip}>Projects</span>
        </li>

        <li>
          <Link
            to="connect"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaHandshake />
            <span className={styles.linknames}>Connect</span>
          </Link>
          <span className={styles.tooltip}>Connect</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
