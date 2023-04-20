import BenefitSection from "./BenefitSection";
import styles from '../styles/BenefitsSection.module.css';

function BenefitsSection() {
  return (
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
  );
}

export default BenefitsSection;
