<template>	
	<table class="table pedidos-table table-a">
		<thead>
			<tr>
				<th>N°</th>
				<th>Cliente</th>					
				<th class="text-center">Precio</th>
				<th class="text-center">Día de entrega</th>
				<th class="text-center">Estado</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<PedidosTableRow 
			v-for="pedido in pedidos"
			:pedido="pedido"
			:key="pedido.id_pedido"
			/>
		</tbody>
	</table>
</template>

<script>

	import PedidosTableRow from './HomePedidosTableRow.vue'

	export default {
		name: 'PedidosTable',

		components: {
			PedidosTableRow
		},

		data() {
			return {
				pedidos: []
			}
		},

		mounted() {
			fetch('http://localhost/dv/pe/radiko/api/pedidos.php?id=1')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.pedidos = data;
			});
		}
	}

</script>