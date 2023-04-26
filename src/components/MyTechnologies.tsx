
import { BsPatchCheckFill } from "react-icons/bs";

export function MyTechnologies () {
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
              <article className="flex gap-4">
                <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm lg:text-base">HTML5</h4>
                  <small className="text-light text-xs sm:text-sm">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm md:text-base">JavaScript</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/>  
                <div>
                  <h4 className="text-sm sm:text-base">React</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">Next</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">Typescript</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">CSS3</h4>
                  <small className="text-light text-xs sm:text-sm">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">TailwindCSS</h4>
                  <small className="text-light text-xs sm:text-sm">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>


        <div className="my-8"> {/* container experience_container */}
          <div className="bg-cards py-9 px-20 rounded-3xl border-solid border-2 border-transparent opacity-40;">
            <h3 className="text-center mb-8 ">Backend Development</h3>
            <div className="experience_content grid grid-cols-2 gap-y-8">
              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">NodeJs</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">Postgresql</h4>
                  <small className="text-light text-xs sm:text-sm">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">Mysql</h4>
                  <small className="text-light text-xs sm:text-sm">Basic</small>
                </div>
              </article>

              <article className="flex gap-4">
              <BsPatchCheckFill className="mt-1.5 text-secondary text-xl lg:text-2xl"/> 
                <div>
                  <h4 className="text-sm sm:text-base">GraphQL</h4>
                  <small className="text-light text-xs sm:text-sm">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}