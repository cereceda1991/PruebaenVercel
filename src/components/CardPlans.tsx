import React, { useState } from "react";
import styles from "@/styles/CardPlans.module.css";
import Link from "next/link";
import { BiCheck, BiRightArrowAlt } from "react-icons/bi";

function CardPlans(props: Props) {
  const { plan, price, features, handleClickPrevious, handleClickNext } = props;
  return (
    <div className={styles.all}>
      <div className={styles.mid}>
        <div>
          <h2>{plan}</h2>
        </div>
        <div>
          <h2>{"$" + price + ".00"}</h2>
        </div>
        <div>
          {features.map((feature, i) => (
            <div key={i}>
              <BiCheck />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <div>
          <Link href="/">
            <p className={styles.link}>Ver más</p>
          </Link>
        </div>
        <div>
          <button className={styles.button_Plan}>Adquirir Plan</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.left_button} onClick={handleClickPrevious}>
          <BiRightArrowAlt size={28} />
        </button>
        <button onClick={handleClickNext}>
          <BiRightArrowAlt size={28} />
        </button>
      </div>
    </div>
  );
}

type Props = {
  plan: string;
  price: number;
  features: string[];
  handleClickPrevious: () => void;
  handleClickNext: () => void;
};

export default CardPlans;
