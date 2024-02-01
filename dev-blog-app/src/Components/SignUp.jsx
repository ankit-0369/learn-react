import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Input, Logo } from './index'
import Button from './Button'
import authService from '../Appwrite/auth'
import { login } from '../Store/AuthSlice'

function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState()
    const {
        register,
        handleSubmit
    } = useForm()

    const signup = async (data) => {
        setError("")
        try {

            const session = await authService.createAccount(data);
            if (session) {
                console.log("session created at signup", session);
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                console.log("userData  ", userData);
                navigate("/")
            }
        } catch (error) {
            setError(error);
            // console.log("error when signup click: ", error);
            // console.log("data coming from react hook form when signedup : ",data);
        }
    }

        

    return (
        <div className='flex items-center w-full justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign Up Now and explore the world of Blogs</h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Already have account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login Now
                    </Link>
                </p>
                {error && <p className='text-red-800 mt-8 text-center'> {error} </p>}

                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5'>
                        <Input
                            tpye='text'
                            label='fullName'
                            placeholder='Enter the Full Name'
                            {...register("name", {
                                required: true

                            })}
                        />
                        {/* {error.fullName?.type === 'required' &&
                            <p className='text-red-600 text-center mt-8'>Full Name Required</p>
                        } */}

                        <Input
                            tpye='email'
                            label='email'
                            placeholder='Enter the Email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />

                        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
                        <Input
                            type='password'
                            label='password'
                            placeholder='Enter the Passoword'
                            {...register("password", {
                                required: true,
                                // validate: {
                                //     checkLength: (value) => value.length >= 6,
                                //     matchPattern: (value) =>
                                //         /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                //             value
                                //         )
                                // }
                            })}
                        />

                        {/* {
                            errors.password?.type === 'required' &&
                            <p className='text-red-600 mt-8 text-center'> Password required</p>
                        }

                        {
                            errors.password?.type === 'checkLength' &&
                            <p className='text-red-600 mt-8 text-center'> Minimum Length should be of 8 digits</p>
                        }

                        {
                            errors.password?.type === 'matchPattern' &&
                            <p className='text-red-600 mt-8 text-center'> Password should contain atleast one Uppercase,
                                lowercase, digit and special symbol </p>
                        } */}

                        <Button className='w-full' type='submit'>
                            Create Account
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
