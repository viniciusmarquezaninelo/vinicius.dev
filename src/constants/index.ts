
import  Unicesumar  from '../assets/Unicesumar.svg'
import DevPleno from '../assets/devpleno.svg'


const education = [
  {
    id: 1,
    course:'Análise e desenvolvimento de sistemas',
    institution:'Unicesumar',
    icon: Unicesumar,
    alt: 'logo Unicesumar',
    date:'Jan de 2022 - Ago de 2025'
  },
  {
    id: 2,
    course:'Desenvolvimento Fullstack',
    institution:'DevPleno',
    icon: DevPleno,
    alt: 'logo DevPleno',
    date: '2021 - 2024'
  },
]

const technologieFront = [
      {
        language: 'HTML5',
        level: 'Experienced',
      },
      {
        language: 'React',
        level: 'Intermediate',
      },
      {
        language: 'Typescript',
        level: 'Intermediate',
      },
      {
        language: 'TailwindCSS',
        level: 'Experienced',
      },
      {
        language: 'JavaScript',
        level: 'Intermediate',
      },
      {
        language: 'Nextjs',
        level: 'Intermediate',
      },
      {
        language: 'CSS3',
        level: 'Experienced',
      },
]

const technologieBack = [
  {
    language: 'NodeJs',
    level: 'Intermediate',
  },
  {
    language: 'Mysql',
    level: 'Basic',
  },
  {
    language: 'Postgresql',
    level: 'Basic',
  },
  {
    language: 'GraphQL',
    level: 'Basic',
  },
]




export { education, technologieFront, technologieBack }