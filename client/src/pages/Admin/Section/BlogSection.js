import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../styles/Homepage.css";
import Swiper from 'swiper'
import { AiOutlineReload } from "react-icons/ai";
import ReviewCard from '../../../components/BlogCard';


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

const BlogSection = () => {
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
  
    <div className="row">
    <div className="col-md-12">
      
    <div className="section-header section-bg" style={{ padding: "50px" }}>
          <h2 style={{ paddingTop: "20px" }}>Blogs</h2>
        </div>


          <div className="d-flex flex-wrap" >
            {products
              ?.filter(p => p.category === '6629274580fc06b8bac76f3b') // Filter products by category
              .map(p => (
                <div className="card m-3 mx-auto" key={p._id} >
              
                <section id="testimonials" className="testimonials section-bg">
                            
                            <div className="slides-2 swiper">
                              <div className="swiper-wrapper">
                                
                              <ReviewCard image={`${p._id}`} name={p.name} identity={p.name} review={p.description}/>
                            </div>
                          <div className="swiper-pagination"></div>
                      </div>
                    
                </section>

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

export default BlogSection;
