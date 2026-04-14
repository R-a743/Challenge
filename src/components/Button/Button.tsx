// src/components/Button/Button.tsx

import React from 'react'; 
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: React.CSSProperties; 
}

const Button = ({ children, onClick, variant = 'primary', style }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`} 
      onClick={onClick}
      style={style} 
    >
      {children}
    </button>
  );
};

export default Button;