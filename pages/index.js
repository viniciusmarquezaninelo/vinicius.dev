import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'

import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiGitRepositoryFill, RiCodeBoxFill } from "react-icons/ri";
import { FaUserFriends, AiFillStar } from 'react-icons/fa';
import { GoStar } from 'react-icons/go';

const Index = ({ repos, user }) => {
  return(
    <div className='container mx-auto bg-network'>
      <Head>
        <title>Vinícius Zaninelo - Fullstack Developer</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div className='grid grid-cols-2 pt-16 leading-none'>
        <div className="pt-32">
          <h1 className='text-4xl uppercase pl-16'>Hi, I'm Vinicius</h1>
          <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
          <div className="relative border border-lightPink rounded px-16 pb-4 pt-10 mt-6">
            <h3 className="absolute bg-lightPink text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase">Contact me</h3>
            <p>
              <AiFillLinkedin className='text-6xl inline-block mr-6'/> 
              <AiOutlineGithub className='text-6xl inline-block mr-6'/>
              <AiOutlineMail className='text-6xl inline-block mr-6'/>
              <AiOutlineWhatsApp className='text-6xl inline-block mr-6'/>
            </p>
          </div>
        </div>
        <div>
          <img src="/images/pngs/vinicius-foto.png" />
        </div>
      </div>

                         {/* WHAT I DO */}
      <div className="bg-white rounded-lg shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center text-lightPink">What I do</h3>
        <p className="text-2xl">Fullstack Developer</p>
      </div>

                  {/* MY EDUCATION */}
      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-lightPink">My Education</h3>
        <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
          <div className="border-dashed border-l px-12">
            <h4 className="text-lg uppercase font-bold mb-2 text-lightPink">GRADUATION</h4>
            <p className="text-2xl uppercase">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS<br />
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
        <div className='grid grid-cols-3 gap-2 my-6'>
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