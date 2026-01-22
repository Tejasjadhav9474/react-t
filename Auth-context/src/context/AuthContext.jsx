

import React, { Children, useEffect, useState } from 'react'
import {createContext} from "react";


  export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

        const [user, setUser] =useState(null);

        useEffect(() => {
          const savedUser = localStorage.getItem("authUser");

          if(savedUser){
            setUser(JSON.parse(savedUser))
          }
        },[]);

        const login =(username)=> {
          const userData = {name:username};
          setUser(userData);
           localStorage.setItem("authUser", JSON.stringify(userData));
          
        }

        const logout = () => {
          setUser(null);
          localStorage.removeItem("authUser");
        }

  return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider