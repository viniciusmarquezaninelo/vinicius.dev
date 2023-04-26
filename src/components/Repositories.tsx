import { useEffect, useState } from "react"

import { GoStar, GoGist } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";



export function Repositories() {
  const [ repositories, setRepositories] = useState<any[]>([]);
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/viniciusmarquezaninelo/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/viniciusmarquezaninelo')
        .then(res => res.json())
        .then(data => setUsers(data))
  }, [])

  return (
    <section id="repositories">
      <h5>My Recent Work</h5>
      <h2>Repositories</h2>

      <p className="text-center mb-9">Github stats: repositories: <RiGitRepositoryLine className='inline-block' /> {users.followers} / public_gists: <GoGist className='inline-block'/> {users.public_repos} / followers: <FiUsers className='inline-block'/> {users.followers}</p>

      <div className="xl:grid xl:grid-cols-3 xl:gap-4">
      {repositories.map(repository => {
        return(
          <div key={repository.id} className="container bg-cards p-4 text-center rounded-md lg:mt-6 md:mt-6 max-md:mt-6">
            <h3 className="font-bold hover:underline"><a href={'https://github.com/' + repository.full_name}>{repository.full_name}</a></h3>
            <p>Language: {repository.language} / <GoStar className="inline-block"/> Stars: {repository.stargazers_count}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}