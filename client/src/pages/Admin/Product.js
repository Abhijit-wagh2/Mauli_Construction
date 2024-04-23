import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu";
import Layout from "../../components/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product`);
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
    // <Layout>
      <div className="row">
        <div className="col-md-12 ">
        <div className="section-header section-bg" style={{padding:"50px"}}><h2 style={{paddingTop:"20px"}}>Portfolio</h2></div>       
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
             
                <div className="card m-1 " style={{ width: '400px', height: '450px' }} >
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body"> 
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text"><span className="font-weight-bold"> Floor Dimension: </span> {p.description} </p>
                    <p className="card-text"><span className="font-weight-bold"> Area: </span> {p.price} </p>
                    <p className="card-text">This plan package includes: {p.quantity}</p>
                  </div> 
                </div>
              
            ))}
          </div>
        </div>
      </div>
    // </Layout>
  );
};

export default Products;