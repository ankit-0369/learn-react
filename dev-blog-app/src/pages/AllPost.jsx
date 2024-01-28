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

    return loader ? <div>Loading...</div> : <div>
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        AllPosts.map((post) => (
                            <div className='p-2 w-1/4' key={post.$id}>
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
