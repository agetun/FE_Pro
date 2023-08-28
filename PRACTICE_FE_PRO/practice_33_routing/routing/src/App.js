import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Products from './pages/Products';
import ProductDescription from './pages/ProductDescription';
import NotFound from './pages/NotFound';
import Test from './components/Test';



function App() {
  return (    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product_description' element={<ProductDescription />} />
        <Route path='*' element={<NotFound />} />

                
      </Routes>
      
      
    
  );
}

export default App;
