import { StatusTask, PriorityTask } from "@/enums";

export interface Tasks {
    id: number,
    start: Date,
    priority: PriorityTask,
    name: string,
    detail: string,
    estimatedTime: number,
    status: StatusTask
}

