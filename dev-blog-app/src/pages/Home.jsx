import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../Components'
import databaseService from '../Appwrite/service'


function Home() {

    const [AllPost, setAllPost] = useState([])
    useEffect(() => {
        databaseService.getPosts().then((post) => {
            if (post) {
                setAllPost(post.documents)
            }
        })
    }, [])


    if (AllPost.length === 0) {
        return (
            //loader Component
            <div
                className=' w-full min-h-screen text-3xl text-center text-green-500 shadow-lime-400
        flex justify-center items-center
        '>

                <span className="loading loading-infinity w-32"></span>

            </div>
        )
    }

    return (

        <div className='w-full py-8'>
           <Container>
                <div className='flex flex-wrap'>
                    {
                        AllPost.map((post) => (
                            <div className=' mx-auto py-3 flex flex-wrap' key={post.$id}>
                                <PostCard
                                    {...post}
                                />
                            </div>
                        ))
                    }

                    


                </div>
            </Container>

            
        </div>
    )

}

export default Home
