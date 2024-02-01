import React, { useState, useEffect } from 'react'
import { PostCard, Container } from '../Components'
import databaseService from '../Appwrite/service'



function AllPost() {

    const [AllPosts, setAllPost] = useState([])
    const [loader, setLoader]= useState(true)
    
    useEffect(() => {

        databaseService.getPosts([])
        .then((posts) => {
            if (posts) {
                setAllPost(posts.documents);
                setLoader(false)
            }

        })
        return
     }, [])

    return loader ? <div
    className=' w-full min-h-screen text-3xl text-center text-red-800 shadow-lime-400
flex justify-center items-center
'> 

<span className="loading loading-infinity w-32"></span>

</div> : <div>
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        AllPosts.map((post) => (
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
    </div>
}

export default AllPost
