import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import databaseService from '../Appwrite/service'
import { Button, Container } from '../Components'
import parse from "html-react-parser";

function Post() {
  const [post, setPost] = useState([])
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()
  const { slug } = useParams()
  const userData = useSelector((state) => state.userData)
  const isAuthor = post && userData ? (post.userId === userData.$id) : (false);
  // console.log(post.featuredImage);

  // console.log("slug is: ", slug);

  useEffect(() => {
    // console.log("slug obtained from url: ", slug)
    if (slug) {
      // console.log("slug found :: ", slug);
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
          // console.log("post found :: ", post)
        } else {
          navigate('/')
        }
      }).finally(setLoader(false))
    } else {
      // console.log("slug not found ********");
      navigate('/')
    }
  }, [slug, navigate])


  const deletePost = () => {
    databaseService.deletePost(post.$id).then((status) => {
      if (status) {
        databaseService.deleteFile(post.featuredImage)
        navigate('/');
      }
    })
  }

  if (loader) return <div
    className=' w-full min-h-screen text-3xl text-center text-red-800 shadow-lime-400
flex justify-center items-center
'>

    <span className="loading loading-infinity w-32"></span>

  </div>
 return post ? (
  <div className='py-8 px-8 bg-gray-900 text-white'>
    <Container>
      <div className='w-full flex justify-center mb-8 relative  rounded-xl overflow-hidden'>
        {post.featuredImage && (
          <img
            src={databaseService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl object-cover w-full h-96 transition-transform
             duration-300 hover:scale-95 border-none
              cursor-pointer  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
             "
          />
        )}
        {isAuthor && (
          <div className='absolute right-6 top-6'>
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor='bg-green-600' className='mr-3'>
                Edit
              </Button>
            </Link>
            <Button bgColor='bg-red-500' onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="w-full mb-6">
        <h1 className="text-3xl font-bold text-center mb-4 capitalize">
          {post.title}
        </h1>
      </div>

      <div className="browser-css text-lg">
        {parse(String(post.content))}
      </div>
    </Container>
  </div>
) : <div className="text-white">Post not found</div>;
}

export default Post
