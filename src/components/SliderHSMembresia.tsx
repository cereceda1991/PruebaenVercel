import styles from "@/styles/SliderHSMembresia.module.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function SliderHSMembresia(props: Props) {
  const { text, src, contentbutton, handlePrevious, handleNext } = props;

  return (
    <div className={styles.container__card}>
      <div className={styles.container_img}>
        <img src={src} alt={src} />
      </div>
      <div className={styles.container_phrases}>
        <p>{text}</p>
        <button className={styles.button_Slider}> {contentbutton}</button>
        <div className={styles.buttons_nextprev}>
          <button onClick={handlePrevious}>
            <BiLeftArrowAlt size={28} />
          </button>
          <button onClick={handleNext}>
            <BiRightArrowAlt size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  text: string;
  src: string;
  contentbutton: string;
  handlePrevious: () => void;
  handleNext: () => void;
};

export default SliderHSMembresia;
