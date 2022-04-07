import React from 'react'
import getUser from '../utils/getUser'

import { RiGitRepositoryFill, RiCodeBoxFill } from "react-icons/ri";
import { FaUserFriends, AiFillStar } from 'react-icons/fa';
import { GoStar } from 'react-icons/go';


import PageHead from '../components/PageHead';
import Hero from '../components/Hero/index.js'

const Index = ({ repos, user }) => {
  return(
    <div className='container mx-auto bg-network'>
      <PageHead/>
      <Hero />
                         {/* WHAT I DO */}
      <div className="bg-white rounded-lg shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center text-lightPink">What I do</h3>
        <p className="text-2xl">Fullstack Developer</p>
      </div>

                  {/* MY EDUCATION */}
      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-lightPink">My Education</h3>
        <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
          <div className="border-dashed border-l px-12">
            <h4 className="text-lg uppercase font-bold mb-2 text-lightPink">GRADUATION</h4>
            <p className="text-2xl uppercase">ANALYSIS AND SYSTEMS DEVELOPMENT<br />
            <span className="text-lg normal-case font-bold">Maringá - University of Maringá</span></p>
          </div>
          <div>
            DevPleno
          </div>
        </div>
      </div>


      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 text-lightPink">Tech contributions</h3>
        <p className='text-center'>Github stats: <RiGitRepositoryFill className="inline-block"/> {user.public_repos} / <RiCodeBoxFill className="inline-block"/> {user.public_gists} / <FaUserFriends className="inline-block"/> {user.followers}</p>
        <div className='md:grid md:grid-cols-3 md:gap-2 my-6'>
          {repos.map(repo => {
            return (
              <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md'>
                <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name} target="_blank"> {repo.full_name}</a></h3>
                <p>Language: {repo.language} / <GoStar className="inline-block"/> Stars: {repo.stargazers_count}</p>
              </div>
            );
          })}
        </div>
      </div>
        <div>
          <p className="text-center my-8 py-4 border-t-2">You can find the source-code of this website here.</p>
        </div>
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