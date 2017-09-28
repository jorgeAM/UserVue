<template>
	<div>
		<div v-if="usuarios != null">
			<h2>{{texto}}</h2>
				<li v-for="usuario in usuarios">
					{{ usuario.name }}
				</li>
		</div>
		<div v-if="usuarios == null">
			<h2>NO HAY DATOS</h2>
			<p>{{usuarios}}</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		name:'users-list',
		mountend(){
			this.getUsuarios();
			console.log(this.usuarios);
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
					console.log('ajax')
					console.log(res.usuarios)
					this.usuarios = res.data.usuarios	;
				})
				.catch(err => {
					console.log(err)
				});
			}
		}
	}
</script>