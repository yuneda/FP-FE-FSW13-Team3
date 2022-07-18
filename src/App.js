// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';
import CreateProduct from './components/pages/CreateProduct/CreateProduct';
import Product from './components/pages/Product/Product';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import ProductOffer from './components/pages/ProductOffer/ProductOffer';
import BuyerProduct from './components/pages/BuyerProduct/BuyerProduct';
import Logout from './components/pages/Logout/Logout';
import MyResponsive from './components/pages/Responsive/MyResp';
import Whislist from './components/pages/Whislist/Whislist';
import MyAccount from './components/pages/MyAccount/MyAccount';
import Notification from './components/pages/Notification/Notification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/offer/:id" element={<ProductOffer />} />
        <Route path="/resp" element={<MyResponsive />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/buyer" element={<BuyerProduct />} />
        <Route path="/wishlist" element={<Whislist />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
