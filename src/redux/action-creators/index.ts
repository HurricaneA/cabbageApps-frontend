import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import axios from 'axios';

export interface Task {
  _id: string;
  title: string;
  completed: boolean;
  date: string;
}

export interface NewTask {
  title: string;
  completed: boolean;
  date: string;
}

const baseUrl = 'http://localhost:8000/tasks';

export const fetchTasks = (term?: string) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get(`${baseUrl}/?order=${term}`)
      .then((res) => {
        const tasks: Task[] = res.data.tasks;
        dispatch({
          type: ActionType.FETCH_TASKS_SUCCESS,
          payload: tasks,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.FETCH_TASKS_ERROR,
          payload: err.message,
        });
      });
  };
};

export const addTask = (newtask: NewTask) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .post(`${baseUrl}`, newtask)
      .then((res) => {
        const addedTask: Task = res.data;
        dispatch({
          type: ActionType.ADD_TASKS_SUCCESS,
          payload: addedTask,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.ADD_TASKS_ERROR,
          payload: err.message,
        });
      });
  };
};

export const deleteTask = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => {
        dispatch({
          type: ActionType.DELETE_TASKS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.DELETE_TASKS_ERROR,
          payload: err.message,
        });
      });
  };
};

export const updateTask = (
  id: string,
  title?: string,
  completed?: boolean,
  date?: string
) => {
  return (dispatch: Dispatch<Action>) => {
    console.log('received ', id, title, completed, date);
    axios
      .patch(`${baseUrl}/${id}`, {
        title: title,
        completed: completed,
        date: date,
      })
      .then((res) => {
        dispatch({
          type: ActionType.UPDATE_TASKS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.UPDATE_TASKS_ERROR,
          payload: err.message,
        });
      });
  };
};
