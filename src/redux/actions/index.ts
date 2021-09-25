import { ActionType } from '../action-types/index';

interface Task {
  _id: string;
  title: string;
  completed: boolean;
  date: string;
}

interface getTasksSuccess {
  type: ActionType.FETCH_TASKS_SUCCESS;
  payload: Task[];
}

interface getTasksFailure {
  type: ActionType.FETCH_TASKS_ERROR;
  payload: string;
}

interface addTaskSuccess {
  type: ActionType.ADD_TASKS_SUCCESS;
  payload: Task;
}

interface addTaskFailure {
  type: ActionType.ADD_TASKS_ERROR;
  payload: string;
}

interface deleteTasksSuccess {
  type: ActionType.DELETE_TASKS_SUCCESS;
  payload: Task;
}

interface deleteTasksFailure {
  type: ActionType.DELETE_TASKS_ERROR;
  payload: string;
}

interface updateTasksSuccess {
  type: ActionType.UPDATE_TASKS_SUCCESS;
  payload: Task;
}

interface updateTasksFailure {
  type: ActionType.UPDATE_TASKS_ERROR;
  payload: string;
}

export type Action =
  | getTasksSuccess
  | getTasksFailure
  | addTaskFailure
  | addTaskSuccess
  | deleteTasksSuccess
  | deleteTasksFailure
  | updateTasksSuccess
  | updateTasksFailure;
