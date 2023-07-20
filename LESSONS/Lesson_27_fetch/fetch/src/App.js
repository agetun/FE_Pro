import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div>
      <NavMenu />

      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>

    </div>
  );
}

export default App;
