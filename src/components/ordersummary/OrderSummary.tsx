import { Link } from 'react-router';
import { useCart } from '../../context/context';
import Button from '../button/Button';
import styles from './OrderSummary.module.css';

const OrderSummary = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const confirmOrder = () => {
    localStorage.setItem('lastOrder', JSON.stringify(cartItems));
    clearCart();
    window.location.href = '/shop/confirmation.html';
    localStorage.removeItem('cart');
  };

  return (
    <div className={styles.container}>
      <h2>Podsumowanie zamówienia</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Suma częściowa</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{(item.price.fractional * item.quantity).toFixed(2)} PLN</td>
              <td>{item.quantity}</td>
              <td>{item.price.main.toFixed(2)} PLN</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Suma całkowita:</td>
            <td>{totalPrice.toFixed(2)} PLN</td>
          </tr>
        </tfoot>
      </table>
      <div className={styles.controls}>
        <Link to="/cart">
          <Button>Wroć</Button>
        </Link>
        <Button onClick={confirmOrder}>Potwierdź zamówienie</Button>
      </div>
    </div>
  );
};

export default OrderSummary;
