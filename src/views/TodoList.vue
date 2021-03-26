<template>
  <section id="todolist">
    <h1>Todo List</h1>
    <div class="h1_content">
      <AddTodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
    <p class="last_updated">Last updated: 2021.03.07</p>
  </section>
</template>

<script>
import Todos from '@/components/todolist/Todos';
import AddTodo from '@/components/todolist/AddTodo';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      title: 'Todo List',
      content: 'One of the KISRE Projects'
    }
  },
  head: {
    title() {
      return {
        inner: this.title,
        separator: '|',
        complement: 'KISRE Project'
      }
    },
    meta() {
      return [
        { name: 'description', content: this.content }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(this.todos = this.todos.filter(todo => todo.id !== id))
          .catch(err => console.log(err))
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
          .then(res => this.todos = [...this.todos, res.data])
          .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.todos = res.data)
        .catch(err => console.log(err));
  }
}
</script>

<style scoped>
</style>

