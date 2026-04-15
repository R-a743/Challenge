import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  type?: "button" | "submit" | "reset"; 
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, variant = 'primary', type = "button", style }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`} 
      onClick={onClick}
      type={type} 
      style={style}
      aria-label={typeof children === 'string' ? children : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;