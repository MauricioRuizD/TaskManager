import { StatusTask, PriorityTask } from './../../enums';
import { Component, Vue } from "vue-property-decorator";
import { store, storeTypes } from "@/store";
import { Tasks } from "@/models/interfaces/tasks";
//import DetailTask from '../detail-task/detailTask.vue';

@Component({
  name: 'taskView',
  //components: { DetailTask }
})

export default class taskView extends Vue {

  public EventBus: Vue = new Vue();
  public tasks: any[] = []
  public showDetailTask = false;
  public titleModal = 'Nueva tarea';
  public titleModalAction = '';
  public msgAction = '';
  public confirmAction = false;
  public msgNewTask = false;
  public editedIndex = -1;
  public selectedIndex = -1;
  public msgDeleteTask = false;

  public editedItem: any = {
    id: 0,
    start: new Date(),
    priority: PriorityTask.NORMAL,
    name: '',
    detail: '',
    estimatedTime: 0,
    assignedTo: '',
    assignedToId: 0,
    status: StatusTask.OPEN,
    disabledDoneTask: false,
  };

  public defaultItem: any = {
    id: 0,
    start: new Date(),
    priority: PriorityTask.NORMAL,
    name: '',
    detail: '',
    estimatedTime: 0,
    assignedTo: '',
    assignedToId: 0,
    status: StatusTask.OPEN,
    disabledDoneTask: false,
  }

  constructor(){
    super();
  }

  
  async mounted(): Promise<any> {
    await store.dispatch(storeTypes.tasks.actions.getAllTasks())
    .then((tasks: any) => {
      if(store.state.tasks){
          this.tasks = store.state.tasks?.tasks;
      }
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

  modalAction(option: string, item: Tasks) {

    //Si se oprime el botón eliminar
    if (option == "r") {
      this.msgAction = '¿Está seguro que desea eliminar la tarea [' + item.name + ']?';
      this.titleModalAction = 'Eliminar tarea';
      this.msgDeleteTask = true;
    }
    //Sino se oprimió el botón tarea realizada
    else {
      this.msgAction = '¿Está seguro que desea finalizar la tarea [' + item.name + ']?';
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

  editTask(item: Tasks) {
    this.titleModal = 'Actualizar tarea';
    this.editedIndex = this.tasks.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.showDetailTask = true;
  }

  doneTask() {
    this.tasks[this.selectedIndex].status = StatusTask.DONE;
    this.tasks[this.selectedIndex].disabledDoneTask = true;
  }

  created() {
    document.title = "Tareas";
    this.$emit("showSidebar", true);
  }
}