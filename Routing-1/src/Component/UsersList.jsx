import { useEffect, useState } from "react";

import "./UsersList.css"

const UsersList = () => {
  const [users, setUsers] = useState([]);
 
   const getData = async()=>{
      try {
        const res=await fetch("https://reqres.in/api/users")
        const data = await res.json()
        console.log("data" , data)
        setUsers(data.data)
      } catch (error) {
          console.log(error)
      }
   }

   useEffect(()=>{
       getData()
   },[])
  return (
    <div className="api-data">
     {users.map((el)=>(
         <div key={el.id} className="user-data">
             <img src={el.avatar} alt="" /> <p>{el.id}</p> <p>{el.first_name}</p>
             </div>
     ))}
    </div>
  );
};

export { UsersList };
