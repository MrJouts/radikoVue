import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		productos: [],
		categorias: []
	},
	mutations: {
		setProductos(state, nuevosProductos) {
			state.productos = nuevosProductos;
		},
		setCategorias(state, nuevasCategorias) {
			state.categorias = nuevasCategorias;
		},
		setMarcas(state, nuevasMarcas) {
			state.marcas = nuevasMarcas;
		}
	},
	actions: {
		loadProductsFromAPI(context) {	
			fetch('http://localhost/dv/pe/api/productos.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				context.commit('setProductos', data)
			});	
		},
		loadCategoriesFromAPI(context) {
			fetch('http://localhost/dv/pe/api/categorias.php')
			.then(response => response.json())
			.then(data => {
				context.commit('setCategorias', data)
			})
		},
		loadMarcasFromAPI(context) {
			fetch('http://localhost/dv/pe/api/marcas.php')
			.then(response => response.json())
			.then(data => {
				context.commit('setMarcas', data)
			})
		}
	}
})