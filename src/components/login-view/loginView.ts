import { Component, Vue, Emit } from 'vue-property-decorator';

import headerView from '@/components/headerView.vue';


@Component({
  components: {
    headerView,
  },
})
  
export default class loginView extends Vue {

  constructor() {
    super();
  }

  username = '';
  password = '';

  @Emit('login') // Emite un evento 'login' con el nombre de usuario y contraseña
  handleSubmit() {
    return { username: this.username, password: this.password };
  }

}