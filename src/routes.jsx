import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';

const router = [
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
];

export default router;