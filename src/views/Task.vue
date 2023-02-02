<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-task">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
          </div>
          <input type="text" class="form-control" id="basic-url" aria-describedby="search-task" placeholder="Buscar tarea" style="font-size:small">
        </div>
      </div>      
    </div>
  
    <div style="padding: 24px 24px 24px 24px;border: 1px solid #026993; background-color: #F0F0F0;">
      <div class="row justify-content-start">
        <div class="col-3 p-1">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text group-label-text" id="search-estado">Estado
              </span>
            </div>
            <select class="form-select" size="3" id="dropdownEstado" aria-describedby="search-estado" multiple style="font-size:small; border-color:#026993">
              <option selected value="opened">Abierta</option>
              <option value="closed">Cerrada</option>
              <option value="deleted">Eliminada</option>
            </select>

          </div>
        </div>

        <div class="col-1">
        </div> 
        <div class="col-3">
          <div class="input-group mb-5">
            <div class="input-group-prepend">
              <span class="input-group-text group-label-text" id="search-inicio">Inicio
              </span>
            </div>
            <input type="text" class="form-control" id="fecha-inicio" aria-describedby="search-inicio" placeholder="dd/mm/aaaa" style="font-size:small; border-color:#026993">
          </div>
        </div>

        <div class="col-3">
          <div class="input-group mb-5">
            <div class="input-group-prepend">
              <span class="input-group-text group-label-text" id="search-hasta">Hasta
              </span>
            </div>
            <input type="text" class="form-control" id="fecha-fin" aria-describedby="search-hasta" placeholder="dd/mm/aaaa" style="font-size:small; border-color:#026993">
          </div>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-primary btn-sm btn-action" id="btn-filtrar">Filtrar</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-end" style="padding: 24px 0px 24px 24px;">
      <div class="col-2 align-self-end">
        <button type="button" class="btn btn-primary btn-sm btn-action" id="btn-new-task" data-bs-toggle="modal" data-bs-target="#editTask" @click="titleModal='Nueva tarea'">Nueva tarea</button>
      </div>  
    </div>

    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th class="label-header" scope="col">ID</th>
            <th class="label-header" scope="col">Inicio</th>
            <th class="label-header" scope="col">Prioridad</th>
            <th class="label-header" scope="col">Tarea</th>
            <th class="label-header" scope="col">Horas estimadas</th>
            <th class="label-header" scope="col">Asignado a</th>
            <th class="label-header" scope="col">Estado</th>
            <th class="label-header" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) of items" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.inicio }}</td>
            <td>{{ item.prioridad }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.horasestimadas }}</td>
            <td>{{ item.asignadoa }}</td>
            <td>{{ item.estado }}</td>
            <td>
              <button type="button" class="btn btn-update-data" data-bs-toggle="modal" data-bs-target="#editTask" @click="editTask(item, index)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </button>
              <span style="padding: 0px 8px 0px 0px;"></span>
              <button type="button" class="btn btn-done-data" @click="doneTask(index)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
              </button>
              <span style="padding: 0px 8px 0px 0px;"></span>
              <button type="button" class="btn btn-remove-data">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button>
            </td>          
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <template>
        <div class="modal fade" id="editTask" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">{{ titleModal }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                  <div class="col col-2">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="asignar-a">Asignar a
                        </span>
                      </div>
                      <a class="btn btn-primary btn-sm btn-action dropdown-toggle" href="#" role="button" id="dropdownAsignarA" data-bs-toggle="dropdown" aria-expanded="false">{{ selectedItem.asignadoa }}</a>
                      <ul class="dropdown-menu" aria-labelledby="asignar-a">
                        <li v-for="(itemAsignadoa, indexAsignado) of listaAsignado" :key="indexAsignado"><a class="dropdown-item" @click="selectAsignadoA(itemAsignadoa)">{{ itemAsignadoa.name }}</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col col-2">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="estado">Estado
                        </span>
                      </div>
                      <input type="text" class="form-control" id="estado-tarea" aria-describedby="estado" style="font-size:small; border-color:#026993" v-model="selectedItem.estado">
                    </div>
                  </div>
                  <div class="col col-2">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="inicio">Inicio
                        </span>
                      </div>
                      <input type="text" class="form-control" id="fecha-inicio" aria-describedby="inicio" placeholder="dd/mm/aaaa" style="font-size:small; border-color:#026993" v-model="selectedItem.inicio">
                    </div>
                  </div>
                  <div class="col col-2">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="tiempo-estimado">Tiempo estimado (horas)
                        </span>
                      </div>
                      <input type="text" class="form-control" id="horas-estimadas" aria-describedby="tiempo-estimado" placeholder="dd/mm/aaaa" style="font-size:small; border-color:#026993" v-model="selectedItem.horasestimadas">
                    </div>
                  </div>
                </div>
                <div class="row row-cols-4">
                  <div class="col col-4">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="nombre-tarea">Nombre
                        </span>
                      </div>
                      <input type="text" class="form-control" id="nombre" aria-describedby="nombre-tarea" style="font-size:small; border-color:#026993" v-model="selectedItem.nombre">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col col-12">
                    <div class="input-group input-group-sm mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="detalle-tarea">Detalle
                        </span>
                      </div>
                      <textarea type="text" class="form-control" rows="6" id="detalle" aria-describedby="detalle-tarea" style="font-size:small; border-color:#026993" v-model="selectedItem.detalle"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-2">
                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text group-label-text" id="prioridad">Prioridad
                        </span>
                      </div>
                      <a class="btn btn-primary btn-sm btn-action dropdown-toggle" href="#" role="button" id="dropdownPrioridad" data-bs-toggle="dropdown" aria-expanded="false">{{ selectedItem.prioridad }}</a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownPrioridad">
                        <li v-for="(itemPrioridad, indexPrioridad) of listaPrioridad" :key="indexPrioridad"><a class="dropdown-item" @click="selectPrioridad(itemPrioridad)">{{ itemPrioridad.name }}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" @click="saveTask()" data-bs-dismiss="modal">Guadar</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
    name: "Task",

  data () {
    return {
      titleModal: 'Nueva tarea',
      indexSelected: 0,
      selectedItem: {
        id: '4',
        inicio: '01/02/2023',
        prioridad: 'Normal',
        nombre: '',
        detalle: '',
        horasestimadas: 0,
        asignadoa: '',
        asignadoaId: 0,
        estado: 'abierta',
      },
      items: [
        {
          id: '1',
          inicio: '01/01/2020',
          prioridad: 'alta',
          nombre: 'Crear una tarea 1',
          detalle: 'Este es el detalle de la tarea 1',
          horasestimadas: 12,
          asignadoa: 'Felipe XXXXXX',
          asignadoaId: 1000,
          estado: 'abierta',
        },
        {
          id: '2',
          inicio: '01/02/2021',
          prioridad: 'normal',
          nombre: 'Crear una tarea 2',
          detalle: 'Este es el detalle de la tarea 2',
          horasestimadas: 9,
          asignadoa: 'Felipe YYYYYY',
          asignadoaId: 2000,
          estado: 'abierta',
        },
        {
          id: '3',
          inicio: '01/03/2022',
          prioridad: 'normal',
          nombre: 'Crear una tarea 3',
          detalle: 'Este es el detalle de la tarea 3',
          horasestimadas: 5,
          asignadoa: 'Felipe ZZZZZ',
          asignadoaId: 3000,
          estado: 'abierta',
        }
      ],

      listaAsignado: [
        {
          id: '1000',
          name: 'Felipe XXXXXX'
        },
        {
          id: '2000',
          name: 'Felipe YYYYYY'
        },
        {
          id: '3000',
          name: 'Felipe ZZZZZ'
        }
      ],

      listaPrioridad: [
        {
          id: 'alta',
          name: 'alta'
        },
        {
          id: 'normal',
          name: 'normal'
        },
        {
          id: 'baja',
          name: 'baja'
        }
      ],

    }
  },

  created () {
    this.newTask()
  },

  methods: {

    newTask () {
      this.titleModal = 'Nueva tarea',
      this.indexSelected = 0,
      this.selectedItem.id = 0,
      this.selectedItem.inicio = '',
      this.selectedItem.prioridad = '',
      this.selectedItem.nombre = '',
      this.selectedItem.detalle = '',
      this.selectedItem.horasestimadas = '',
      this.selectedItem.asignadoa = '',
      this.selectedItem.asignadoaId = '',
      this.selectedItem.estado = 'abierta'
    },

    editTask(item, index) {
      this.titleModal = 'Editar tarea'
      this.indexSelected = index
      this.selectedItem.id = item.id,
      this.selectedItem.inicio = item.inicio,
      this.selectedItem.prioridad = item.prioridad,
      this.selectedItem.nombre = item.nombre,
      this.selectedItem.detalle = item.detalle,
      this.selectedItem.horasestimadas = item.horasestimadas,
      this.selectedItem.asignadoa = item.asignadoa,
      this.selectedItem.asignadoaId = item.asignadoaId,
      this.selectedItem.estado = item.estado
    },

    selectPrioridad(prioridad) {
        this.selectedItem.prioridad = prioridad.name;
    },

    selectAsignadoA(asignado) {
        this.selectedItem.asignadoa = asignado.name;
        this.selectedItem.asignadoaId = asignado.id;
    },

    saveTask() {
      
      console.log(this.indexSelected)

      this.items[this.indexSelected] = this.selectedItem
      
    },

    doneTask(index) {
      this.selectedItem.estado = 'cerrada'
      this.indexSelected = index

      this.items[index].estado = this.selectedItem.estado
    },

  }
}
</script>

<style>

.btn-update-data {
  background-color: white;
  border-color: rgb(32, 8, 245);
  border-radius: 10px;
  border-width: 2px;
}

.btn-update-data:focus {
  box-shadow: 0 0 0 0.2rem rgb(66, 156, 251);
}

.btn-update-data:hover {
  background-color: rgb(66, 156, 251);
  color: white;
}

.btn-done-data {
  background-color: white;
  border-color: rgb(147, 234, 204);
  border-radius: 10px;
  border-width: 2px;
}

.btn-done-data:focus {
  box-shadow: 0 0 0 0.2rem rgb(147, 234, 204);
}

.btn-done-data:hover {
  background-color: rgb(147, 234, 204);
  color: white;
}

.btn-remove-data {
  background-color: white;
  border-color: rgb(234, 147, 159);
  border-radius: 10px;
  border-width: 2px;
}

.btn-remove-data:focus {
  box-shadow: 0 0 0 0.2rem rgb(234, 147, 159);
}

.btn-remove-data:hover {
  background-color: rgb(234, 147, 159);
  color: white;
}

.group-label-text {
  background-color: transparent;
  border: 0px;
  color: rgba(2, 105, 147, 1);
  font-size: small;
}

.btn-action {
  background-color: rgba(2, 105, 147, 1);
  font-size: small;
}

.label-header {
  font-size: small;
  color: rgba(2, 105, 147, 1);
  font-weight: bold;
}

</style>
