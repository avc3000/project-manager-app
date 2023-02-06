import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../graphql/projects';
import TasksList from '../components/Tasks/TasksList';
import TaskForm from '../components/Tasks/TaskForm';

function ProjectDetail() {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id: params.id }});

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <Link to='/projects'><button className='bg-sky-900 w-full rounded-lg text-white font-bold px-3 py-2 mb-3'>Back</button></Link>
      <div className='bg-zinc-900 mb-2 p-10 flex justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-yellow-600'>{data.project.name}</h1>
          <p className='italic'>{data.project.description}</p>
        </div>
      </div>
      <button className='bg-red-500 w-full px-3 rounded-lg py-2 mb-3 font-bold'>Delete</button>
      <TaskForm />
      <TasksList tasks={data.project.tasks} />
    </div>
  )
}

export default ProjectDetail;