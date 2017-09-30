<template>
	<div class="container">
		<h1>{{texto}}</h1>

		<form v-on:submit.prevent="updateUsuarios	">
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
		name:'usuario-edit',
		mounted(){
			//conseguimos el usuario
			this.id = this.$route.params.id
  		axios.get('http://localhost:8000/api/usuarios/'+this.id)
  			.then(res => {
					this.usuario = res.data.usuario;
				})
				.catch(err => {
					console.log(err)
			});

		},
		data() {
			return {
				texto: 'Edita el usuario',
				usuario : {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			updateUsuarios(){
				let id = this.id;
				axios.put('http://localhost:8000/api/usuarios/'+id, {
					name: this.usuario.name,
					email: this.usuario.email,
					password: this.usuario.password
				})
				.then(res => {
					this.$router.push('/usuario/'+id);
				})
				.catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>
