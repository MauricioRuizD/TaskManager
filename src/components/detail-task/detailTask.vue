<template>
  <div
    class="modal fade"
    id="editTask"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{{ titleModal }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="" class="needs-validation" novalidate>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col col-2">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="asignar-a"
                      >Asignar a
                    </span>
                  </div>
                  <a
                    class="btn btn-primary btn-sm btn-action dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownAsignarA"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >{{ editedItem.asignadoa }}</a
                  >

                  <ul class="dropdown-menu">
                    <li
                      v-for="(itemAsignadoa, indexAsignado) of listaAsignado"
                      :key="indexAsignado"
                    >
                      <a class="dropdown-item" @click="selectAsignadoA(itemAsignadoa)">{{
                        itemAsignadoa.name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col col-2">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="estado"
                      >Estado
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="estado-tarea"
                    aria-describedby="estado"
                    style="font-size: small; border-color: #026993"
                    v-model="editedItem.estado"
                  />
                </div>
              </div>
              <div class="col col-2">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="inicio"
                      >Inicio
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="fecha-inicio"
                    aria-describedby="inicio"
                    placeholder="dd/mm/aaaa"
                    style="font-size: small; border-color: #026993"
                    v-model="editedItem.inicio"
                    required
                    pattern="[a-zA-Z0-9]+"
                    title="Debe ingresar la fecha de la tarea"
                  />
                </div>
              </div>
              <div class="col col-2">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="tiempo-estimado"
                      >Tiempo estimado (horas)
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="horas-estimadas"
                    aria-describedby="tiempo-estimado"
                    style="font-size: small; border-color: #026993"
                    v-model="editedItem.horasestimadas"
                  />
                </div>
              </div>
            </div>
            <div class="row row-cols-4">
              <div class="col col-4">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="nombre-tarea"
                      >Nombre
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    aria-describedby="nombre-tarea"
                    style="font-size: small; border-color: #026993"
                    v-model="editedItem.nombre"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col col-12">
                <div class="input-group input-group-sm mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="detalle-tarea"
                      >Detalle
                    </span>
                  </div>
                  <textarea
                    type="text"
                    class="form-control"
                    rows="6"
                    id="detalle"
                    aria-describedby="detalle-tarea"
                    style="font-size: small; border-color: #026993"
                    v-model="editedItem.detalle"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row row-cols-2">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text group-label-text" id="prioridad"
                      >Prioridad
                    </span>
                  </div>
                  <a
                    class="btn btn-primary btn-sm btn-action dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownPrioridad"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >{{ editedItem.prioridad }}</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="dropdownPrioridad">
                    <li
                      v-for="(itemPrioridad, indexPrioridad) of listaPrioridad"
                      :key="indexPrioridad"
                    >
                      <a class="dropdown-item" @click="selectPrioridad(itemPrioridad)">{{
                        itemPrioridad.name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="close()"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="saveTask()"
                data-bs-dismiss="modal"
              >
                Guadar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./detailTask.ts"></script>
