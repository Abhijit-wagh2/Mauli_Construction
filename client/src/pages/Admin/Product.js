import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu";
import Layout from "../../components/Layout";

const MyComponent = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        className="card-img-top"
        alt=""
        style={{ width: '100%', height: "280px" }}
      />
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
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
        <div className="section-header section-bg" style={{ padding: "50px" }}>
          <h2 style={{ paddingTop: "20px" }}>Portfolio</h2>
        </div>
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div
              key={p._id}
              className="card m-1 mx-auto"
              style={{
                width: '400px',
                height: 'mh-100',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <MyComponent
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} 
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  <span className="font-weight-bold"> </span> {p.description}{" "}
                </p>
                <p className="card-text">
                  <span className="font-weight-bold"> </span> {p.price}{" "}
                </p>
                <p className="card-text">{p.quantity}</p>
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
