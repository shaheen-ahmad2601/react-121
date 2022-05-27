import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext'

export default function LoginStatus() {
    const {auth,setAuth, toggle, setValue ,token} = useContext(AuthContext);
    const [ email, setEmail] = useState(null)
    const [ password, setPassword] = useState(null)
    


  return (
   <>
   <input type="email" placeholder="Enter Email" onChange={(e) =>{
    setEmail(e.target.value)
   }}/>
   <input type="password" placeholder="Enter Password" onChange={(e) =>{
    setPassword(e.target.value)
   }} />
   <button onClick={()=>{
    setValue({
      "email":email,
      "password" : password,
    })
   
   }}>Login</button>
   
   
   </>
  )
}
