import React, { useState } from 'react'
import { PostCard, Container } from '../Components'
import databaseService from '../Appwrite/service'

const [AllPosts, setAllPost] = useState([])

databaseService.getPosts([])
    .then((posts) => {
        if (posts) {
            setAllPost(posts.documents);
        } else {
            console.log("Error:: pages/allpost");
        }

    })


function AllPost() {
    return (
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
    )
}

export default AllPost
