
import LogoIw from '../assets/iwnet-logo.png'

export function Experience() {
  return (
    <section id="repositories">
      <h5>My Recent Work</h5>
      <h2>My Experiences</h2>

      <div className="container items-center flex justify-center"> {/* LINHA DO TEMPO */}
        <div className="w-1  h-96 bg-linhatempo">
            <div className="w-20 h-20 bg-circles rounded-full">{/* CIRCULO COM LOGO DA EMPRESA */}
              <img src={LogoIw} alt="logo iw" />
            </div> 
          </div>
    
        
      </div>
    </section>
  )
}