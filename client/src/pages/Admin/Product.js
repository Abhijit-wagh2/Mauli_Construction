import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
import "../../styles/Homepage.css";
import AdminMenu from "../../components/AdminMenu";
import Layout from "../../components/Layout";
import { AiOutlineReload } from "react-icons/ai";


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
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  // const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


  const getTotal = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    if (page === 2) return;
    loadMore();
  }, [page]);
 


  return (
    // <Layout>
    <>
    {/* <div className="row">
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
    </div> */}
    <div className="row">
    <div className="col-md-12">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-1 mx-auto" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                   style={{ width: '500px', height: '300px' }}
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    {/* <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
    

    </>
  );
};

export default Products;
