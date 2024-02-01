import React, {useState} from 'react'
import { login as storeLogin } from '../Store/AuthSlice'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import authService from '../Appwrite/auth'
import {Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import Button from './Button'

function Login() {

const navigate= useNavigate()
const dispatch= useDispatch()
const {
  register,
  handleSubmit,
  formState:{ errors}
  }= useForm()
const [error, setError]= useState()
const [loader, setLoader]= useState(false)
const login= async(data) =>{
    setError("")

    try {
        // console.log("login fn checked");
        const session= await authService.login(data);
        console.log("session", session)
        if(session){
         
            // const userData= await authService.getCurrentUser()
            // console.log("user found")
            // if(userData) {
            //   dispatch(storeLogin(userData))
            // navigate("/")
            // }

            authService.getCurrentUser().
            then((userData) => {
              console.log("userdata from login", userData);
              dispatch(storeLogin(userData))
              setLoader(true)
              navigate("/")
            })
        }
    } catch (error) {
        setError(error.message)
      
    }
}
if (loader) return <div>Looged In Successfully</div>
  return (
    
   <>
   
   {/* {loader && <div>Looged In Successfully</div>} will not work */}
   <div className='flex items-center w-full justify-center'>
      <div className= {`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width= "100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up Now
                    </Link>
        </p>

        {error && <p className='text-red-800 mt-8 text-center'> {error} </p>}
        

        <form onSubmit={handleSubmit(login)} className='mt-8'>
           <div className='space-y-5'>

           <Input
            
            label= "Email"
            type= "email"
            placeholder= "Enter the email"
            {...register("email", {
              required:true,
              validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
            })}
            />

            {errors.email && errors.email.type==='required' &&
             <p className='text-purple-600 mt-8 text-center '>Email is Required</p>
             }

            
            <Input
            type= "password"
            label= "Password: "
            placeholder= "bhai Enter the Password"
            
            {...register("password", {
              required: true,
            //   validate: {
            //     checkLength: (value) => value.length >= 6,
            //     matchPattern: (value) =>
            //     /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
            //         value
            //     )
            // }

            })}
            />

            {/* {
              errors.password?.type==='required' &&
              <p className='text-red-600 mt-8 text-center'> Password required</p>
            }

            {
              errors.password?.type==='checkLength' &&
              <p className='text-red-600 mt-8 text-center'> Minimum Length should be of 8 digits</p>
            }

              {
              errors.password?.type==='matchPattern' &&
              <p className='text-red-600 mt-8 text-center'> Password should contain atleast one Uppercase,
               lowercase, digit and special symbol </p>
            } */}

            {/* {
              errors.password && errors.password.type==='required' &&
              <p className='text-red-800 mt-8 text-center'>Password is Required</p>
            }

            {
              errors.password && errors.password.type==='minLength'&&
              <p className='text-red-800 mt-8 text-center'>Min Length should be of 8 characters</p>
            } */}
            
            <Button
            className='w-full btn btn-primary  btn-circle btn-success  '
            type='submit'
            >
              SignIn
            </Button>
           </div>

        </form>
      </div>
      
    </div>
   </>
    
  )
}

export default Login
