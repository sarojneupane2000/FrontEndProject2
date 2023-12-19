
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Blogs() {
    let [data,setData]=useState([''])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((data)=>(data.json())).then((res)=>setData(res))
    },[])
  return (
   
    <div className='container py-5'>
      <ul>
        {data.map((a)=>(
            <li><Link to={`/details/${a.id}`}>{a.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
