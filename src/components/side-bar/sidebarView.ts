import { Component, Vue } from 'vue-property-decorator';

import headerView from '@/components/headerView.vue';

@Component({
  components: {
    headerView,
  },
})
export default class sidebarView extends Vue {

  public showSidebar = false

  data() {
    return {
      showSidebar: true,
    };
  }
}