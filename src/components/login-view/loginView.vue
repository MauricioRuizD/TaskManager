<template>
<div>
    <headerView />
    <div class="position-absolute top-30 start-50 translate-middle-x">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4">
                            <h3>Ingreso </h3>
                        </div>
                        <p></p>
                    </div>
                    <div class="form-group">
                        <label>Correo Electronico</label>
                        <input type="email" class="form-control form-control-lg" style=" border-color:#026993" />
                    </div>
                    <p></p>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control form-control-lg" style=" border-color:#026993" />
                    </div>
                    <p></p>
                    <p></p>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-sm btn-action " id="ingresar" >Ingresar</button>
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

<script lang="ts" src="./loginView.ts"></script>
<style lang="css" scoped src="./loginView.css"></style>
