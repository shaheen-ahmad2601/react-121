import { createContext, useState } from "react";

 export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [value, setValue] = useState(null);


  
    const toggleAuth = () => {
        setAuth(false);
        setToken(null);
       
     
 
    }

  
  
    if( value != null){
        fetch("https://reqres.in/api/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(value),
        }).then((res) => res.json()).then(value => {
            setAuth(true)
            setToken(value.token)
           
        })
    }
    return(
        <AuthContext.Provider value={{auth,setAuth,setValue,value, toggleAuth, token}}>{children}</AuthContext.Provider>
    )


}