
import CV from '../../assets/CV.pdf'

export function CTA() {
  return(
    <div className='cta mt-10 flex gap-5 justify-center'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact-me" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}