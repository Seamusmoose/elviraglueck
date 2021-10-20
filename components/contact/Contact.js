import styles from "./contact.module.css";
import Image from "next/image";
import contactImage from "../../public/Elvira-header.jpeg";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.image}>
        <Image src={contactImage} alt="profileImage" layout="responsive" />
      </div>
      <div className={styles.title}>
        <div>
          <p className={styles.contactGer}>Vielen Dank für Ihren Besuch!</p>
          <p className={styles.contactEng}>Thank you for your visit!</p>
        </div>
        <div id="contact">
          <p className={styles.contactGer}>
            Sie können auch eine Mail an info@elviraglueck.com schicken.
          </p>
          <p className={styles.contactEng}>
            You can also send an email to info@elviraglueck.com
          </p>
        </div>
        <div>
          <p className={styles.contactGer}>
            Wenn Sie einen Termin vereinbaren möchten oder eine Frage haben,
          </p>
          <p className={styles.contactGer}>
            {" "}
            rufen Sie Frau Glücks Praxis unter 030 21018635 / 0172 3953300 an.{" "}
          </p>
          <p className={styles.contactEng}>
            If you would like an appointment or if you have a query,
          </p>
          <p className={styles.contactEng}>
            please call Elvira Glück's practice on 030 21018635 / 0172 3953300.
          </p>
        </div>
      </div>
    </div>
  );
}
