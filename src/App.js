// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Home from "./components/pages/Home/Home";
import Profile from "./components/pages/Profile/Profile";
import CreateProduct from "./components/pages/CreateProduct/CreateProduct";
import ProductOffer from "./components/pages/ProductOffer/ProductOffer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/offer" element={<ProductOffer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
