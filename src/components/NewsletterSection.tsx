import React from 'react';
import styles from '../styles/NewsletterSection.module.css';

function NewsletterSection () {
  return (
    <div className={styles.container__NewsletterSection}>
        <section className={styles.logo__newsletter }> 
            <img src='https://i.ibb.co/Ct71D8d/Vector.png' alt='vector'/>
        </section>
        <section className={styles.contenido__newsletter }>
        <h1>Recibe nuestras noticias</h1>
        <p> Descubre nuevas formas de aprender y mejorar con nuestro
newsletter lleno de contenido exclusivo y consejos prácticos.</p>
<form>
    <input placeholder='Enter your e-mail'/>
    <button><img src='https://i.ibb.co/z8rdpLs/send-2.png'/></button>
</form> 
</section>
    </div>
  );
}

export default NewsletterSection;
