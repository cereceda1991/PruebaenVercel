import React from 'react';
import Link from 'next/link';
import CourseCard from './CourseCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from '@/styles/ResponsiveHome.module.css';
import Verbify from '../assets/Verbify.png';
import ManGettingFolder from '../assets/ManGettingFolder.png';
import ManGettingDegreeOnline1 from '../assets/ManGettingDegreeOnline1.png';
import BenefitSection from './BenefitSection';

const courses = [
  {
    title: "Nivel básico",
    image: ManGettingFolder.src,
    description:
      "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
  },

  {
    title: "Nivel intermedio",
    image: ManGettingFolder.src,
    description:
      "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
  },

  {
    title: "Nivel avanzado",
    image: ManGettingFolder.src,
    description:
      "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
  },

  {
    title: "Nivel negocios",
    image: ManGettingFolder.src,
    description:
      "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
  },
];

function ResponsiveHome() {
  return (
    <div className={styles.all}>
      <section className={styles.hero}>
        <img className={styles.img__1} src={Verbify.src} />
        <div>
          <div className={styles.login}>
            <Link href="/login">
              Iniciar Sesión
            </Link>
          </div>
          <button>
            <Link href="/register">
              Registrarme
            </Link>
          </button>
        </div>
        <img className={styles.img__2} src={ManGettingDegreeOnline1.src} />
        <h1>Domina el inglés: la clave para el éxito profesional.</h1>
        <p>Libera tu potencial con nuestra plataforma de aprendizaje de inglés y lleva tu carrera al siguiente nivel.</p>
      </section>
      <section className={styles.mainsection}>
        <div className={styles.titlescontainer}>
          <h2 className={styles.maintitle}>Cursos de inglés</h2>
          <p className={styles.subtitle}> Todos los niveles para que lleves tu ingles al siguiente nivel </p>
        </div>
      </section>
      <div className={styles.slick}>
        <Slider dots>
          {courses &&
            courses.map((elem, index) => {
              return (
                <div key={index} className={styles.carousel}>
                  <CourseCard
                    key={elem.title}
                    title={elem.title}
                    description={elem.description}
                    image={elem.image}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className={styles.container__benefitsSection}>
        <h2>Beneficios de estudiar en Verbify</h2>
        <div className={styles.container_benefits}>
          <BenefitSection
            imageUrl="https://i.ibb.co/RgVFLy8/global-edit.png"
            title="Flexibilidad:"
            description="Puedes aprender inglés desde cualquier lugar y en cualquier momento, ajustándote a tu horario y ritmo de aprendizaje."
          />
          <BenefitSection
            imageUrl="https://i.ibb.co/xz0n2DB/tag-user.png"
            title="Variedad de opciones:"
            description="Las plataformas en línea ofrecen una amplia variedad de cursos de inglés, desde los niveles básicos hasta el nivel de negocios, lo que te permite elegir el que mejor se adapte a tus necesidades y objetivos."
          />
          <BenefitSection
            imageUrl="https://i.ibb.co/X2BPX0S/medal-star.png"
            title="Contenido de calidad:"
            description="Los cursos pregrabados cuentan con profesionales experimentados que proporcionan contenido de calidad, estructurado y diseñado para maximizar tu aprendizaje."
          />
          <BenefitSection
            imageUrl="https://i.ibb.co/k4BBhJQ/chart.png"
            title="Interacción con profesionales:"
            description="A pesar de ser cursos pregrabados, los profesionales estarán disponibles para responder a tus preguntas y proporcionarte retroalimentación para ayudarte a mejorar."
          />
          <BenefitSection
            imageUrl="https://i.ibb.co/FV75kPb/clock.png"
            title="Ahorro de tiempo:"
            description="Aprender inglés en línea te permite ahorrar tiempo y esfuerzo, ya que no tienes que desplazarte a un lugar específico para tomar las clases."
          />

          <BenefitSection
            imageUrl="https://i.ibb.co/g62Yy6C/element-3.png"
            title="Progreso medible:"
            description="Las plataformas en línea te permiten medir tu progreso y conocer tu nivel de competencia, lo que te ayudará a identificar tus fortalezas y debilidades y mejorar en el aprendizaje del idioma."
          />
        </div>
      </div>
      <div className={styles.container__NewsletterSection}>
        <section className={styles.logo__newsletter}>
          <img src='https://i.ibb.co/Ct71D8d/Vector.png' alt='vector' />
        </section>
        <section className={styles.contenido__newsletter}>
          <h1>Recibe nuestras noticias</h1>
          <p> Descubre nuevas formas de aprender y mejorar con nuestro
            newsletter lleno de contenido exclusivo y consejos prácticos.</p>
          <form>
            <input placeholder='Tu correo electrónico' />
            <button><img src='https://i.ibb.co/z8rdpLs/send-2.png' /></button>
          </form>
        </section>
      </div>
      <div className={styles.footer}>
        <div>
          <nav>
            <div className={styles.footer__list}>
              <ul>
                <li><h4>Compañía</h4></li>
                <li>Acerca de Nosotros</li>
                <li>Por Qué Elegirnos</li>
                <li>Precios</li>
                <li>Testimonios</li>
              </ul>
              <ul>
                <li><h4>Recursos</h4></li>
                <li>Política de Privacidad</li>
                <li>Términos y Condiciones</li>
                <li>Blog</li>
                <li>Contáctanos</li>
              </ul>
              <ul>
                <li><h4>Producto</h4></li>
                <li>Gestión de Proyectos</li>
                <li>Seguimiento de Tiempo</li>
                <li>Programación de Tiempo</li>
                <li>Generación de Prospectos</li>
                <li>Colaboración Remota</li>
              </ul>
            </div>
            <section>
              <h1>Verbify</h1>
              <h4>Suscríbete a nuestro boletín</h4>
              <form>
                <input placeholder='Ingresa tu correo electrónico'></input>
                <button>Suscribirse</button>
              </form>
            </section>
          </nav>
          <section className={styles.logo_verbify}>
            <hr className={styles.linea} />
            <img src='https://i.ibb.co/TLQS9cS/Verbify-logo.png' />
            <hr className={styles.linea} />
          </section>
        </div>
      </div>
    </div>
  )
};

export default ResponsiveHome;
