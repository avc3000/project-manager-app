import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects';

function ProjectForm() {

  const [project, setProject] = useState({ title: "", description: "" });
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }]
  });

  const handleChange = ({ target: { name, value }}) => setProject({ ...project, [name]: value });

  const handleSubmit = async (e) => { 
    e.preventDefault();
    await createProject({ variables: { name: project.name, description: project.description }});
    e.target.reset();
    e.target.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      { error && <p>{error.message}</p> }
      <input type="text" name='name' placeholder='Name' onChange={handleChange} className='bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3' />
      <textarea name="description" rows="3" placeholder='Description' onChange={handleChange} className='bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3'></textarea>
      <button disabled={!project.name || !project.description || loading} className='bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 font-bold w-full disabled:bg-zinc-400'>Save</button>
    </form>
  )
}

export default ProjectForm;