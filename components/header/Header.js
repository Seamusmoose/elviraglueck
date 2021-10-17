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
        <h1>Elvira Glück</h1>
        <h2>Therapie | Supervision | Coaching</h2>
        <p>Wilkommen! Welcome!</p>
      </div>
    </div>
  );
}
