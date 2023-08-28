import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import NavMenu from './NavMenu';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
 

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsByCategoryPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
