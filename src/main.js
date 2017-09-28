import Vue from 'vue'
//para hacer peticiones AJAX
import axios from 'axios';
//router
import VueRouter from 'vue-router'
//componentes
import App from './App.vue'
import Home from './Home.vue'
import UserList from './UserList.vue'
import Contacto from './Contacto.vue'

//para que use VueRouter
Vue.use(VueRouter);
//para que use axios
Vue.use(axios);

//rutas
const routes = [
  { path: '/home', component: Home },
  { path: '/usuarios-lista', component: UserList },
  { path: '/contacto', component: Contacto },
  { path: '/', component: Home }
]

//creamos router
const router = new VueRouter({
	routes,
	mode: 'history'
});

Vue.component('home', Home);
Vue.component('users-list', UserList);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
