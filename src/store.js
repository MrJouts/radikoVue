import Vue from 'vue';
import Vuex from 'vuex';

// Le indicamos a Vue que vamos a trabajar con Vuex.
Vue.use(Vuex);

// Creamos nuestro nuevo Vuex.Store
export default new Vuex.Store({
	// En state definimos, adivinen, sí, el state! :D
	state: {
		productos: [],
		loading: false,
		session: {
			loading: false,
			auth: false,
			user: {
				nombre: null,
				email: null
			},
			status: {
				message: null
			}
		}
	},
	mutations: {
		/** 
		 * Setea los productos al state.
		 *
		 * Toda mutación recibe como primer parámetro, el
		 * state actual.
		 * Opcionalmente, podemos pedir un segundo 
		 * parámetro (lo que llamamos el payload), que
		 * lleva los datos que queremos asignar al state.
		 */
		setProductos(state, nuevosProductos) {
			state.productos = nuevosProductos;
		},
		setLoadingOff(state) {
			state.loading = false;
		},
		setLoadingOn(state) {
			state.loading = true;
		},
		setSessionLoadingOff(state) {
			state.session.loading = false;
		},
		setSessionLoadingOn(state) {
			state.session.loading = true;
		},
		setSessionAuth(state, userData) {
			state.session.auth = true;
			state.session.user.nombre = userData.nombre;
			state.session.user.email = userData.email;
		},
		setSessionLogout(state) {
			state.session.auth = false;
		}
	},
	actions: {
		// Definimos las acciones.
		/**
		 * Carga los productos desde la API vía Ajax.
		 *
		 * Toda acción, recibe por parámetro un objeto con
		 * el "contexto".
		 * Ese contexto, tiene entre otras cosas, el state.
		 * Pero, más importante aún, es que tiene acceso
		 * al método "commit". Lo que permite ejecutar
		 * alguna mutación.
		 */
		loadProductsFromAPI(context) {
			// Commiteamos que se setee el estado de carga.
			context.commit('setLoadingOn');

			// Realizamos la petición de Ajax.
			fetch('http://localhost/dv/pe/clase10/api/productos.php')
				.then(respuesta => respuesta.json())
				.then(data => {
					console.log("Data: ", data);
					// this.productos = data;
					// Llamamos a la mutación para asignar
					// los productos.
					// commit recibe entre 1 y 2 parámetros.
					// 1. string. El nombre de la mutación.
					// 2. cualquierCosa. La carga/payload
					//  para la mutación.
					context.commit('setProductos', data);

					// Desactivamos el estado de carga.
					context.commit('setLoadingOff');
				});
		},
		login(context, userData) {
			// Seteamos el estado de carga.
			context.commit('setSessionLoadingOn');
			fetch('http://localhost/dv/pe/clase10/api/login.php', {
				method: 'post',
				body: JSON.stringify(userData)
			})
			.then(response => response.json())
			.then(data => {
				console.log("Datos del login: ", data);
				if(data.status == 1) {
					context.commit('setSessionAuth', {
						nombre: data.data.nombre,
						email: data.data.email
					});
				}
				context.commit('setSessionLoadingOff');		  

			});
		}
	}
})
