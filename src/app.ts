import { defineComponent } from 'vue';
import LoginView from '@/components/login-view/loginView.vue';
import TaskView from '@/components/task-list-view/taskView.vue';
import headerView from '@/components/headerView.vue';


export default defineComponent({
    name: 'App',
    components: {
        LoginView,
        TaskView,
        headerView,
    }
});
