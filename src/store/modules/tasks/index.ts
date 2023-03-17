import { Module } from "vuex";
import { RootState } from "@/store/root.models";
import mutations, { tasksMutationsTypes } from "./task.mutations";
import actions, { tasksActionsActionsTypes } from "./task.actions";
import { initialTasksState, TasksState } from './task.models';

export const tasks: Module<TasksState, RootState> = {
    namespaced: false,
    state: initialTasksState,
    mutations: mutations,
    actions: actions
};

export const taskTypes = {
    mutations: tasksMutationsTypes,
    actions: tasksActionsActionsTypes,
};
