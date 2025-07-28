import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { captainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(captainDataContext);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    if(!token){
        navigate('/captain-login')
    }
     axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers:{
      authorization: `Bearer ${token}`
    }
  }).then((res)=>{
    if(res.status===201){
      console.log("hello")
      setCaptain(res.data.captain)
      setIsLoading(false)
    }
  }).catch((err)=>{
    console.log(err)
    localStorage.removeItem('token')
    navigate('/captain-login')
  })
  },[token])
 
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper
