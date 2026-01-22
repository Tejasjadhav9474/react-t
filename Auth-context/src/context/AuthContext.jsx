

import React, { Children, useEffect, useState } from 'react'
import {createContext} from "react";


  export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

        const [user, setUser] =useState(null);

        const [loading, setLoading] = useState(true)

        useEffect(() => {
          const savedUser = localStorage.getItem("authUser");

          if(savedUser){
            setUser(JSON.parse(savedUser))
          }

          setLoading(false);
        },[]);

        const login =(username, role = "user") => {
          const userData = {name:username, role};
          setUser(userData);
           localStorage.setItem("authUser", JSON.stringify(userData));
          
        }

        const logout = () => {
          setUser(null);
          localStorage.removeItem("authUser");
        }

  return (
        <AuthContext.Provider value={{ user, login, logout,loading }}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider