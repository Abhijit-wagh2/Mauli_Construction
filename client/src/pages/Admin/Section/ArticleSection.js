import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../styles/Homepage.css";
import { AiOutlineReload } from "react-icons/ai";
import AdminMenu from "../../../components/AdminMenu";

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

const ArticleSection = () => {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  // const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(4);
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
      const { data } = await axios.get(`$/api/v1/product/product-list/${page}`);
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
    
    if (page === 7) return;
    loadMore();
  }, [page]);


 
 


  return (

    <>
    <div className="row" id="articles">
    <div className="col-md-12">
    <div className="section-header section-bg" style={{ padding: "50px" }}>
          <h2 style={{ paddingTop: "20px" }}>Articles</h2>
        </div>
          <div className="d-flex flex-wrap justify-content-evenly">
            {products
              ?.filter(p => p.category === '6629e72c2b170502ef1ac965') // Filter products by category
              .map(p => (
                
              <div class="card2 text-dark bg-light mb-3 m-4">
                <div class="card2-header">{p.name}</div>
                <div class="card2-body">
                  <h5 class="card2-title"></h5>
                  <p class="card2-text">{p.description}</p>
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

export default ArticleSection;
