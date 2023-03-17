import { DefineTypes, DefineMutations } from "@/store/store.helper";
import { RootState } from "@/store/root.models";
import { TasksState } from './task.models';
import { Tasks } from "@/models/interfaces/tasks";

export interface TasksMutations{
    setTask: Tasks[]
}

export const tasksMutationsTypes: DefineTypes<TasksMutations> = {
    setTask: payload => ({type: "setTask", payload})
}

const mutations: DefineMutations<TasksMutations, TasksState, RootState> = {
    setTask(state, {payload}){
        state.tasks = payload;
    },
}

export default mutations;