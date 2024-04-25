import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from "../../../components/AdminMenu";
import Layout from "../../../components/Layout";
import NavbarTop from "../../../components/NavbarTop";


function ArticleView() {
    const [products, setProducts] = useState([]);
    //getall products
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`/api/v1/product/product-articles`);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        toast.error("Someething Went Wrong");
      }
    };
  
    //lifecycle method
    useEffect(() => {
      getAllProducts();
    }, []);
    return (
      <>
      <NavbarTop/>

        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
     <h1 className="text-center">All Projects</h1>       
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                   
                    
                    <div className="card-body">
                      <h5 className="card-title_">{p.name}</h5>
                      <p className="card-text_">{p.description.substring(0, 90)}</p>

                      <p className="card-text_">{p.price}</p>
                      <p className="card-text_">{p.quantity}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default ArticleView
