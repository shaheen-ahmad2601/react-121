import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function RecreatedGithub() {
    const [file, setFile] = useState([]);
    const [elem, setElem] = useState()
    const [pagi, setPagi] = useState(1);
    const [value, setValue] = useState();
const [sortValue, setSortValue] = useState()
const sortOptions = ["id", "repoName", "marksObtain"];
useEffect(() =>{
    getData();
},[])
    async function getData() {
        return await axios.get(`http://localhost:8080/GithubRepo?_page=${pagi}&_limit=12`)
        .then((response) => setFile(response.data))
        .catch((err) =>  console.log(err))     
    }

   
    const searchHandle = async() => {
        console.log(elem)
        return await axios.get(`http://localhost:8080/GithubRepo?q=${value}`)
        .then((response) => {setFile(response.data)
            console.log("filtered iTem", file)    
        })
        .catch((err) =>  console.log(err)) 
      
    }


    console.log(file)
    const handleSort = async(e) =>{
        let value = e.target.value;
        setSortValue(value)
        return await axios.get(`http://localhost:8080/GithubRepo?_sort=${value}&_order=asc`)
          .then((response) => {
            setFile(response.data)
    
          })
          .catch((error) => console.log(error))
    }

    return (
        <div>
            <input type="text" placeholder='Search Your file Here...' onChange={(e) => {
                setValue(e.target.value)
                console.log(value)
            }} />
            <button onClick={searchHandle}>Search</button>


            {/* //sorting of elememnts */}
            <select style={{ width: "70%", borderRadius: "4px", height: "55px" }} name="" id="" onChange={handleSort}
            value={sortValue}>
            <option value="">Please Select Value</option>
            {
              sortOptions.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }

          </select>



            {
                file.map(e => (
                    <div style={{margin:"auto", alignItems:"center",paddingLeft:"5%", width:"50%"}} >

                      <h4>{e.id} - {e.repoName}  ---> Marks Obtained: {e.marksObtain}</h4>
                    </div>
                ))
            }

            <button onClick={() => {
                setPagi(pagi - 1)
            }}>Prev</button>
            <button onClick={() => {
                setPagi(pagi + 1)
            }}>Next</button>
        </div>
    )
}
