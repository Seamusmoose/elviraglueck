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

      <div id="about" className={styles.paraOne}>
        <h1 className={styles.ger}>
          Ich bin systemische Therapeutin, Supervisorin und Coacherin seit über
          20 Jahren.
        </h1>
        <p className={styles.eng}>
          I am a systemic therapist, supervisor and coach with more than 20
          years' experience.{" "}
        </p>
      </div>

      <div className={styles.paraTwo}>
        <h1 className={styles.ger}>
          Einzel- und Familientherapie, als auch berufliche Fragestellungen sind
          meine Schwerpunkte.
        </h1>
        <p className={styles.eng}>
          Individual and family therapy as well as professional issues are my
          speciality.
        </p>
      </div>

      <div className={styles.paraThree}>
        <h1 className={styles.ger}>
          {" "}
          Sie können mit mir Deutsch, Englisch und Hebräisch sprechen.
        </h1>
        <p className={styles.eng}>
          You can speak German, English or Hebrew with me.
        </p>
      </div>
    </div>
  );
}
