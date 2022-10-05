import { createStore } from 'vuex';

const store = createStore({
	state: {
		isLogged: false,
	},
	getters: {},
	mutations: {
		login(state) {
			state.isLogged = true;
		},

		logout(state) {
			state.isLogged = false;
		},
	},
	actions: {},
	modules: {},
});

export default store;
