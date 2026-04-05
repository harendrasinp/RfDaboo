"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Header = () => {
  return (
    <header className='bg-fuchsia-100 text-gray-800 p-2 border-b-4 border-gray-700'>
      <div className='flex items-end w-fit gap-5'>
        <div>
          <Image src="/Images/kb-patel/logo.png" alt="logo" width={100} height={50} />
        </div>

        <div>
          <h1 className='text-3xl font-bold'>Shree K.B.Patel</h1>
          <p>English medium School,Vyara</p>
        </div>
        <div><Image src="/Images/kb-patel/header/students-header.png" alt="header background" width={200} height={100} /></div>
      </div>
      {/* ----------------------------------Contact Info with Animation--------------------------------- */}
      <div className='overflow-hidden whitespace-nowrap flex justify-center items-center'>
        <motion.div
          className='inline-block'
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <FontAwesomeIcon icon={faPhoneVolume} className="w-5 h-5" />
          :+91-9867775626, +91-9678656589,
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          :kbpatel@Rfdaboo.com
        </motion.div>
      </div>
    </header>
  )
}
