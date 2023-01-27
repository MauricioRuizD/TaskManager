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
          <input type="text" class="form-control" id="basic-url" aria-describedby="search-task" placeholder="Buscar tarea">
        </div>
      </div>      
    </div>
  
    <div style="padding: 24px 24px 24px 24px;border: 3px solid gray; ">
      <div class="row justify-content-start">
        <div class="col-3 p-1">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-estado">Estado
              </span>
            </div>
            <select class="form-select" size="3" id="dropdownEstado" aria-describedby="search-estado" multiple>
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
              <span class="input-group-text" id="search-inicio">Inicio
              </span>
            </div>
            <input type="text" class="form-control" id="fecha-inicio" aria-describedby="search-inicio" placeholder="dd/mm/aaaa">
          </div>
        </div>

        <div class="col-3">
          <div class="input-group mb-5">
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-hasta">Hasta
              </span>
            </div>
            <input type="text" class="form-control" id="fecha-fin" aria-describedby="search-hasta" placeholder="dd/mm/aaaa">
          </div>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-primary btn-sm" id="btn-filtrar">Filtrar</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-end" style="padding: 24px 0px 24px 24px;">
      <div class="col-2 align-self-end">
        <button type="button" class="btn btn-primary btn-sm" id="btn-new-task">Nueva tarea</button>
      </div>  
    </div>  
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Inicio</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Tarea</th>
            <th scope="col">Horas estimadas</th>
            <th scope="col">Asignado a</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
            </td>          
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            </td>          
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12/01/2020</td>
            <td>Alta</td>
            <td>Crear una tarea</td>
            <td>12</td>
            <td>Felipe Cruz</td>
            <td>Abierta</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
