<template>
	<tr>
		<td>{{ producto.id_producto }}</td>
		<td>{{ producto.nombre }}</td>
		<td>{{ producto.id_marca }}</td>
		<td>{{ producto.id_categoria }}</td>
		<td><router-link :to="'/productos/' + producto.id_producto">Ver</router-link></td>
	</tr>
</template>

<script>
export default {
	name: 'ProductListRow',
	props: {
		producto: Object
	}
}
</script>