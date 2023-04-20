import SideBar from "@/components/SideBar";
import styles from "../styles/homesinmembresia.module.css";
//Importacion de Iconos
import { BiSearchAlt } from "react-icons/bi";
import CardPlans from "@/components/CardPlans";
import { useState } from "react";
import SliderHSMembresia from "@/components/SliderHSMembresia";
import CardNews from "@/components/CardNews";
import CardResources from "@/components/CardResources";
import ModalStartNow from "@/components/ModalStart";
import SideBarMobile from "@/components/SideBarMobile";

const plansArray = [
  {
    id: 0,
    name: "Plan mensual",
    price: 40,
    features: [
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
    ],
  },
  {
    id: 1,
    name: "Plan anual",
    price: 300,
    features: [
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
    ],
  },
];

const SliderPhrases = [
  {
    id: 0,
    text: "Estudia inglés desde cualquier lugar del mundo con Verbify. ¡Regístrate ahora y comienza a aprender!",
    src: "https://i.ibb.co/t4Swxgk/slideimg1.png",
    contentbutton: "Quiero mi membresía",
  },
  {
    id: 1,
    text: "Mejora tu inglés y destaca en el trabajo con Verbify. ¡Regístrate ahora!",
    src: "https://i.ibb.co/xJNRCJF/slideimg2.png",
    contentbutton: "Quiero mi membresía",
  },
  {
    id: 2,
    text: "¡Únete a nuestra membresía y lleva tus habilidades al siguiente nivel!",
    src: "https://i.ibb.co/K5jQj3V/slideimg3.png",
    contentbutton: "Quiero mi membresía",
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

function Homesinmembresia() {
  const [plan, setPlan] = useState(plansArray[0]);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClickPrevious = () => {
    if (plan.id === 0) {
      setPlan(plansArray[1]);
    } else {
      setPlan(plansArray[plan.id - 1]);
    }
  };

  const handleClickNext = () => {
    if (plan.id === 1) {
      setPlan(plansArray[0]);
    } else {
      setPlan(plansArray[plan.id + 1]);
    }
  };

  return (
    <div className={styles.container__main}>
      <div className={styles.container__sideBar}>
        <SideBar />
        <ModalStartNow />
      </div>
      <div className={styles.container__sideBarmobile}>
        <SideBarMobile />
        <ModalStartNow />
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
        <div className={styles.container_CardPlans}>
          <CardPlans
            plan={plan.name}
            price={plan.price}
            features={plan.features}
            handleClickPrevious={handleClickPrevious}
            handleClickNext={handleClickNext}
          />
        </div>
      </section>
    </div>
  );
}

export default Homesinmembresia;
