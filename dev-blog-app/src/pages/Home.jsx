import React, {useState, useEffect} from 'react'
import {Container, PostCard} from '../Components'
import databaseService from '../Appwrite/service'


function Home() {
    const [AllPost, setAllPost]= useState([])
    useEffect(()=> {
        databaseService.getPosts().then((post) => {
                if(post){
                    setAllPost(post.documents)
                }
        } )
    }, [])

 
    if(AllPost.length()===0){
        return (
            <div className='text-center w-full py-8 mt-4'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-green-500'>
                                LogIn to Read all Posts</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        AllPost.map((post) => {
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )

}

export default Home
