import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true)
  const toggleSignupForm=()=>{
setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg'alt='neflix-icon'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
{  !isSignInForm  &&  <input type='text' placeholder='Full name' className='p-4 my-4 w-full bg-gray-700'></input>}

        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
<p className='py-4 cursor-pointer' onClick={toggleSignupForm}>{isSignInForm?"New to netflix? Sign Up Now":"Already a user? Sign In now"} </p>
      </form>

    </div>
  )
}

export default Login
