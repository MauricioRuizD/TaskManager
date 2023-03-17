import { Component, Prop, Vue } from "vue-property-decorator";
import { Tasks } from "@/models/interfaces/tasks";
//import { StatusTask, PriorityTask } from './../../enums';

interface Prioridad {
  id: number;
  name: string;
}

interface AsignadoA {
  id: number;
    name: string;
}

@Component({
  name: 'detailTask',
})

export default class detailTask extends Vue {

  @Prop() readonly titleModal!: string;
  @Prop() readonly show!: boolean;
  @Prop() readonly items!: Tasks[];
  @Prop() readonly editedItem!: Tasks;
  @Prop() readonly editedIndex!: number;

  public listaPrioridad: Prioridad[] = [];
  public listaAsignado: AsignadoA[] = [];

  constructor(){
    super();

    this.listaPrioridad.push(
      {
        id: 1,
        name: 'alta'
      },
      {
        id: 2,
        name: 'normal'
      },
      {
        id: 3,
        name: 'baja'
      },
    ),
    this.listaAsignado.push(
      {
        id: 1,
        name: 'PRIMERO'
      },
      {
        id: 2,
        name: 'SEGUNDO'
      },
      {
        id: 3,
        name: 'TERCERO'
      },
    )
  }

  saveTask() {
    if (this.editedIndex === -1) {
      this.items.push(this.editedItem);
      this.close();
    } else {
      console.log(this.editedIndex);
      this.items[this.editedIndex] = Object.assign({}, this.editedItem);
    }
    this.close();
  }
  
  close() {
    this.$emit("close");
  }
  
  selectPrioridad(prioridad: Prioridad) {
    //this.editedItem.priority = prioridad.name;
  }

  selectAsignadoA(asignado: AsignadoA) {
    //this.editedItem.asignadoa = asignado.name;
    //this.editedItem.asignadoaId = asignado.id;
  }

  get fecha(): string {
    return this.editedItem.start.toISOString().slice(0, 10).replace(/-/g, '/');
  }

}