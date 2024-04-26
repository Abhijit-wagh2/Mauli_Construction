import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect,useState } from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/AdminMenu'
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import NavbarTop from '../../components/NavbarTop';
const { Option } = Select;


function CreateProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");



 // get all cat
  const getAllCategory = async() => {
    try{
      const{data} = await axios.get(`/api/v1/category/get-category`);

      if(data.success){
        setCategories(data.category);
      }
    }catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("photo", photo);
      productData.append("category", category);
  
      const { data } = await axios.post(`/api/v1/product/create-product`, productData);
        
      if (data?.success) {
        toast.success(data?.message);
        
        // Clear form data
        setName("");
        setDescription("");
        setCategory("");
        setPhoto(null); // Assuming photo state is set to null initially
      } else {
        toast("Project Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  




  return (
    <>
    <NavbarTop/>
    
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Create Project</h1>
          <div className="m-1 w-75">
            <Select
              variant = {false}
              placeholder="Select a category"
              size="large"
              showSearch
              className="form-select mb-3"
              onChange={(value) => {
                setCategory(value);
              }}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3">
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="Title"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="Description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* <div className="mb-3">
              <input
                type="text"
                value={price}
                placeholder="Area Range"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div> */}
            {/* <div className="mb-3">
              <input
                type="text"
                value={quantity}
                placeholder="This plan Includes"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div> */}
            {/* <div className="mb-3">
              <Select
                variant={false}
                placeholder="Project is of Interior design?"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setShipping(value);
                }}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
            </div> */}
            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                Create Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateProduct
