import React, { useEffect, useState } from 'react'

var originalArr = [];
export default function GithubRepo() {
    const [file, setFile] = useState(originalArr);
    const [elem, setElem] = useState("")
    const [pagi, setPagi] = useState(1);


    useEffect(() => {
        async function getData() {
            let data = await fetch(`http://localhost:3000/GithubRepo?_page=${pagi}&_limit=setPagi`).then((d) => d.json());
        
            setFile(data);
        }
        getData();
    }, [])


    if (!originalArr.length) {
        originalArr = [...file];
    }
    const filterItem = (searchElem) => {
        const updatedItems = originalArr.filter((e) => {
            return e.repoName.toLowerCase().includes(elem)
        })
        setFile(updatedItems)
    }


    console.log(file)

    const sortingHandle = (selectedValue) =>{
        if(selectedValue =="asc"){
            console.log("is clicked asc")
            const updatedItems = originalArr.sort(function(a,b) {return a.marksObtain - b.marksObtain})
            console.log("sortingHandle",selectedValue)
            setFile(updatedItems);


        console.log(updatedItems)
      

        }else if(selectedValue =="dsc"){
            console.log("is clicked desc")
            const updatedItems = originalArr.sort(function(a,b) {return b.marksObtain - a.marksObtain})
            console.log(updatedItems)
            setFile(updatedItems);
           
        }


    }

    return (
        <div>
            <input type="text" placeholder='Search Your file Here...' onChange={(e) => {
                setSearchElem(e.target.value)
            }} />
            <button onClick={(e) => {
                // console.log(e)
                filterItem(searchElem)
            }}>Search</button>


         


            <select style={{ width: "100px", margin: "auto" }} className="form-select" onChange={(e) => {
                sortingHandle(e.target.value)
                if (e.target.value == "asc") {
                    let highsort = file;
                    highsort = highsort.sort(function (a, b) { return a.marksObtain - b.marksObtain })
                    console.log(e.target.value)
                    console.log(highsort)
                    highsort.map(e => (
                        <div >

                            <h5>{e.id} - {e.repoName} : {e.marksObtain}</h5>
                        </div>
                    ))
                }
                 else {
                    let lowsort = file;
                    lowsort = lowsort.sort(function (a, b) { return b.marksObtain - a.marksObtain })
                    console.log(lowsort)
                    lowsort.map(e => (
                        <div >

                            <h5>{e.id} - {e.repoName} : {e.marksObtain}</h5>
                        </div>
                    ))
                }
            }} aria-label="Default select example">
                <option selected>Sort By</option>
                <option value="asc">Asc</option>
                <option value="dsc">Desc</option>

            </select>
            {
                file.map(e => (
                    <div >

                        <h5>{e.id} - {e.repoName} : Marks obtain - {e.marksObtain}</h5>
                        {/* console.log(e.name) */}
                    </div>
                ))
            }
{console.log("MApped")}
            <button onClick={() => {
                setPagi(pagi - 1)
   setPagi         }}>Prev</button>
            <button onClick={() => {
                setPagi(pagi + 1)
   setPagi         }}>Next</button>
        </div>
    )
}
