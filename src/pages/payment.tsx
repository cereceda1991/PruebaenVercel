import React, { useState } from "react";
import PurchaseSummary from "@/components/PurchaseSummary";
import PaymentInfo from "@/components/PaymentInfo";
import styles from "@/styles/Payment.module.css";
import PaymentConfirmed from "@/components/PaymentConfirmed";

const plansArray = [
  {
    id: 0,
    name: "Gratis",
    price: 0,
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
    id: 2,
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

function Payment() {
  const [plan, setPlan] = useState(plansArray[0]);
  const [confirmed, setConfirmed] = useState(false);

  const handleClickPrevious = () => {
    if (plan.id < 1) {
      setPlan(plansArray[2]);
    } else {
      setPlan(plansArray[plan.id - 1]);
    }
  };

  const handleClickNext = () => {
    if (plan.id > 1) {
      setPlan(plansArray[0]);
    } else {
      setPlan(plansArray[plan.id + 1]);
    }
  };

  const handleClickConfirm = () => {
    setConfirmed(true);
  };

  return (
    <div>
      {!confirmed ? (
        <div className={styles.all}>
          <div>
            <PaymentInfo
              plan={plan.name}
              price={plan.price}
              id={plan.id}
              handleClickConfirm={handleClickConfirm}
            />
          </div>
          <div className={styles.right}>
            <PurchaseSummary
              plan={plan.name}
              price={plan.price}
              features={plan.features}
              handleClickPrevious={handleClickPrevious}
              handleClickNext={handleClickNext}
            />
          </div>
        </div>
      ) : (
        <PaymentConfirmed />
      )}
    </div>
  );
}

export default Payment;
