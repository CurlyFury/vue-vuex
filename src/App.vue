<template>
  <div>
    <h1>VUEX</h1>
    <hr />
    <button @click="increment">Click</button>
    <p>Clicks:{{ count }}</p>
    <ol>
      <p>Todos</p>
      <li v-for="todo in this.$store.state.todos" :key="todo.id">
        {{ todo.text }} \\\ done:{{ todo.done }}
      </li>
    </ol>
    <hr />
    <p @click="tododo">Done todos:{{ tododone }}</p>
    <hr />
    <h1>Posts</h1>
    <ul>
      <li class="nn" v-for="post in this.$store.state.posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      someData: 0,
    };
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    tododo() {
      console.log(this.$store.getters.doneTodos);
    },
  },

  computed: {
    count() {
      return this.$store.state.count;
    },
    tododone() {
      return this.$store.getters.doneTodosCount;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchDataa");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  text-align: center;
  color: #2c3e50;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li.nn {
  display: inline-block;
  list-style: none;
  width: calc(100% / 4);
  margin: 10px;
  text-align: center;
  border: 2px solid rgb(9, 150, 231);
  border-radius: 5px;
  padding: 10px 20px;
}
</style>
