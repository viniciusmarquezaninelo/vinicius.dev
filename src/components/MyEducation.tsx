import Unicesumar from '../assets/unicesumar.svg'
import DevPleno from '../assets/devpleno.svg'

export function MyEducation() {
  return (
    <section id="myeducation">
      <h5>what i studied</h5>
      <h2 className="text-center">My Education</h2>

      <div className="container">
        <div className="bg-cards py-9 px-20 rounded-3xl border-solid border-2 border-transparent opacity-40;">
          <h3 className="text-center mb-8 ">My academic background</h3>
          <div className='lg:grid lg:grid-cols-2'>
            
            <article className="flex gap-4 mt-4">
              <img src={Unicesumar} alt="soon after college" width={80} height={60} className='rounded-md'/>
                <div>
                  <h4 className="text-sm lg:text-base">Análise e desenvolvimento de sistemas</h4>
                  <small className="text-light text-xs sm:text-sm">Unicesumar</small>
                  <span className='block'>Jan de 2022 - Ago de 2025</span>
                </div>
              </article>
          </div>
        </div>  
      </div>
    </section>
  )
}