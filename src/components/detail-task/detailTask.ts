import { Component, Prop, Vue } from "vue-property-decorator";
import { task } from "@/models/interfaces/task";

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
  @Prop() readonly items!: task[];
  @Prop() readonly editedItem!: task;
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
    this.editedItem.prioridad = prioridad.name;
  }

  selectAsignadoA(asignado: AsignadoA) {
    this.editedItem.asignadoa = asignado.name;
    this.editedItem.asignadoaId = asignado.id;
  }
}