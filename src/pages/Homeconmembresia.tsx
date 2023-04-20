import SideBar from "@/components/SideBar";
import styles from "../styles/Homeconmembresia.module.css";
//Importacion de Iconos
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import SliderHSMembresia from "@/components/SliderHSMembresia";
import CardNews from "@/components/CardNews";
import CardResources from "@/components/CardResources";
import SideBarMobile from "@/components/SideBarMobile";
import CardAchievementRecord from "@/components/CardAchievementRecord";
import CardLastClass from "@/components/CardLastClass";

const SliderPhrases = [
  {
    id: 0,
    text: "Si te gusta los ovnis y los fenómenos cósmicos este evento es para ti!",
    src: "https://i.ibb.co/VjYgC1M/banner1.png",
    contentbutton: "Ver mas",
  },
  {
    id: 1,
    text: "Te gustaría hablar sobre deportes en ingles? Únete a nuestro próximo evento deportivo",
    src: "https://i.ibb.co/y57djn9/banner2.png",
    contentbutton: "Ver mas",
  },
  {
    id: 2,
    text: "La clave para que tus hijos aprendan ingles desde temprano ¡Descubre como! ",
    src: "https://i.ibb.co/FnTfrcL/banner3.png",
    contentbutton: "Ver mas",
  },
];

const SliderNews = [
  {
    id: 0,
    text: "Chat GPT proximamente en nuestra web.",
    src: "https://i.ibb.co/rFXT9gg/new2.png",
  },
  {
    id: 1,
    text: "Ingles y la industria del TECH, el futuro.",
    src: "https://i.ibb.co/pWcPzMy/new1.png",
  },
];

const SliderResources = [
  {
    id: 0,
    title: "Cómo utilizar Notion AI para organizar tus tareas de ingles",
    text: "Descubre cómo aprovechar las ventajas y cómo superar las limitaciones de la inteligencia artificial para mejorar tu proceso aprendiendo...",
    src: "https://i.ibb.co/XDYjZNN/resource1.png",
  },
  {
    id: 1,
    title: "GRATIS plantillas para estudiar efectivamente ingles",
    text: "Descubre cómo aprovechar las ventajas y cómo superar las limitaciones de la inteligencia artificial para mejorar tu proceso aprendiendo...",
    src: "https://i.ibb.co/RDtZ6tB/resource2.png",
  },
];

const AchievementRecord = [
  {
    id: 0,
    Achievement: "¡Sigue aprendiendo y gana tu primera insignia!",
  },
];

const LastClass = [
  {
    id: 0,
    title: "Present Simple",
    lastClass: "https://www.youtube.com/embed/JxlgwT0Zruk",
  },
];
function Homeconmembresia() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div className={styles.container__main}>
      <div className={styles.container__sideBar}>
        <SideBar />
      </div>
      <div className={styles.container__sideBarmobile}>
        <SideBarMobile />
      </div>
      <header>
        <div>
          <p>Bienvenido </p>
          <h1>Robert</h1>
        </div>
        <form>
          <input placeholder="Buscar" />
          <button>
            <BiSearchAlt />
          </button>
        </form>
      </header>
      <section className={styles.container__mobile}>
        <div>
          <SliderHSMembresia
            text={SliderPhrases[sliderIndex].text}
            src={SliderPhrases[sliderIndex].src}
            contentbutton={SliderPhrases[sliderIndex].contentbutton}
            handlePrevious={() =>
              setSliderIndex(
                (sliderIndex - 1 + SliderPhrases.length) % SliderPhrases.length
              )
            }
            handleNext={() =>
              setSliderIndex((sliderIndex + 1) % SliderPhrases.length)
            }
          />
        </div>
        <section className={styles.body_section}>
          <div>
            <h3>Noticias Verbify</h3>
            <div className={styles.slider_news}>
              {SliderNews.map((newsItem) => (
                <CardNews
                  key={newsItem.id}
                  text={newsItem.text}
                  src={newsItem.src}
                />
              ))}
            </div>
            <h3>Recursos para aprender mejor</h3>

            <div className={styles.slider_resources}>
              {SliderResources.map((newsItem) => (
                <div>
                  <CardResources
                    key={newsItem.id}
                    title={newsItem.title}
                    text={newsItem.text}
                    src={newsItem.src}
                  />
                </div>
              ))}
            </div>
          </div>
          <section className={styles.section_premium}>
            <div className={styles.Card_AchievementRecord}>
              {LastClass.map((newsItem) => (
                <div>
                  <CardLastClass
                    key={newsItem.id}
                    title={newsItem.title}
                    lastClass={newsItem.lastClass}
                  />
                </div>
              ))}
            </div>
            <div className={styles.Card_AchievementRecord}>
              {AchievementRecord.map((newsItem) => (
                <div>
                  <CardAchievementRecord
                    key={newsItem.id}
                    Achievement={newsItem.Achievement}
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Homeconmembresia;
