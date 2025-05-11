import type { Product } from '../../types/product';
import ProductItem from '../productItem/ProductItem';
import styles from './ProductsList.module.css';

type ProductsListProps = { products: Product[] };

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista produktów</h1>
      <ul className={styles.list}>
        {products.map((product: Product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
