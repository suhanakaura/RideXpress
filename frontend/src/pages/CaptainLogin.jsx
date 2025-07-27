import React, { useState,useContext } from "react";
import {Link,useNavigate} from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainLogin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {captain,setCaptain} = useContext(captainDataContext);
  const navigate = useNavigate()

  const submitHandler = async(e) =>{
    // prevents the default behaviour - reloading of the form on submitting
    e.preventDefault();
    const captainData = {
      email:email,
      password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);
    if(response.status===201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border mb-7 text-lg w-full placeholder:text-base"
            required
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border mb-7 text-lg w-full placeholder:text-base"
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="***"
          />
          <button className="bg-[#111] font-semibold rounded px-4 py-2 mb-3 text-white w-full">
            login
          </button>
          <p className="text-center">Join a fleet? <Link to ="/captain-signup" className="text-blue-600">Register as a Captain!</Link></p>
        </form>
      </div>
      <div>
        <Link to="/user-login" className="flex items-center justify-center bg-[#d5622d] font-semibold rounded px-4 py-2 mb-7 text-white w-full">
          Sign in as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
