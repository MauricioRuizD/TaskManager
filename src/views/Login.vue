<template>
    <div class="container">
        <div class="position-absolute top-30 start-50 translate-middle-x">
            <div class="card">
                <div class="card-body">

                    <form>
                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4">
                                <h3 >Ingreso </h3>
                            </div>
                            <p></p>
                        </div>   
                        <div class="form-group">
                            <label>Correo Electronico</label>
                            <input type="email" class="form-control form-control-lg" style=" border-color:#026993"/>
                        </div>
                        <p></p>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control form-control-lg" style=" border-color:#026993" />
                        </div>
                    <p></p><p></p>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-sm btn-action " id="ingresar">Ingresar</button>
                        </div> 
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-sm btn-action " id="ingresar">Borrar</button>
                        </div>  
                        
                    </div>
                    <div class="row">
                        <p></p>
                        <p></p>
                    </div> 
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-6">
                           <router-link to="/passrecover">Recordar contraseña</router-link>
                        </div> 
                        <div class="col-5">
                            
                            <router-link to="/register">Crear una cuenta nueva</router-link>
                            
                        </div>  
                        
                    </div>      
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
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
  font-size: large;
}
.btn-action {
  background-color: rgba(2, 105, 147, 1);
  font-size: large;
}
.label-header {
  font-size: large;
  color: rgba(2, 105, 147, 1);
  font-weight: bold;
}
</style>






<script>
    export default {
        data() {
            return {}
        }
    }
</script>