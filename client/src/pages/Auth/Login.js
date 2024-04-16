import React, { useState } from "react";
import Layout from '../../components/Layout'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth , setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("/api/v1/auth/login", {
          email,
          password,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
            token : res.data.token,
          })
          localStorage.setItem("auth",JSON.stringify(res.data));
          navigate(location.state || "/admin");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    return(
        <div className="bg-image">
        <div className="credentials">
        <form onSubmit={handleSubmit} name="login-form">
                <h2>ADMIN</h2>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value )}className="input-box" type="email" name="email" id="email" required placeholder="Enter email id"/>
                </div>
                <div>
                    <input value={password}
                    onChange={(e) => setPassword(e.target.value)}className="input-box" type="password" name="password" id="password" required placeholder="Enter password" /> 
                </div>
                
                <div><button type="submit" className="but">LOG IN</button></div>
                
            </form>
        </div>
            
        </div>
    );
 }
 export default Login;