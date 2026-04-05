"use client"
import React from 'react'
import Link from 'next/link'
import { navebarData } from '@/Data/kbPatel/navebar'
import { useRouter } from 'next/navigation'
import { loginpageStatus } from '@/reduxStore/loginSlice'
import {useDispatch } from 'react-redux'
export const Navebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAdminLogin = () => {
    dispatch(loginpageStatus(true));
  }
  const gotoCentralSite = () => {
    router.replace('/');
  }
  return (
    <div className='bg-gray-600'>
      <div className='flex justify-center items-center gap-20 text-white p-2'>
        {/* ---------------------------------Central Site Button --------------------------------- */}
        <button className='text-white bg-amber-500 rounded-2xl p-1 px-5 cursor-pointer' onClick={gotoCentralSite}>
          Central Site
        </button>
        {/* ---------------------------------Navigation Links --------------------------------- */}
        {navebarData.map((item, index) => (
          <div key={index} className='relative group cursor-pointer'>
            <span>{item.name}</span>
            {item.submenu && (
              <ul className='absolute hidden group-hover:block bg-gray-600 w-30 p-2'>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className='hover:bg-gray-700 p-2rounded'>
                    <Link href={subItem.link}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {/* ----------------------------------Admin Login BUtton---------------------- */}
        <button onClick={handleAdminLogin} className='text-blue-950 bg-amber-500 p-1 px-5 cursor-pointer rounded-2xl'>Admin Login</button>
        {/* ---------------------------------Footer --------------------------------- */}
      </div>
    </div>
  )
}
