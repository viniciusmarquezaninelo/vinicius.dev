import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";



export function HeaderSocial() {
  return (
    <div className="header-social flex flex-col items-center gap-6 absolute left-0 bottom-12 after:content-[''] after:w-px after:h-8 after:bg-secondary">
      <a href="https://www.linkedin.com/in/viníciuszaninelo" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/viniciusmarquezaninelo" target="_blank"><FaGithub /></a>
    </div>
  )
}