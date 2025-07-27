import React,{useContext, useEffect} from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token') 
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            navigate('/user-login')
        }

    },[token])
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
