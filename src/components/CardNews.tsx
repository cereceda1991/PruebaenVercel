import styles from "@/styles/CardNews.module.css";

function CardNews(props: Props) {
  const { text, src } = props;

  return (
    <div className={styles.container__CardNews}>
      <img src={src} alt={src} />
      <h5>{text}</h5>
    </div>
  );
}

type Props = {
  text: string;
  src: string;
};

export default CardNews;
