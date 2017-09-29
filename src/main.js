import Vue from 'vue'
//peticiones AJAX
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//router
import VueRouter from 'vue-router'
//componentes
import App from './App.vue'
import Home from './Home.vue'
import User from './Usuario.vue'
import UserList from './UserList.vue'
import Contacto from './Contacto.vue'

//para que use VueRouter
Vue.use(VueRouter);
//para que use axios
//Vue.use(VueAxios, axios)

//rutas
const routes = [
  { path: '/home', component: Home },
  { path: '/usuarios-lista', component: UserList },
  { path: '/usuario/:id', name: 'usuario', component: User },
  { path: '/editar-usuario/:id', name: 'editar-usuario', component: Home },
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
