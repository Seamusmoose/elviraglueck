import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.welcome}>
        <h1> Willkommen! </h1>
        <h2>ברוך הבא!</h2>
        <h2>Welcome!</h2>
        <h2>____</h2>
      </div>

      <div className={styles.paraOne}>
        <p>
          Ich bin systemische Therapeutin, Supervisorin und Coacherin seit über
          20 Jahren.
        </p>
        <p>
          I am a systemic therapist, supervisor and coach with more than 20
          years' experience.{" "}
        </p>
      </div>

      <div className={styles.paraTwo}>
        <p>
          Einzel- und Familientherapie, als auch berufliche Fragestellungen sind
          meine Schwerpunkte.
        </p>
        <p>
          Individual and family therapy as well as professional issues are my
          speciality.
        </p>
      </div>

      <div className={styles.paraThree}>
        <p>Sie können mit mir Deutsch, Englisch und Hebräisch sprechen.</p>
        <p>You can speak German, English or Hebrew with me.</p>
      </div>
    </div>
  );
}
