import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Main from './components/pages/Main';
import SmartphonesPage from './components/pages/SmartphonesPage';
import LaptopPage from './components/pages/LaptopPage';
import ViewedPage from './components/pages/ViewedPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/smartphones" element={<SmartphonesPage />} />
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/viewed" element={<ViewedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
