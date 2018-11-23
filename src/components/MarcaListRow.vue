<template>
	<tr>
		<td>{{ marca.id_marca }}</td>
		<td>{{ marca.marca }}</td>
	</tr>	
</template>

<script>
	export default {
		name: 'MarcaListRow',
		props: {
			marca: Object
		}
	}
</script>