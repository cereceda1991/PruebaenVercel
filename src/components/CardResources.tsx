import styles from "@/styles/CardResources.module.css";

function CardResources(props: Props) {
  const { title, text, src } = props;

  return (
    <div className={styles.container__CardResources}>
      <img src={src} alt={src} />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}

type Props = {
  title: string;
  text: string;
  src: string;
};

export default CardResources;
