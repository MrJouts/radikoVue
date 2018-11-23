<template>
	<tr>
		<td>{{ categoria.id_categoria }}</td>
		<td>{{ categoria.categoria }}</td>
	</tr>
</template>

<script>
	export default {
		name: 'CategoryListRow',
		props: {
			categoria: Object
		}
	}
</script>