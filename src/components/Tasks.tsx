import React, { useState } from 'react';
import TaskItem from './TaskItem';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

interface IProps {
  tasks: {
    _id: string;
    title: string;
    completed: boolean;
    date: string;
  }[];
}

const Tasks = (props: IProps) => {
  const dispatch = useDispatch();
  const { fetchTasks } = bindActionCreators(actionCreators, dispatch);

  const sortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetchTasks(event.target.value);
  };

  return (
    <div className='p-3'>
      <div className='title'>
        <h4>Your Tasks</h4>
        <FloatingLabel controlId='floatingSelect' label='Sort By'>
          <select
            aria-label='Floating label select example'
            className='form-control'
            onChange={(event) => sortBy(event)}
          >
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
            <option value='insertion'>Inserted</option>
          </select>
        </FloatingLabel>
      </div>

      <div className='taskList'>
        {props.tasks &&
          props.tasks.map((task, index) => {
            return <TaskItem task={task} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Tasks;
