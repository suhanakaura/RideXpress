import React,{useContext, useEffect, useState} from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token') 
    const navigate = useNavigate()
    const {user,setUser} = useContext(userDataContext)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        if(!token){
            navigate('/user-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
          headers:{
            authorization : `Bearer ${token}` 
          }
        }).then((res)=>{
          if(res.status===200){
            setUser(res.data.user)
            setIsLoading(false)
          }
        }).catch((err)=>{
          console.log(err)
          localStorage.removeItem('token')
          navigate('/home')
        })

    },[token])
    if(isLoading){
      return (
        <div>Loading...</div>
      )
    }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
