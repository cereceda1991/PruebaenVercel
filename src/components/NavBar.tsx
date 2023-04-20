import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <img src='https://i.ibb.co/TLQS9cS/Verbify-logo.png' />
      <div>
        <Link href="/login" className={styles.link}>
          Iniciar Sesión
        </Link>
        <button className={styles.button}>
          <Link href="/register">
            Registrarme
          </Link>
        </button>
      </div>
    </nav>
  )
}

export default NavBar;
