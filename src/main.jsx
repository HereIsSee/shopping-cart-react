import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import './styles.css';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
