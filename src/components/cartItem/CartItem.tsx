import { useCart } from '../../context/context';
import type { CartItem as CartItemType } from '../../types/cartItem';
import Button from '../button/Button';
import QuantityControls from '../quantityControls/QuantityControls';
import styles from './CartItem.module.css';

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();
  const handleIncrease = () => updateQuantity(item.id, item.quantity + 1);
  const handleDecrease = () => updateQuantity(item.id, item.quantity - 1);
  const handleRemove = () => {
    if (window.confirm('Czy na pewno chcesz usunąć ten produkt?')) {
      removeFromCart(item.id);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.info}>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.price}>Cena : {item.price.main} PLN</p>
        <p className={styles.price}>
          Suma częściowa: {(item.price.fractional * item.quantity).toFixed(2)}
          PLN
        </p>
      </div>
      <div className={styles.controls}>
        <QuantityControls
          quantity={item.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <Button onClick={handleRemove}>Usuń</Button>
      </div>
    </div>
  );
};

export default CartItem;
