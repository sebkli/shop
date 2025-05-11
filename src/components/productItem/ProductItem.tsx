import { useCart } from '../../context/context';
import type { Product } from '../../types/product';
import Button from '../button/Button';
import styles from './ProductItem.module.css';

type ProductItemProps = { product: Product };

const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };
  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>
        Cena:
        <span>{product.price.main} PLN</span>
      </p>
      <Button
        className=""
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Dodaj do koszyka
      </Button>
    </li>
  );
};

export default ProductItem;
