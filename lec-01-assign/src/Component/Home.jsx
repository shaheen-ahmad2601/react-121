

import React, {useState,useEffect} from 'react'
import "./Home.css"
var x;
const Home = ()=>{
  
    const [info , setInfo] = useState([])
    const [checkUser, setCheckUser] = useState("");
    const [id1 , setid1] = useState(false)
    const [id2 , setid2] = useState(false)
    const [id3 , setid3] = useState(false)
    const [id4 , setid4] = useState(false)
    const [id5 , setid5] = useState(false)
    const [id6 , setid6] = useState(false)

    const userControl = (e)=>{
      setCheckUser(e);

       if(e.id == 1){
         if(x===e.id){
           setid1(!id1);
           x = "";
           return;
         }
         setid1(!id1)
          x=e.id
       }else if(e.id==2){
         if(x===e.id){
           setid2(!id2)
            x=""
            return;
         }
         setid2(!id2)
         x=e.id
       }else if(e.id==3){
        if(x===e.id){
          setid3(!id3)
           x=""
           return;
        }
        setid3(!id3)
        x=e.id
      }else if(e.id==4){
        if(x===e.id){
          setid4(!id4)
           x=""
           return;
        }
        setid4(!id4)
        x=e.id
      }else if(e.id==5){
        if(x===e.id){
          setid5(!id5)
           x=""
           return;
        }
        setid5(!id5)
        x=e.id
      }else if(e.id==6){
        if(x===e.id){
          setid6(!id6)
           x=""
           return;
        }
        setid6(!id6)
        x=e.id
      }
    }
    // console.log(id1,id2,id3,id4,id5,id6)
     
    useEffect(()=>{
      const getData = async()=>{
        const data = await fetch("http://localhost:8080/userInfo").then((d)=>
        d.json()
        )
      setInfo(data)
      }
      getData();
    }, []);


   
  return (
    <div className='main-div'>
      {info.map((e)=>(
        <div className='usersInfo' onClick={()=> 
          userControl(e)}>
            <div>
              <img  className='image'
              src={e.imgUrl} alt="" />
            </div>
            <div className='users'>
              <h3>{e.name}</h3>
              <h4 style={{color:"grey" , margin:"0px"}}>{e.email}</h4>
               <h3>{`${x===e.id ? e.contactNo : ""}`}</h3> 
            </div>

        </div>
      ))}
      
    </div>
  )
}

export default Home


