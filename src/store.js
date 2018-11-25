import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pedidos: [],
		productos: []
	},

	mutations: {
		setPedidos(state, newPedido) {
			state.pedidos = newPedido
		},
		setProducts(state, newProduct) {
			state.productos = newProduct
		}
	},

	actions: {
		loadPedidos(context) {
			fetch('http://localhost/projects/radikoVue/api/pedidos.php?id=1')
			.then(response => response.json())
			.then(data => {
				context.commit('setPedidos', data);
			});
		},

		loadProducts(context) {
			fetch('http://localhost/projects/radikoVue/api/productos.php')
			.then(response => response.json())
			.then(data => {
				context.commit('setProducts', data);
			});
		},

	}
})