import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css"

function NavBar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link to="/">Tal Rimoni</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
