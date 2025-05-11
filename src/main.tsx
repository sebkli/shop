import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import { CartProvider } from './context/context';
import './index.css';
import CartPage from './pages/cartPage/CartPage';
import HomePage from './pages/homePage/HomePage';
import SummaryPage from './pages/summaryPage/SummaryPage';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/summary', element: <SummaryPage /> },
      ],
    },
  ],
  { basename: '/' }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
