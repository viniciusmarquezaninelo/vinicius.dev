
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";



export function ContatMe() {
  return(
    <section id="contact-me">
      <h5>Get In Touch</h5>
      <h2 className="text-center">Contat-me</h2>

      <div className="container contact-columns max-lg:block sm:block lg:grid "> {/* contact_container */}
        <div className="flex flex-col gap-5">{/* contact_options */}
          <article className="bg-cards p-5 rounded-2xl text-center border-solid border-1 border-transparent">{/* contact_option */}
            <MdOutlineEmail className=""/>
            <h4 className="text-sm font-bold">Email</h4>
            <h5 className="text-sm font-normal">vinicousmarqueszaninelo@gmail.com</h5>
            <a href="mailto:vinicousmarqueszaninelo@gmail.com" className="m-3 inline-block text-sm" target="_blank">Send a message</a>
          </article>

          <article className="bg-cards p-5 rounded-2xl text-center border-solid border-1 border-transparent">{/* contact_option */}
            <BsLinkedin className=""/>
            <h4 className="text-sm font-bold">Linkedin</h4>
            <h5 className="text-sm font-normal">viníciuszaninelo</h5>
            <a href="https://www.linkedin.com/in/vin%C3%ADciuszaninelo/" className="m-3 inline-block text-sm" target="_blank">Send a message</a>
          </article>

          <article className="bg-cards p-5 rounded-2xl text-center border-solid border-1 border-transparent mb-4 ">{/* contact_option */}
            <BsWhatsapp className=""/>
            <h4 className="text-sm font-bold">Whatsapp</h4>
            <h5 className="text-sm font-normal">44 9 8831-4504</h5>
            <a href="https://wa.me/5544988314504" className="m-3 inline-block text-sm" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="" className="flex flex-col gap-5  sm:items-center">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="" id="" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}