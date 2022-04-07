import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Hero = () =>  {
  return (
    <div className='md:grid grid-cols-2 md:pt-16 leading-none'>
      <div className="pt-16 md:pt-32">
        <h1 className='text-4xl uppercase pl-16'>Hi, I'm Vinicius</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
        <div className="w-full relative border border-lightPink rounded px-16 pb-4 pt-10 mt-6">
          <h3 className="absolute bg-lightPink text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase">Contact me</h3>
          <p>
            <AiFillLinkedin className='text-6xl inline-block mr-6'/> 
            <AiOutlineGithub className='text-6xl inline-block mr-6'/>
            <AiOutlineMail className='text-6xl inline-block mr-6'/>
            <AiOutlineWhatsApp className='text-6xl inline-block mr-6'/>
          </p>
        </div>
      </div>
      <div>
        <img src="/images/pngs/vinicius-foto.png" />
      </div>
    </div>
  );
}

export default Hero