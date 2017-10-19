import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({ 	
	state: {
	      users: [
	        {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11' },
	        {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01' },
	        {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09' },
	        {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21' },
	        {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13' },
	        {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30' },
	        {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19' },
	        {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17' },
	        {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04' },
	        {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05' },
	        {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16' },
	        {name: 'sam john', age: 24, status: 0, created_at: '2017-04-01' },
	        {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08' }
	      ]
	    },
	actions: {
	      ADD_USER: function({ commit }, new_user) {
	        commit("ADD_USER_MUTATION", new_user);
	      },
	      DELETE_USER: function({ commit }, user_id) {
	        commit("DELETE_USER_MUTATION", user_id);
	      }
	    },

	mutations: {
	      ADD_USER_MUTATION: function(state, new_user) {
	        state.users.push(new_user);
	      },
	      DELETE_USER_MUTATION: function(state, user_id) {
	        state.users.splice(user_id,1);
	      }
	    },

	getters: {
	      users: state => {
	       return state.users; 
	      }
	    }
});
export default store;
