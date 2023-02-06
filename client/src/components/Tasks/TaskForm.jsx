import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../graphql/tasks';
import { useParams } from 'react-router-dom';

function TaskForm() {

  const [createTask] = useMutation(CREATE_TASK, {refetchQueries: ['getProject'] });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ variables: { title: e.target.title.value, projectId: params.id } });
    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' className='bg-zinc-900 text-white w-full p-2 rounded-lg mb-3' placeholder='Title' />
      <button className='bg-sky-600 text-white w-full p-2 font-bold rounded-lg'>Add</button>
    </form>
  )
}

export default TaskForm;