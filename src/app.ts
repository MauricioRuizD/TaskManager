import { defineComponent } from 'vue';
import LoginView from './views/LoginView.vue'
import TaskView from '@/components/task-list-view/taskView.vue'

export default defineComponent({
    name: 'App',
    components: {
        LoginView,
        TaskView,
    }
});
