import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {

        fetch('https://api.github.com/users/ankit-0369')
            .then(response => response.json()).
            then((data) => {
                console.log(data);
                setData(data);
            })

    }, [])

    return (
        <div>
            <div className='bg-gray-700 text-purple-100 py-6 text-center w-full
       px-2 text-3xl '>GitHub Data

                <div className=" my-16 flex flex-row justify-evenly align-baseline flex-wrap gap-3">
                    <div className=' rounded-2xl overflow-hidden
                      w-60 border-green-300 border-4 border-solid bg-orange-800 shadow-red-400 text-xl'>
                        <div className="py-2">
                            {data.name}
                        </div>
                        <img src={data.avatar_url} alt="Git Image" width={300} />
                    </div>

                    <div className='border-orange-300 rounded-md border-solid border-4 flex flex-col sm:flex-row   '>
                        <div className="text-purple-300 text-xl flex flex-col justify-center px-2 py-2 bg-green-700 border-r-2 border-r-green-600 shadow-green-600 
                            sm:w-1/3 w-full
                        ">
                            <div className='text-purple-300 underline text-2xl'>Bio</div>
                            <div className=" text-lg text-center text-white ml-2 max-w-sm "> {data.bio}</div>
                        </div>

                        <div className='w-full sm:w-2/3  py-2 px-4 flex flex-col
                        justify-center align-baseline gap-2
                        '>

                            <div className="text-purple-300 text-xl flex">
                                UserName :  <div className="text-white ml-2">  {data.login}</div>
                            </div>


                            <div className="text-purple-300 text-xl flex">
                                Followers : <div className="text-white ml-2"> {data.followers}</div>
                            </div>
                            <div className="text-purple-300 text-xl flex">
                                Following : <div className="text-white ml-2"> {data.following}</div>
                            </div>

                            <div className="text-purple-300 text-xl flex">
                                Tweets@ : <div className="text-white ml-2"> <a href={'https://twitter.com/'}>{data.twitter_username}</a></div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github
