import { Link } from "react-router-dom"

const Navbar = () => {
    const nav = [
        {title:"Home", to:"/"},
        {title:"About", to:"/about"},
        {title:"Courses", to:"/course"},
        {title:"UserList", to:"/users"},
        {title:"Products", to: "/products"}
    ]
  return (
    <div style={{
        backgroundColor:"black",
        height:"30px",
        borderRadius:"30px",
        padding:"10px"
        
    }}>
     {nav.map(el => <Link style={{
         margin:"20px",
         color:"white",
         fontFamily:"verdana",
      
         
     }} to={el.to}>{el.title}</Link>)}
    </div>
  )
}

export default Navbar
