import React from 'react';
import { DELETE_TASK } from '../../graphql/tasks';
import { useMutation } from '@apollo/client';
import { AiOutlineDelete } from 'react-icons/ai';

function TaskCard({ task }) {

  const [deleteTask] = useMutation(DELETE_TASK, { refetchQueries: ["getProject"] });

  return (
    <div className='bg-zinc-900 px-5 py-3 mt-2 flex justify-between'>
      <h1 className='text-sm italic text-gray-400'>{task.title}</h1>
      <button onClick={() => { deleteTask({variables: {id: task._id}}) }}><AiOutlineDelete /></button>
    </div>
  )
}

export default TaskCard;