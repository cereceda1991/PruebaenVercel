import styles from "@/styles/ModalStartNow.module.css";
import Reading from "../assets/Reading.png";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

function ModalStartNow() {
  const [showModal, setShowModal] = useState(true);

  function hideModal() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <div
          className={styles.container_ModalStartNow}
          onClick={() => hideModal()}
        >
          <form onClick={(e) => e.stopPropagation()}>
            <div className={styles.close} onClick={() => hideModal()}>
              <BiX />
            </div>
            <img src={Reading.src} alt="Reading" />
            <p>
              ¡Hola! Te invitamos a acceder a nuestra clase gratuita de inglés,
              donde podrás conocer nuestra metodología y la calidad de nuestros
              contenidos.
            </p>
            <button className={styles.button_start}>
              <Link href={"/classroom/643f669920ab7834dd652c54"}>
                Empezar ahora
              </Link>
            </button>
            <button className={styles.button_later} onClick={() => hideModal()}>
              Tal vez despues
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ModalStartNow;
