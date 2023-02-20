import { Component, Vue } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

import LoginComponent from '../login-view/loginView.vue';
import HeaderComponent from '@/components/headerView.vue';

@Component({
  components: {
    LoginComponent,
    HeaderComponent,
  },
})
export default class LayoutLogin extends Vue {
    isAuthenticated = false;
  
    handleLogin(credentials: { username: string; password: string }) {
      // Aquí va la lógica para iniciar sesión en la aplicación
      // Por ejemplo, puedes hacer una petición a un servidor para verificar las credenciales
      // Si las credenciales son válidas, establece isAuthenticated a true y redirige al usuario a la página principal
      // Si las credenciales son inválidas, muestra un mensaje de error en el formulario de inicio de sesión
      this.isAuthenticated = true;
      this.$router.push('/app');
    }
  
    beforeRouteEnter(to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) {
      // Si el usuario está autenticado, redirige a la página principal
      if (this.isAuthenticated) {
        next('/app');
      } else {
        next();
      }
    }
     
  }