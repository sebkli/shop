import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Button from '../../components/button/Button';
import ProductsList from '../../components/productsList/ProductsList';
import type { Product } from '../../types/product';
import styles from './HomePage.module.css';
const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('Wystąpił błąd. Spróbuj ponownie później.')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1 className={styles.loading}>Ładowanie...</h1>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h1>Błąd: {error.message}</h1>
        <Button onClick={() => window.location.reload()}>Odśwież</Button>
      </div>
    );
  }

  return (
    <>
      <ProductsList products={products} />
      <Link to="/cart">
        <Button aria-label="Go to shopping cart">Przejdź do koszyka</Button>
      </Link>
    </>
  );
};

export default HomePage;
