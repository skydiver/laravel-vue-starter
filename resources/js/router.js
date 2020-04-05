import Vue from 'vue';
import VueRouter from 'vue-router';
import DemoComponent from './components/DemoComponent';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: DemoComponent,
      meta: { title: 'Demo Component' }
    }
  ],
  mode: 'history'
});
