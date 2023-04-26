
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


export function Footer(){
  return(
    <footer className='bg-secondary py-12 px-0 text-center text-sm mt-28'>
      <ul className='permalinks text-base sm:text-sm sm:flex sm:flex-wrap sm:justify-center'>
        <li><a href="#">Home</a></li>
        <li><a href="#myeducation">My Education</a></li>
        <li><a href="mytechnologies">My Technologies</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#repositories">Repositories</a></li>
        <li><a href="#contact-me">Contat-me</a></li>
      </ul>

      <div className='flex justify-center gap-4 mb-16'> {/* socials */}
        <a href="" target='_blank' className='bg-cards text-white p-4 sm:p-3 rounded-xl flex border-solid  border-transparent items-center text-center'><FaFacebookF className='text-lg sm:text-sm' /></a>
        <a href="https://www.instagram.com/viniciusmarqueszaninelo" target='_blank' className='bg-cards text-white p-4 sm:p-3 rounded-xl flex border-solid  border-transparent'><FiInstagram className='text-lg sm:text-sm' /></a>
        <a href="https://twitter.com/Viniciusmz03" target='_blank' className='bg-cards text-white p-4 sm:p-3 rounded-xl flex border-solid  border-transparent'><IoLogoTwitter className='text-lg sm:text-sm' /></a>
      </div>

      <div className='mb-16 text-cards'> {/* COPYRIGHT */}
        <small>
          &copy; Vinicius Zaninelo. All rights reserved.
        </small>
      </div>
    </footer>
  )
}