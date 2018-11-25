v<template>
	<div class="user">
		<div class="user-photo">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdGlkKbVAKyIZ4nqEDssi0DZLKLCVi1m4KD92sPs8lC95-OUYBg" alt="Huerta" />
		</div>
		<div class="user-info">
			<span class="block bold">{{ huerta.nombre_huerta }}</span>
			<span>{{ huerta.razon_social }}</span>
		</div>
	</div>
</template>

<script>
	
	export default {

		data() {
			return {
				huerta: []
			}
		},

		mounted() {
			fetch('http://localhost/projects/radikoVue/api/huerta.php?id=1')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.huerta = data;
			});
		}
	}

</script>