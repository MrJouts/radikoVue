<template>
	<div class="marcas">
		<h2>Marcas</h2>
		<p>Les presentamos las marcas más conocidas</p>

		<table>
			<tr>
				<th>ID</th>
				<th>Marca</th>
			</tr>

			<MarcaListRow 
				v-for="marca in marcas"
				:marca="marca"
			/>
		</table>
	</div>
</template>

<script>
	import MarcaListRow from '../components/MarcaListRow.vue'

	export default {
		name: 'MarcaPage',
		components: {
			MarcaListRow
		},
		computed: {
			marcas() {
				return this.$store.state.marcas;
			}
		},
		mounted() {
			this.$store.dispatch('loadMarcasFromAPI')
		}
	}
</script>

<style>

</style>