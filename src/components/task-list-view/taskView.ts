import { StatusTask } from './../../enums/status-task';
import { Component, Vue } from "vue-property-decorator";
import { task } from "@/models/interfaces/task";

import DetailTask from '../detail-task/detailTask.vue';

@Component({
  name: 'taskView',
  components: { DetailTask }
})

export default class taskView extends Vue {

  public tasks: task[] = [];
  public showDetailTask = false;
  public titleModal = 'Nueva tarea';
  public titleModalAction = '';
  public msgAction = '';
  public confirmAction = false;
  public msgNewTask = false;
  public editedIndex = -1;
  public selectedIndex = -1;
  public msgDeleteTask = false;

  public editedItem: task = {
    id: 0,
    inicio: new Date('01/01/2000'),
    prioridad: '',
    nombre: '',
    detalle: '',
    horasestimadas: 0,
    asignadoa: '',
    asignadoaId: 0,
    estado: StatusTask.OPEN,
    disabledDoneTask: false,
  };

  public defaultItem: task = {
    id: 0,
    inicio: new Date('01/01/2000'),
    prioridad: 'normal',
    nombre: '',
    detalle: '',
    horasestimadas: 0,
    asignadoa: '',
    asignadoaId: 0,
    estado: StatusTask.OPEN,
    disabledDoneTask: false,
  }

  constructor(){
    super();
    this.tasks.push({
      id: 1,
      inicio: new Date('01/01/2020'),
      prioridad: 'alta',
      nombre: 'Crear una tarea 1',
      detalle: 'Este es el detalle de la tarea 1',
      horasestimadas: 12,
      asignadoa: 'Felipe XXXXXX',
      asignadoaId: 1000,
      estado: StatusTask.OPEN,
      disabledDoneTask: false,
    },
    {
      id: 2,
      inicio: new Date('01/01/2021'),
      prioridad: 'normal',
      nombre: 'Crear una tarea 2',
      detalle: 'Este es el detalle de la tarea 2',
      horasestimadas: 9,
      asignadoa: 'Felipe YYYYYY',
      asignadoaId: 2000,
      estado: StatusTask.OPEN,
      disabledDoneTask: false,
    },
    {
      id: 3,
      inicio: new Date('01/01/2023'),
      prioridad: 'normal',
      nombre: 'Crear una tarea 3',
      detalle: 'Este es el detalle de la tarea 3',
      horasestimadas: 5,
      asignadoa: 'Felipe ZZZZZ',
      asignadoaId: 3000,
      estado: StatusTask.OPEN,
      disabledDoneTask: false,
    })
  }

  actionTask() {
    if(this.msgDeleteTask) {
      this.deleteTask();
    }
    else {
      this.doneTask();
    }
  }

  modalAction(option: string, item: task) {

    //Si se oprime el botón eliminar
    if (option == "r") {
      this.msgAction = '¿Está seguro que desea eliminar la tarea [' + item.nombre + ']?';
      this.titleModalAction = 'Eliminar tarea';
      this.msgDeleteTask = true;
    }
    //Sino se oprimió el botón tarea realizada
    else {
      this.msgAction = '¿Está seguro que desea finalizar la tarea [' + item.nombre + ']?';
      this.titleModalAction = 'Finalizar tarea';
    }
    this.$nextTick(() => {
      this.selectedIndex = this.tasks.indexOf(item);
    });
  }

  close() {
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
    this.selectedIndex = -1;
  }

  deleteTask() {
    this.$nextTick(() => {
      this.tasks.splice(this.selectedIndex, 1);
    });
  }

  defaultTask () {
    this.titleModal = 'Nueva tarea';
    this.editedIndex = -1;
    this.editedItem = Object.assign({}, this.defaultItem);
  }

  editTask(item: task) {
    this.titleModal = 'Actualizar tarea';
    this.editedIndex = this.tasks.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.showDetailTask = true;
  }

  doneTask() {
    this.tasks[this.selectedIndex].estado = StatusTask.DONE;
    this.tasks[this.selectedIndex].disabledDoneTask = true;
  }

  created() {
    document.title = "Tareas";
    this.$emit("showSidebar", true);
  }
}