import React, { useState } from 'react';
import styles from '@/styles/PurchaseSummary.module.css'
import Link from 'next/link';
import { BiCheck, BiRightArrowAlt } from 'react-icons/bi';

function PurchaseSummary(props: Props) {
  const { plan, price, features, handleClickPrevious, handleClickNext, } = props;
  return (
    <div className={styles.all}>
      <div className={styles.top}>
        <p>Resumen de compra</p>
      </div>
      <div className={styles.mid}>
        <div>
          <h2>{plan}</h2>
        </div>
        <div>
          <h2>{'$' + price + '.00'}</h2>
        </div>
        <div>
          {features.map((feature, i) => <div key={i}><BiCheck /><p>{feature}</p></div>)}
        </div>
        <div>
          <Link href='/'><p className={styles.link}>Saber más</p></Link>
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
  )
};

type Props = {
  plan: string,
  price: number,
  features: string[],
  handleClickPrevious: () => void,
  handleClickNext: () => void,
}

export default PurchaseSummary;
