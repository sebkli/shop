import styles from './Button.module.css';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
