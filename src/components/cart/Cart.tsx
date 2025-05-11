import { Link } from 'react-router';
import { useCart } from '../../context/context';
import Button from '../button/Button';
import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Twój koszyk jest pusty.</h1>
        <Link to="/">
          <Button>Lista produktów</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.cart}>
      <div className={styles.items}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.summary}>
        <p className={styles.total}>Suma: {totalPrice.toFixed(2)} PLN</p>
      </div>
      <div className={styles.actions}>
        <Button onClick={clearCart}>Wyczyść koszyk</Button>
        <div className={styles.navigation}>
          <Link to="/">
            <Button>Wróć</Button>
          </Link>
          <Link to="/summary">
            <Button>Dalej</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
