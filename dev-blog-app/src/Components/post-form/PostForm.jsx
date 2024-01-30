import React, { useCallback, useEffect, useState } from 'react'
import databaseService from '../../Appwrite/service'
import { Select, Button, RTE, Input } from '../index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({ post }) {
    // console.log("Post from postform comp:: ", post);

    const slugTransform = useCallback((value) => {
        if (value && typeof (value) === "string")
            return value.trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
                // .replace(/^[a-zA-Z\d\s]+/g, '-')
                // .replace(/\s/g, '-')           // Replace non-word, non-digits, space characters with hyphen
                // .replace(/[\s]+/g, '-')              // Replace consecutive spaces with a single hyphen
                // .replace(/[-]+/g, '-');

        return "";
    }, [])


    const { register, handleSubmit, getValues, control, setValue, watch } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post? slugTransform(post.title) : '',
            content: post?.content || '',
            status: post?.status || ''
        }
    })

    const userData = useSelector((state) => (state.userData))
    console.log("userData from signup comp ",userData)
    const navigate = useNavigate()

    const submit = async (data) => {
        // console.log("Post from postform comp:: after submit ::  ", post);
        console.log("userData : ", userData);
        if (post) {
            const file = data.image[0] ?
                await databaseService.uploadFile(data.image[0]) : null

            if (file) {
                databaseService.deleteFile(post.featuredImage)
            }

            const dbPost = await databaseService.updatePost(
                post.$id,
                {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                }
            )

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }

        } else {

            const file = await databaseService.uploadFile(data.image[0])
            if (file) {
              
                const fileId = file.$id;
                data.featuredImage = fileId
                const dbPost = await databaseService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if (dbPost) {
                    console.log("dbPost after post formed : ", dbPost)
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }
    }

    


    useEffect(() => {

        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title),
                    { shouldValidate: true })

            }
        })

        return () => subscription.unsubscribe()

    }, [watch, slugTransform, setValue])

    return (

        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Input
                    label="title: "
                    {...register("title", { required: true })}
                    placeholder="title"
                    className="mb-4"
                />

                <Input
                    label="slug"
                    placeholder="slug"
                    className="mb-4"
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })

                    }}
                />
                <RTE
                    label="Content: "
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />

            </div>
            <div className='w-1/3 px-2'>
                <Input
                label= "Featured Image: "
                type= "file"
                className= "mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", {required: !post})}

                />

                {   
                
                    post && (
                       
                        <div className='mb-4 w-full'>
                            <img
                            src={databaseService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className=' rounded-lg'
                            />
                            
                        </div>
                    )
                }

                <Select
                className= "mb-4 text-black"
                options= {["active", "inactive"]}
                label= "Status"
                {...register("status", {required: true})}

                />

                <Button
                type='submit'
                bgColor= {post ? 'bg-green-300' : 'bg-blue-400'}
                className='w-full'
                
                >
                    {post ? "Update" : "Submit"}
                </Button>

            </div>
        </form>
    )
}

export default PostForm
