import React, { useState } from "react";
import RatingStars from "./RatingStars";
import styles from "@/styles/CourseDetails.module.css";

interface DeatilsTypes {
  title: string;
  description: string;
}

function CourseDetails({ title, description }: DeatilsTypes) {
  const [RatingIndex, setRatingIndex] = useState<number>(0);
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <RatingStars RatingIndex={RatingIndex} setRatingIndex={setRatingIndex} />
      </div>
      <div className={styles.divider}></div>
      <p className={styles.resources}>Recursos</p>
      <p className={styles.description}>{description}</p>
    </section>
  );
}

export default CourseDetails;
