import React, {useCallback, useEffect, useState} from 'react'
import databaseService from '../../Appwrite/service'
import {Select, Button, RTE} from '../index'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({post}) {

    const {register, handleSubmit, getValues, setValue, watch}= useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || ''
        }
    })

    const userData= useSelector((state) => (state.auth.userData))

    const navigate= useNavigate()

    const submit= async (data) =>{
        if(post){
            const file= data.image[0]?
             databaseService.uploadFile(data.image[0]) : null

             if(file){
                databaseService.deleteFile(post.featuredImage)
             }

             const dbPost= await databaseService.updatePost(
                post.$id, 
                {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                }
             )

             if(dbPost){
                navigate(`/post/${dbPost.$id}`)
             }

        }else{

            const file= await databaseService.uploadFile(data.image[0])
            if(file){
                const fileId= file.$id
                const featuredImage= fileId
                const dbPost= await databaseService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }
    }

    const slugTransform= useCallback((value)=> {
        if(value && typeof(value)==='string')
        return value.trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, '-') 
        .replace(/\s/g, '-')           // Replace non-word, non-digits, space characters with hyphen
        .replace(/[\s]+/g, '-')              // Replace consecutive spaces with a single hyphen
         .replace(/[-]+/g, '-');  

         return ''
    }, [])

    

    useEffect(()=>{

        const subscription= watch((value, {name}) => {
            if(name==='title'){
                setValue('slug', slugTransform(value.title),
                 {shouldValidate: true})

            }
        })
        
        return ()=> subscription.unsubscribe()

    }, [watch, slugTransform, setValue])

  return (

    <div>
      
    </div>
  )
}

export default PostForm
