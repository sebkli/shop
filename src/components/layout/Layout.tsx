import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';
import styles from './Layout.module.css';
const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
