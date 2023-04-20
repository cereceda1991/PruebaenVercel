import React, { useState } from 'react';
import styles from '@/styles/PaymentForm.module.css';

function PaymentForm() {
  const [cardInfo, setCardInfo] = useState({
    debitOrCredit: '',
    number: '',
    email: '',
    postalCode: '',
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setCardInfo((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className={styles.all}>
      <div>
        <div>
          <label>Tarjeta de débito o crédito *</label>
          <input name="debitOrCredit" onChange={handleChange}></input>
        </div>
        <div className={styles.right}>
          <label>Número de la tarjeta *</label>
          <input name="number" onChange={handleChange}></input>
        </div>
      </div>
      <div>
        <div>
          <label>Email *</label>
          <input name="email" onChange={handleChange}></input>
        </div>
        <div className={styles.right}>
          <label>Código Postal *</label>
          <input name="postalCode" onChange={handleChange}></input>
        </div>
      </div>
      <div>
        <div>
          <label>Nombre del titular de la tarjeta *</label>
          <input name="name" onChange={handleChange}></input>
        </div>
        <div className={styles.last}>
          <p>* Todods los campos con asterisco son obligatorios</p>
          <p>Te contactamos solo si es necesario</p>
        </div>
      </div>
    </div>
  )
};

export default PaymentForm;
