import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Category() {
    let {cid}=useParams()
    let [data,setData]=useState([''])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=0cbf934b58254b299669f968ce49b989`).then((data)=>(data.json())).then((res)=>setData(res.articles))
    },[])
  return (
    <div className='container py-5'>
      <h2>{cid}</h2>
      <div className="row">
            {data.map((a)=>(
                <div className="col-lg-4 " key={a.id}>
                <div className="border">
                    <img className='w-100' src={a.urlToImage} alt="" />
                    <div className="py-3">
                    <h4>{a.title}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat esse omnis sed sint id pariatur?</p>
                    <Link to={a.url} target='_blank'>Read More</Link>
                    </div>
                </div>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Category
