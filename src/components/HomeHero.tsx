import styles from '@/styles/HomeHero.module.css';
import ManGettingDegreeOnline1 from '../assets/ManGettingDegreeOnline1.png';
import Link from 'next/link';

function HomeHero() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Domina el inglés: <br />la clave para el éxito <br /> profesional.</h1>
        <p>Libera tu potencial con nuestra plataforma de aprendizaje de inglés y lleva tu carrera al siguiente nivel.</p>
        <div>
          <button className={styles.begin}>
            <Link href="/login">
              Iniciar
            </Link>
          </button>
          <button className={styles.register}>
            <Link href="/register">
              Registrarme
            </Link>
          </button>
        </div>
      </div>
      <img src={ManGettingDegreeOnline1.src} />
    </div>
  )
}

export default HomeHero;
