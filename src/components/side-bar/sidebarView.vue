<template>
  <div>
   <headerView />

    <div class="row flex-nowrap" v-show="showSidebar">
      <div class="col-auto px-0" style="background-color: #f0f0f0">
        <div id="sidebar" class="collapse collapse-horizontal">
          <div
            id="sidebar-nav"
            class="list-group border-10 rounded-3 text-sm-start min-vh-100"
          >
            <div class="row"></div>
            <a
              class="list-group-item border-end-0 d-inline-block text-truncate"
              data-bs-parent="#sidebar"
              style="background-color: #f0f0f0"
            ><router-link to="/app/task">Tareas</router-link>
            </a>
            <a
              href="./components/UsersView.vue"
              class="list-group-item border-end-0 d-inline-block text-truncate"
              data-bs-parent="#sidebar"
              style="background-color: #f0f0f0"
            >
              <span>Administrador de Usuarios</span></a
            >
          </div>
        </div>
      </div>
      <main class="col ps-md-2 pt-2">
        <a
          href="#"
          data-bs-target="#sidebar"
          data-bs-toggle="collapse"
          class="p-1 text-decoration-none"
          ><i class="bi bi-list bi-lg py-2 p-1"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            /></svg
        ></a>

        <i class="bi bi-heart"></i>
      </main>
    </div>
    <div class="content">
      <router-view @showSidebar="showSidebar = $event"></router-view>
    </div>
  </div>
</template>

<script lang="ts" src="./sidebarView.ts"></script>