import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../../styles/Homepage.css";
import "../styles/Homepage.css";
import Swiper from 'swiper'
import { AiOutlineReload } from "react-icons/ai";
import Footer from "../components/Footer";
import ClientNavbar from "../components/Nav/ClientNavbar";



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

const ProjectPage = () => {
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
    if (page === 5) return;
    loadMore();
  }, [page]);


  useEffect(() => {
    new Swiper('.slides-2', {
      // Configure swiper options here
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);
 

  return (
    <>
    <ClientNavbar/>
    {/* Project Component */}
    <div className="row">
        <div className="col-md-12">
        <div className="section-header section-bg" style={{ padding: "50px" }}>
          <h2 style={{ paddingTop: "20px" }}>Portfolio</h2>
        </div>
          <div className="d-flex flex-wrap">
            {products
              ?.filter(p => p.category === '662928eb5a02dfe6604fceb5') // Filter products by category
              .map(p => (
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
                      <p className="card-text">
                        <pre>{p.description.substring(0, 60)}</pre>...
                      </p>
                      <p className="card-title card-price">
                        {p.price}
                      </p>
                    </div>
                    

                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
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
        <Footer/>
    </>
  );
};

export default ProjectPage
