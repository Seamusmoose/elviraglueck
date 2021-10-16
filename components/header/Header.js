import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.image}>Image</div>
      <div className={styles.title}>title</div>
      <div className={styles.descrip}>description</div>
    </div>
  );
}
