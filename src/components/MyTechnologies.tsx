import { BsPatchCheckFill } from "react-icons/bs";

import { technologieFront, technologieBack } from '../constants'


interface TechnologiesFrontProps {
  language: string
  level: string
}



export function MyTechnologies<TechnologiesFrontProps> ( ){
  return (
    <div>
      <section id="mytechnologies">
        <h5>What Skills I Have</h5>
        <h2>My technologies</h2>

      <div className="container lg:grid lg:grid-cols-2 lg:gap-8 ">
        <div className="">
          <div className="bg-cards py-9 px-20 rounded-3xl border-solid border-2 border-transparent opacity-40;">
            <h3 className="text-center mb-8 ">Frontend Development</h3>
            <div className="experience_content grid grid-cols-2 gap-y-8">
            {technologieFront.map((technologiesfront) => (
              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
              <div>
                <h4 className="text-sm lg:text-base">{technologiesfront.language}</h4>
                <small className="text-light text-xs sm:text-sm">{technologiesfront.level}</small>
              </div>
            </article>
            ))}
            </div>
          </div>
        </div>


        <div> {/* container experience_container */}
          <div className="bg-cards py-9 px-20 rounded-3xl border-solid border-2 border-transparent opacity-40;">
            <h3 className="text-center mb-8 ">Backend Development</h3>
            <div className="experience_content grid grid-cols-2 gap-y-8">

            {technologieBack.map((technologiesBack) => (
              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
              <div>
                <h4 className="text-sm lg:text-base">{technologiesBack.language}</h4>
                <small className="text-light text-xs sm:text-sm">{technologiesBack.level}</small>
              </div>
            </article>
            ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}