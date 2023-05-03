import { Header } from './components/Header/Header'
import { MyTechnologies } from './components/MyTechnologies'
import { Repositories } from './components/Repositories'
import { ContatMe } from './components/ContatMe'
import { Footer } from './components/Footer'


import './styles/global.css'
import { MyEducation } from './components/MyEducation'
import { Experience } from './components/Experience'






export default function App() {
  return (
    <>
    <Header />
    <MyEducation />
    <MyTechnologies />
    <Experience />
    <Repositories />
    <ContatMe />
    <Repositories />
    <Footer />
    </>
  )
}

