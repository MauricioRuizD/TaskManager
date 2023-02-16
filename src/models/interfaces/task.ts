import { StatusTask } from "@/enums/status-task";

export interface task {
    id: number,
    inicio: Date,
    prioridad: string,
    nombre: string,
    detalle: string,
    horasestimadas: number,
    asignadoa: string,
    asignadoaId: number,
    estado: StatusTask,
    disabledDoneTask: boolean
  }

