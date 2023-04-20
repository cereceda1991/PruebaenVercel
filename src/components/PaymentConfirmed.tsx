import React from "react";
import Verbify from "../assets/Verbify.png";
import ManTouchingBookWithStick from "../assets/ManTouchingBookWithStick.png";
import { BiCheck } from "react-icons/bi";
import styles from "@/styles/PaymentConfirmed.module.css";

function PaymentConfirmed() {
  return (
    <div className={styles.all}>
      <div>
        <div className={styles.top}>
          <div>
            <p>2. Confirmación del pago</p>
            <img src={Verbify.src} alt="logo" />
          </div>
          <hr />
        </div>
        <div className={styles.mid}>
          <img
            src={ManTouchingBookWithStick.src}
            alt="Man sitting while reading a book"
          />
          <label>
            <BiCheck size={42} />
          </label>
          <h1>Pago exitoso</h1>
        </div>
      </div>
      <div className={styles.bot}>
        <p>Paso 2 de 2</p>
        <button>Empezar mis clases</button>
      </div>
    </div>
  );
}

export default PaymentConfirmed;
