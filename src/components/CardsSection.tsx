import React from "react";
import { motion } from "framer-motion";
import ManGettingFolder from "../assets/ManGettingFolder.png";
import CourseCard from "./CourseCard";
import styles from "../styles/HomeCards.module.css";
import { Variant } from "framer-motion";

type Variants = {
  [key: string]: Variant;
};
function CardSection() {
  const courses = [
    {
      title: "Nivel básico",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel intermedio",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel avanzado",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel negocios",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel básico",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel intermedio",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
  ];

  const containerVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: [120, 240],
      transition: {
        ease: "easeInOut",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section className={styles.mainsection}>
      <div className={styles.titlescontainer}>
        <h2 className={styles.maintitle}>Cursos de inglés</h2>
        <p className={styles.subtitle}>
          "Libera tu potencial con nuestra plataforma de aprendizaje de inglés y
          lleva tu carrera al siguiente nivel."
        </p>
      </div>
      <motion.div
        className={styles.cardscontainer}
        variants={containerVariants}
        animate="animate"
      >
        {courses.map((elem) => {
          return (
            <CourseCard
              key={elem.title}
              title={elem.title}
              description={elem.description}
              image={elem.image}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

export default CardSection;
