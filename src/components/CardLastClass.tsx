import styles from "../styles/CardLastClass.module.css";
import { BiPlayCircle } from "react-icons/bi";

interface Props {
  lastClass: string;
  title: string;
}

function CardLastClass({ lastClass, title }: Props) {
  return (
    <section className={styles.Card__LastClass}>
      <div className={styles.header_class}>
        <div>
          <h1>Tu última clase:</h1>
          <p>{title}</p>
        </div>
        <iframe
          className={styles.videoframe}
          width="209"
          height="89"
          src={lastClass}
          title="Last class video"
          allowFullScreen
          allow="autoplay"
        />
      </div>
      <h1>80%</h1>
      <hr className={styles.splitLine} />
      <div className={styles.continueClass}>
        <button>
          <BiPlayCircle /> Continuar clase
        </button>
      </div>
    </section>
  );
}

export default CardLastClass;
