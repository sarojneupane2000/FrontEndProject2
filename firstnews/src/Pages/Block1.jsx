import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Block1(props) {
    let [data,setData]=useState([''])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?category=${props.yy}&apiKey=0cbf934b58254b299669f968ce49b989`).then((data)=>(data.json())).then((res)=>setData(res.articles))
    },[])
  return (
    <>
      <div className="container py-5">
        <h1>{props.yy}</h1>
        <div className="row">
            {data.slice(0,3).map((a)=>(
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
      
    </>
  )
}

export default Block1
