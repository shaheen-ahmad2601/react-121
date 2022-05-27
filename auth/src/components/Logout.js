import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext'


export default function Logout() {
    const {auth,setAuth, toggle, value ,setValue ,token} = useContext(AuthContext);
    console.log(value)
    console.log(auth)
  return (
    <div>
      <button onClick={()=>{
toggleAuth()
setValue(null)

      }}>Logout</button>
      
        <h1>Email of user is : {value.email}</h1>
        <h1>token : {token}</h1>

    </div>
  )
}
