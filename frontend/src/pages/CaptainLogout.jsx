import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status===201){
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
