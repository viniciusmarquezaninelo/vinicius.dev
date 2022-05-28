import React from 'react'

import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";


const ContactMe = () =>  {
  return(
    <div className="mx-8 px-8 relative border border-lightPink rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6">
      <h3 className="absolute bg-lightPink text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase">Contact me</h3>
      <p className="text-center md:text-left">
        <a href='https://www.linkedin.com/in/vin%C3%ADciuszaninelo/'><AiFillLinkedin className='text-6xl inline-block mr-6'/></a>
        <a href='https://github.com/viniciusmarquezaninelo'><AiOutlineGithub className='text-6xl inline-block mr-6'/></a>
        <a href='mailto:vinicousmarquezaninelo@gmail.com?'><AiOutlineMail className='text-6xl inline-block mr-6'/></a>
        <a href='https://web.whatsapp.com/send?phone=554488314504'><AiOutlineWhatsApp className='text-6xl inline-block mr-6'/></a>
      </p>
    </div>
  );
}

export default ContactMe