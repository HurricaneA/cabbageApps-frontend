import { ActionType } from '../action-types';
import { Action } from '../actions/index';

interface ITask {
  _id: string;
  title: string;
  completed: boolean;
  date: string;
}

type TaskState = {
  tasks: ITask[];
  error: string;
};

const initialState: TaskState = {
  tasks: [],
  error: '',
};

const taskReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ActionType.FETCH_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case ActionType.ADD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };
    case ActionType.ADD_TASKS_ERROR:
      return {
        tasks: [],
        error: action.payload,
      };
    case ActionType.DELETE_TASKS_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item._id !== action.payload._id),
        error: '',
      };
    case ActionType.DELETE_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.UPDATE_TASKS_SUCCESS:
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id
      );
      const newArray = [...state.tasks];
      newArray[index].completed = action.payload.completed;
      newArray[index].title = action.payload.title;
      newArray[index].date = action.payload.date;
      return {
        tasks: newArray,
        error: '',
      };
    case ActionType.UPDATE_TASKS_ERROR:
      return {
        ...state,
        tasks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
