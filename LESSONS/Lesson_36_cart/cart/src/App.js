import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductContainer from './components/ProductContainer';
import Cart from './components/Cart';
function App() {
  return (
    <div>
      <AddProductForm />
      <ProductContainer />
      <Cart />
    </div>
  );
}

export default App;
