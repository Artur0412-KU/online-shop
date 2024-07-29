import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catalog from './components/MainPage/Catalog/Catalog';
import './index.css';
import SmartphonesPage from './components/Smartphones Page/SmartphonesPage';
import LaptopPage from './components/LaptopPage/LaptopPage';
import ViewedPage from './components/ViewedPage/ViewedPage';
import { BasketPage } from './pages/BasketPage';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';

export const ROOT = '/';
export const BASKET = '/basket';

export const route = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      { path: ROOT, element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/smartphones', element: <SmartphonesPage /> },
      { path: '/laptop', element: <LaptopPage /> },
      { path: '/viewed', element: <ViewedPage /> },
      { path: BASKET, element: <BasketPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
