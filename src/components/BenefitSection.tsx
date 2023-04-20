import styles from '../styles/BenefitsSection.module.css';


interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

function BenefitSection({ imageUrl, title, description }: Props) {
  return (
  <section className={styles.card__benefit}>
<div>
<img src={imageUrl} alt={imageUrl} />
</div>
  <div>
      <p><b>{title}</b></p>
      <p>{description}</p>
    </div>    
    </section>
  );
}

export default BenefitSection;
