import styles from './Input.module.scss';

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, type = 'text', onChange }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        className={styles.inputField}
      />
    </div>
  );
};

export default Input;