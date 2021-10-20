import styles from "./navBar.module.css";
import Link from "next/link";

export default function NavBar(params) {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.linkItems}>
        {/* <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li> */}
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
