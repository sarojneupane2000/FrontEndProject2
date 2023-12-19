import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {did}=useParams()
    let [data,setData]=useState([''])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${did}`).then((data)=>(data.json())).then((res)=>setData(res))
    },[])
  return (
    <div className='container py-5'>
      <h2>Details {did}</h2>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Details
