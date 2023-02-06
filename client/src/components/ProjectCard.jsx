import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/projects/${project._id}`)} className='bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-2 hover:bg-zinc-700 hover:cursor-pointer'>
      <h2 className='font-bold text-yellow-700'>{project.name}</h2>
      <p className='italic text-green-700'>{project.description}</p>
    </div>
  )
}

export default ProjectCard;