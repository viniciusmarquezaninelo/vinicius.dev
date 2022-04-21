import React from 'react'

import { RiGitRepositoryFill, RiCodeBoxFill } from "react-icons/ri";
import { FaUserFriends, AiFillStar } from 'react-icons/fa';

const UserStats = ({ user }) => {
  return (
    <p className='text-center'>
      Github stats: 
      <RiGitRepositoryFill className="inline-block"/> {user.public_repos} /
      <RiCodeBoxFill className="inline-block"/> {user.public_gists} / 
      <FaUserFriends className="inline-block"/> {user.followers}
    </p>
  );
}

export default UserStats