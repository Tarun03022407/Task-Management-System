import React from 'react'

const Users = () => {
    const getData=async()=>{
       let data = await fetch("http://localhost:4400/users").then((res)=>res.json()).then((res)=>console.log(res))

       console.log(data);
    }
    getData()
  return (
    <div>
        {/* {data.map((e)=>{
            return (
                <h1>{e.name}</h1>
            )
        })} */}
        
    </div>
  )
}

export default Users