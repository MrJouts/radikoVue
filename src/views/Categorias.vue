<template>
	<div class="categorias">		
		<h2>Categorias</h2>
		<p>Estas son las catgorías con las que contamos</p>

		<table>
			<tr>
				<td>ID</td>
				<td>Categoría</td>
			</tr>

			<CategoryListRow
				v-for="categoria in categorias" 
				:categoria="categoria"
			/>

		</table>
	</div>
</template>

<script>

	import CategoryListRow from '../components/CategoryListRow.vue'

	export default {
		name: 'CategoryPage',
		components: {
			CategoryListRow
		},
		data() {
			return {
				//categorias: []
			}
		},
		computed: {
			categorias() {
				return this.$store.state.categorias;
			}
		},
		mounted() {
			this.$store.dispatch('loadCategoriesFromAPI');
		}

	}
	
</script>