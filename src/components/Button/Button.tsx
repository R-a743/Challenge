import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button 
      className={`${styles.btn} ${styles[`btn--${variant}`]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;