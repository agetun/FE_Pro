import { useState } from 'react';
import './App.css';
import { products } from './data/products_data';
import ProductsContainer from './components/ProductsContainer';

function App() {
  const [prod, setProd] = useState(products)
  const delete_product = (id) => setProd(prod.filter((elem) => elem.id !== id));
  return (
    <div>
       <ProductsContainer />
    </div>
  );
}

export default App;
