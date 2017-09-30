<template>
	<div class="container">
		<h1>{{texto}}</h1>

		<form v-on:submit.prevent="addUsuarios	">
		  <div class="form-group">
		    <label for="name">Nombre: </label>
		    <input type="text" v-model="usuario.name" class="form-control" id="name" placeholder="Escribe tu nombre">
		  </div>
		  <div class="form-group">
		    <label for="email">Correo Electronico</label>
		    <input type="email" v-model="usuario.email" class="form-control" id="email" placeholder="Escribe tu email">
		  </div>
		  <div class="form-group">
		    <label for="password">Contraseña</label>
		    <input type="password" v-model="usuario.password" class="form-control" id="password">
		  </div>
		  <input type="submit" class="btn btn-primary" value="Crear">
		</form>
		{{usuario.name}}
		{{usuario.email}}
		{{usuario.password}}
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		name:'usuario-add',
		data() {
			return {
				texto: 'Crea un nuevo usuario',
				usuario : {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			addUsuarios(){
				axios.post('http://localhost:8000/api/usuarios', {
					name: this.usuario.name,
					email: this.usuario.email,
					password: this.usuario.password
				})
				.then(res => {
					this.$router.push('/usuarios-lista');
				})
				.catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>
