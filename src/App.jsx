import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartItems from './pages/CartItems';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/cart-items' element={<CartItems />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
