import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    task: taskReducer
})

export default rootReducer
export type State = ReturnType<typeof rootReducer>