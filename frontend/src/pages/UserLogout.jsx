import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
      headers:{
          authorization: `Bearer ${token}`
        },
        withCredentials:true
    }).then((response)=>{
        if(response.status === 200){
        localStorage.removeItem('token')
        console.log("hello")
        navigate('/user-login')
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default UserLogout
