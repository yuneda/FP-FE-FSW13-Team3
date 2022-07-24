// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Home from "./components/pages/Home/Home";
import Profile from "./components/pages/Profile/Profile";
import CreateProduct from "./components/pages/CreateProduct/CreateProduct";
import Product from "./components/pages/Product/Product";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import ProductOffer from "./components/pages/ProductOffer/ProductOffer";
import Whislist from "./components/pages/Whislist/Whislist";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Notification from "./components/pages/Notification/Notification";
import EditProduct from "./components/pages/EditProduct/EditProduct";
import Preview from "./components/pages/Preview/Preview";
import NotFoundPage from "./components/pages/Error/404/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/offer/:id" element={<ProductOffer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Whislist />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
