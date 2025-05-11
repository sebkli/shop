import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const NAV_lINKS = [
    { name: 'Home', path: '/' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_lINKS.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
