import Button from '../button/Button';
import styles from './QuantityControls.module.css';

type QuantityControlsProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityControls = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlsProps) => {
  return (
    <div className={styles.quantityControls}>
      <Button disabled={quantity <= 1} onClick={onDecrease}>
        -
      </Button>
      <span className={styles.quantity}>{quantity}</span>
      <Button onClick={onIncrease}>+</Button>
    </div>
  );
};

export default QuantityControls;
