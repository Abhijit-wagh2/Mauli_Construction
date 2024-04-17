import React from "react";
import AdminMenu from "../../components/AdminMenu";
//import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Home from "../../components/Home";
import Footer from "../../components/Footer";
import NavbarTop from "../../components/NavbarTop";



const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
    
      <NavbarTop/>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdminDashboard;