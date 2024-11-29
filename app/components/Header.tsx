"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";



const Header = () => {
  const [click, setClick] = useState(false)

  const toggleBtn = () => {
    setClick(!click)
  }
  return (
    <div className="">
      <div className='flex justify-between items-end px-[20px] md:px-[40px] xl:px-[160px] overflow-hidden pb-2'>
        <div className="flex justify-center items-center">
          <h1 className='text-[#181717] font-[700] text-[42px] relative top-[10px]'>ma.</h1>
        </div>
        <div className="">
          <button className={`md:hidden text-3xl font-bold`} onClick={toggleBtn}>{click ? <IoMdClose className='scale-150' /> : <FiAlignRight className='scale-150' />
          }</button>
        </div>
        <div className="hidden md:flex justify-center items-center gap-[33px] capitalize">
          <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>work</Link >
          <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>about</Link >
          <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>playground</Link >
          <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>contact</Link >
        </div>
      </div>

      <div className={`${click ? " opacity-100 border" : " opacity-0"} duration-300 ease-out bg-black/10 backdrop-blur-md  shadow-2xl md:hidden flex flex-col justify-center items-center gap-[20px] capitalize absolute w-full p-[20px] z-50 rounded-lg border-2 border-black/20`}>
        <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>work</Link >
        <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>about</Link >
        <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>playground</Link >
        <Link href="/" className='text-[#181717] font-[500] text-[21px] hover:bg-black/20 hover:shadow-sm rounded-md px-2 duration-300 ease-in-out'>contact</Link >
      </div>
    </div>
  )
}

export default Header
