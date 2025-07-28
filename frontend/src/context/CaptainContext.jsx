import React, { createContext, useState } from 'react'
export const captainDataContext = createContext()
const CaptainContext = ({children}) => {
    const [captain,setCaptain] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
    const [isLoading,setIsLoading] = useState(false)
  return (
    <div>
      <captainDataContext.Provider value={{captain,setCaptain,isLoading,setIsLoading}}>
        {children}
      </captainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
