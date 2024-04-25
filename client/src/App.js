import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import About from './components/About.js';
import Policy from './pages/Policy.js';
import Pagenotfound from './pages/Pagenotfound.js';
import Contact from './pages/Contact.js';
import Login from "./pages/Auth/Login.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";

import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import DummyProduct from "./pages/Admin/Section/BlogView.js";
import './App.css';
import Products from "./pages/Admin/Product.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import ProductDetails from "./pages/Admin/ProductDetails.js";
import CreateBlog from "./pages/Admin/CreateBlog.js";
import ProjectPage from "./pages/ProjectPage.js";
import BlogView from "./pages/Admin/Section/BlogView.js";
import ProjectView from "./pages/Admin/Section/ProjectView.js";
import ArticleView from "./pages/Admin/Section/ArticleView.js";

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

        <Route path="/dashboard/admin/product_dummy" element={<ProjectPage/>} />
        <Route path="/dashboard/admin/blog" element={<BlogView/>} />
        <Route path="/dashboard/admin/project" element={<ProjectView/>} />
        <Route path="/dashboard/admin/articles" element={<ArticleView/>} />

        
        <Route path="/dashboard/admin/product/:slug" element={<UpdateProduct/>} />


        <Route path="/dashboard/admin/create-category" element={<CreateCategory/>} />
      
        <Route path="/product/:slug" element={<ProductDetails />} />

        <Route path="/dashboard/admin/create-blog" element={<CreateBlog/>} />
      
        <Route path="admin/product/:slug" element={<UpdateProduct/>} />
        

       </Routes>

       
       
    </>
  );
}

export default App;
