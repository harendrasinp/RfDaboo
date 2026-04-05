"use client"
import { loginpageStatus } from '@/reduxStore/loginSlice';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
  
const AdminLogin= () => {
  const isLoggedIn = useSelector((state) => state.loginpage.pageStatus);
  const dispatch = useDispatch();
    const handleClose = () => { 
      dispatch(loginpageStatus(false));
    }
  console.log(isLoggedIn);
  if (isLoggedIn) {
  return (
    <div className=' bg-gray-800/35 backdrop-blur-md w-96 py-2  flex flex-col items-center gap-5 rounded-lg mt-10 mx-auto'>
        <div className='relative flex items-center w-full '>
          <div className='text-shadow-sky-950 text-2xl mx-auto'>Admin Login</div>
          <div onClick={handleClose} className='absolute right-5 px-2 text-shadow-sky-950 text-2xl bg-amber-400 cursor-pointer'>X</div>
        </div>
        <div>
            <form className='flex flex-col justify-center items-center ' >
                <input type="text" placeholder='Username' className='p-1 m-2 rounded-[5px] border-2 border-bs-indigo-950'/>
                <input type="password" placeholder='Password' className='p-1 m-2 rounded-[5px] border-2 border-bs-indigo-950' />
                <button className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
            </form>
        </div>
    </div>
  )      
}
  return null;
}

export default AdminLogin