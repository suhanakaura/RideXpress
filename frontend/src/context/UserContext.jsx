import React, { createContext, useState } from 'react'
export const userDataContext = createContext()
const UserContext = ({children}) => {
  const [user,setUser] = useState({
    email:'',
    fullName:{
      firstName:'',
      lastName:''
    }
  })
  const [isLoading,setIsLoading] = useState(false)
  return (
    <div>
      <userDataContext.Provider value={{user,setUser,isLoading,setIsLoading}}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
