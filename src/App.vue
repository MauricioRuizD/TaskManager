<template>
  
  <div id="app">
    <nav class="navbar" style="background-color: #03658C;" height = 30px>
    </nav>
    <div class="spacer"></div> 
    <div class="container">
      <div class="row">
        <div class="col-4"> 
          <img class="header_logo header-logo" src="https://smartsoft.com.co/wp-content/uploads/2020/10/logo-SmartSoft.png"
        alt="SmartSoft Solutions" width="200" height="48">
        </div>
        <div class="col-4"> 
        
        </div>
        <div class="col-4"> 
        <h4 style="color: #03658C; font-weight: bold" > Administrador de Tareas</h4>

        </div>
        
      </div>
    </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/task">Tarea</router-link> |
      <router-link to="/base">Base</router-link> |
    
    <router-view/>
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
