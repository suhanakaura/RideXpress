import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {userDataContext} from "../context/userContext";
const UserSignup = () => {
  // 2 way binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const navigate = useNavigate();
  const { user,setUser } = useContext(userDataContext)
  const submitHandler = async (e) => {
    // prevents the default behaviour - reloading of the form on submitting
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    console.log(response)
    if(response.status === 201){
      console.log("hell")
      const data = response.data
      setUser(data.user) 
      localStorage.setItem('token',data.token);
      navigate('/home')
    }
    setEmail("");
    setPassword("");
    setfirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What's your name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border mb-6 text-lg w-full placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border mb-6 text-lg w-full placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="***"
          />
          <button className="bg-[#111] font-semibold rounded px-4 py-2 mb-3 text-white w-full">
            Sign up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/user-login" className="text-blue-600">
              Login here!
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and
          <span className="underline"> Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
