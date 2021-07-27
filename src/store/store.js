
import { createStore } from 'vuex'

import modulA from './modules/modulA'

const store = createStore({
	state() {
		return {
			count: 0,
			todos: [
				{ id: 1, text: 'walk', done: false },
				{ id: 2, text: 'learn code', done: true },
				{ id: 3, text: 'fix TV', done: true },
				{ id: 4, text: 'move chair', done: false },
				{ id: 5, text: 'see UFO', done: true },
			],
			posts: [
				{ id: 1, title: 'elena', body: 'lorem' },
				{ id: 2, title: 'dan', body: 'lorem' }
			],
		}
	},
	mutations: {
		increment(state) {
			state.count++
		},
		updatePosts(state, posts) {
			state.posts = posts
		}
	},
	getters: {
		doneTodos(state) {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount(state, getters) {
			return getters.doneTodos.length
		},
	},
	actions: {
		async fetchDataa(context) {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
			const posts = await response.json()
			context.commit('updatePosts', posts)
		}
	},
	modules: {
		a: modulA
	}
})

export default store