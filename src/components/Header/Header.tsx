
import { CTA } from "./CTA"
import { HeaderSocial } from "./HeaderSocial"

export function Header() {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container container_header text-center h-full relative">
          <h5>Hello I'm </h5>
          <h1>Vinícius</h1>
          <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial />
        <div>
          <h1>foto minha ???? </h1>
        </div>
      </div>
    </header>
  )
}