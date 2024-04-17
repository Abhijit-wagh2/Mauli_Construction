import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Policy from './pages/Policy.js';
import Pagenotfound from './pages/Pagenotfound.js';
import Contact from './pages/Contact.js';
import Login from "./pages/Auth/Login.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";

import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import DummyProduct from "./pages/Admin/DummyProduct.js";
import './App.css';
import Products from "./pages/Admin/Product.js";

function App() {
  return (
    <>
       <Routes>
       <Route path="/" element={<HomePage />} />

       <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/policy" element={<Policy />} />

        <Route path="*" element={<Pagenotfound />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/dashboard/admin/create-product" element={<CreateProduct />} />

        <Route path="/dashboard/admin/product_dummy" element={<Products/>} />
        <Route path="/dashboard/admin/product" element={<DummyProduct/>} />
        

        <Route path="/dashboard/admin/product/:slug" element={<UpdateProduct/>} />


       </Routes>

       
       
    </>
  );
}

export default App;
