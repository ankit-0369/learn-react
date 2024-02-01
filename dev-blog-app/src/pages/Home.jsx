import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import AllPost from './AllPost';

function Home() {
    const authStatus = useSelector(state => state.status);
    if (!authStatus) return (
        <div className='w-full py-2'>
            <div className="hero min-h-screen object-cover" style={{ backgroundImage: 'url(../../src/assets/hero.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome Devs !!</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt praesentium doloremque similique natus quo. At nesciunt earum veritatis excepturi enim assumenda debitis a saepe commodi. Eligendi illum doloremque perferendis?
                        </p>
                        <Link
                         to={'/login'}
                         className='btn btn-primary'
                         >
                        Get Started
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )


    return (
        <div className='w-full py-8'>
            <AllPost />
        </div>
    );
}

export default Home;
