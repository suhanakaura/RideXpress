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
  return (
    <div>
      <captainDataContext.Provider value={{captain,setCaptain}}>
        {children}
      </captainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
