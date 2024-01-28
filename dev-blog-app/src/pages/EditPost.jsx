import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import databaseService from '../Appwrite/service'
import {Container,PostForm } from '../Components/index'


function EditPost() {
    const [post, setPost]= useState(null)
    const navigate= useNavigate()
    const {slug} = useParams()
    
    useEffect(()=>{

        if(slug){
            databaseService.getPost(slug).then((post) => {
                if(post){
                    setPost(post)

                }else{
                    navigate('/')
                }
            })
        }

    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post= {post}/>
        </Container>
    </div>
  ) : (null)
}


export default EditPost
