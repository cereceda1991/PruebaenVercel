import React from 'react';
import styles from '../styles/PricingSection.module.css';

function PricingSection() {
  return (
    <div className={styles.container__pricing}>
    <h2>Plan de Precios</h2>
    <div className={styles.container__sections}>
        <section>
            <p>Plan Gratis</p>
            <h1>GRATIS</h1>
            <ul>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
            </ul>
            <p><a href='#'>Más Información</a></p>
            <button>Seleccionar Plan</button>
        </section>
        <hr className={styles.lineSections} />
        <section>
            <p>Plan Básico</p>
            <h1>$25</h1>
            <ul>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
            </ul>
            <p><a href='#'>Más Información</a></p>
            <button>Seleccionar Plan</button>
        </section>
        <hr className={styles.lineSections} />
        <section>
            <p>Plan de Negocios</p>
            <h1>$50</h1>
            <ul>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
                <li><span>✔</span> Función Destacada 01</li>
            </ul>
            <p><a href='#'>Más Información</a></p>
            <button>Seleccionar Plan</button>
        </section>
    </div>
</div>
  );
}

export default PricingSection;
