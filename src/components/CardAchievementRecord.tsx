import styles from "../styles/CardAchievementRecord.module.css";

import AchievementImg from "../assets/Logros.png";

interface Props {
  Achievement: string;
}

function CardAchievementRecord({ Achievement }: Props) {
  return (
    <section className={styles.Card__AchievementRecord}>
      <div className={styles.header_awards}>
        <h1>Mis logros</h1>
        <button>Ver Todos</button>
      </div>
      <hr className={styles.splitLine} />
      <div className={styles.container_awards}>
        <img src={AchievementImg.src} alt={AchievementImg.src} />
        <p>{Achievement}</p>
      </div>
    </section>
  );
}

export default CardAchievementRecord;
