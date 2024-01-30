import React from 'react'
import databaseService from '../Appwrite/service'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
     
 <div className='card w-72 glass transition-transform hover:border-sky-900 border-2 
  border-solid duration-300 
   justify-center items-center text-sky-200 hover:scale-105
   rounded-lg border-sky-200 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
   '>

 <figure><img
    className=' min-h-52'
  src={databaseService.getFilePreview(featuredImage)} alt={title}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Read Article!</button>
    </div>
  </div>

 </div>




    </Link>
  )
}

export default PostCard
