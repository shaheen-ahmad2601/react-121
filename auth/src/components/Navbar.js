import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import LoginStatus from './LoginStatus';
import Logout from './Logout';

export default function Navbar() {
    const {auth, toggle, token} = useContext(AuthContext);
    

    

  return (
    <nav>
    <div onClick={toggle}>
     {
    
      auth ? <Logout/> : <LoginStatus/>
  
    } 
    </div>
  
    </nav>
  )
}
