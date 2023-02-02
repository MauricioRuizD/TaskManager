<template>
  
  <div id="app">
    <nav class="navbar" style="background-color: #03658C;" height = 30px>
    </nav>
    <div class="spacer"></div> 
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-4"> 
          <img class="header_logo header-logo" src="https://smartsoft.com.co/wp-content/uploads/2020/10/logo-SmartSoft.png"
        alt="SmartSoft Solutions" width="200" height="48">
        </div>
        <div class="col-3"> 
        
        </div>
        <div class="col-4"> 
        <h4 style="color: #03658C; font-weight: bold" > Administrador de Tareas</h4>

        </div>
        <div class="row flex-nowrap">
          <div class="col-auto px-0" style="background-color: #F0F0F0;">
              <div id="sidebar" class="collapse collapse-horizontal ">
                  <div id="sidebar-nav" class="list-group border-10 rounded-3 text-sm-start min-vh-100">
                    <div class="row"></div>
                    
                    
                      <a href="/task" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar" style="background-color: #F0F0F0;"> <span>Tareas</span> </a>
                      <a href="/users" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar" style="background-color: #F0F0F0;"> <span>Administrador de Usuarios</span></a>
                       
                  </div>
              </div>
          </div>
          <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class=" p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></a>
            <router-view/>
            <i class="bi bi-heart"></i>
          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  height : 35px;
}

nav a {
  font-weight: bold;
  color: #ee3b0f;
}

nav a.router-link-exact-active {
  color: #03658C;
}
div.spacer
{
    font-size: 0; 
    height: 20px;
    line-height: 0;
}

</style>
