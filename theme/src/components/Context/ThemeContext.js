import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [mode, setMode] = useState({
        color : "black",
        backgroundColor : "white"
    })

    const [btntext, setbtntext] = useState("Enable dark Mode")
    const toggleStyle=()=>{
              if(mode.color==="white"){
                  setMode({
                      color:"black",
          backgroundColor:"white",
  
                  })
                  setbtntext("Enable dark Mode")
              }
              else{
                  setMode({
                      color:"white",
          backgroundColor:"black"
                  })
                  setbtntext("Enable Light Mode")
              }
          }

    return(
        <ThemeContext.Provider value={{mode, btntext, toggleStyle }}>{children}</ThemeContext.Provider>
    )
}
