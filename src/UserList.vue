<template>
	<div>
		<ul id="usuarios-list" v-if="usuarios != null">
			<li v-for="usuario in usuarios">
				<strong>{{usuario.name}}</strong>
				<p>
					<router-link class="btn btn-success" :to="{name: 'usuario', params: { id: usuario.id }}">Ver</router-link>
					<router-link class="btn btn-warning" :to="{name: 'editar-usuario', params: { id: usuario.id }}">Editar</router-link>
				</p>
			</li>
		</ul>
		<span v-else>Cargando Usuarios...</span>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		name:'users-list',
		mounted(){
			this.getUsuarios();
		},
		data() {
			return {
				texto: 'Este es mi componente UserList',
				usuarios : null
			}
		},
		methods: {
			getUsuarios(){
				axios.get('http://localhost:8000/api/usuarios')
				.then(res => {
					this.usuarios = res.data.usuarios;
				})
				.catch(err => {
					console.log(err)
				});
			}
		}
	}
</script>

<style lang="scss">
	#usuarios-list{
		padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding: 20px;
			overflow: hidden;
		}
	}
</style>