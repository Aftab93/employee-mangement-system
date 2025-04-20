import React from 'react'

const Login = () => {

    const submitHandler = () => {
        console
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>
                <input required className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input className='text-black outline-none bg-transparent mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='w-full text-white outline-none mt-5 bg-emerald-600 rounded-full py-2 px-8'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login