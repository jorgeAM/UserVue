<template>
	<div>
		<h1>{{ msg }} numero {{$route.params.id}}</h1>
		<div id="usuario-detail" v-if="usuario != null">
			<p>{{usuario.id}}</p>
			<p>{{usuario.name}}</p>
			<p>{{usuario.email}}</p>
		</div>
		<div v-else>
			<span>Cargando usuario...</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'usuario',
  mounted(){
  	//this.getUsuario()
  	this.id = this.$route.params.id
  		axios.get('http://localhost:8000/api/usuarios/'+this.id)
  			.then(res => {
					this.usuario = res.data.usuario;
				})
				.catch(err => {
					console.log(err)
			});
  },
  data () {
    return {
    	id: null,
    	usuario: null,
      msg: 'Detalle del Usuario'
    }
  },
  methods: {
  	getUsuario(){
  		this.id = this.$route.params.id
  		axios.get('http://localhost:8000/api/usuarios/'+this.id)
  			.then(res => {
					this.usuario = res.data.usuario;
				})
				.catch(err => {
					console.log(err)
			});
  	}
  }
}
</script>	
