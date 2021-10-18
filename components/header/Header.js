import styles from "./header.module.css";
import idImage from "../../public/example.webp";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.image}>
        <Image src={idImage} alt="profileImage" layout="responsive" />
      </div>
      <div className={styles.title}>
        <h1 className={styles.fadeInOne}>Elvira Glück</h1>
        <h2 className={styles.fadeInTwo}>Therapie | Supervision | Coaching</h2>
        <p className={styles.fadeInThree}>Wilkommen! </p>
        <p className={styles.fadeInThree}>Welcome!</p>
      </div>
    </div>
  );
}
