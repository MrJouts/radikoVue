<template>
	<div class="container productos">
		<h2>Listado de productos</h2>

		<table class="productos-listado">
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Marca</th>
				<th>Categoría</th>
				<th>Acciones</th>
			</tr>

			<ProductListRow
			v-for="producto in productosDescendentes"
			:producto="producto"
			/>

		</table>
	</div>

</template>

<script>

	import ProductListRow from '../components/ProductListRow.vue'

	export default {
		name: 'ProductsPage',

		components: {
			ProductListRow
		},

		data() {
			return {
				productos: []
			}
		},

		computed: {
			productosDescendentes() {
				// return this.productos.reverse();
				return this.$store.state.productos.reverse();
			}
		},

		mounted() {
			this.$store.dispatch('loadProductsFromAPI');
		}
	}



</script>

<style>

.container {
	width: 1200px;
	margin: auto;	
	text-align: center;
}

table {
	margin: auto;
	border: 1px solid #ccc;
	border-collapse: collapse;
}

td, th {
	border: 1px solid #ddd;
	padding: 1rem 1.5rem;
}

</style>