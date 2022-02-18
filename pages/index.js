import React from 'react'

import getUser from '../utils/getUser'


const Index = ({ repos, user }) => {
  return(
    <div className='container mx-auto bg-network'>
      <div className='grid grid-cols-2 pt-16 leading-none'>
        <div className="pt-32">
          <h1 className='text-4xl uppercase pl-16'>Hi, I'm Vinicius</h1>
          <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
          <div className="relative border-2 rounded px-16 pb-4 pt-10 mt-6">
            <h3 className="absolute bg-red-900 text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase">Contact</h3>
            <ul>
              <li>linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/images/pngs/vinicius-foto.png" />
        </div>
      </div>

                         {/* WHAT I DO */}
      <div className="bg-white rounded-lg shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center">What I do</h3>
        <p className="text-2xl">Fullstack Developer</p>
      </div>

                  {/* MY EDUCATION */}
      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5">My Education</h3>
        <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
          <div className="border-dashed border-l px-12">
            <h4 className="text-lg uppercase font-bold mb-2">TECHNOLOGIST</h4>
            <p className="text-2xl uppercase">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS<br />
            <span className="text-lg normal-case font-bold">Maringá - University of Maringá</span></p>
          </div>
          <div>
            DevPleno
          </div>
        </div>
      </div>


      <p>Github stats: public repos:{user.public_repos} / public gists: {user.public_gists} / followers: {user.followers}</p>
        {repos.map(repo => {
          return (
            <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
              <h3 className='font-bold'>{repo.full_name}</h3>
              <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
            </div>
          );
        })}
    </div>
  );
}

export async function getServerSideProps(context) {

  const { repos, user } = await getUser('viniciusmarquezaninelo')
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}
export default Index