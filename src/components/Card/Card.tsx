import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;