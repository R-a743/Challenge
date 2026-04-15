import styles from './Input.module.scss';

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;    
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, type = "text", required = false, value, onChange }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <input 
        className={styles.input} 
        placeholder={placeholder} 
        type={type} 
        required={required} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;