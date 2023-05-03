import { education } from '../constants'


interface EducationProps {
  id: number;
  course: string
  institution: string
  icon: string 
  alt: string
  date:string
}

export function MyEducation<EducationProps>() {
  return (
    <section id="myeducation">  
      <h5>what i studied</h5>
      <h2 className="text-center">My Education</h2>
      <div className="container">
        <div className="bg-cards py-9 px-20 rounded-3xl border-solid border-2 border-transparent opacity-40;">
          <h3 className="text-center mb-8 ">My academic background</h3>
          <div className='lg:grid lg:grid-cols-2'>
            {education.map((educations) => (
              <article className="flex gap-4 mt-4" >
                <img src={educations.icon} alt={educations.alt} width={80} height={60} className='rounded-md'/> 
                <div>
                  <h4 className="text-sm lg:text-base">{educations.course}</h4>
                  <small className="text-light text-xs sm:text-sm">{educations.institution}</small>
                  <span className='block'>{educations.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>  
      </div>
    </section>
  )
}