<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}<button v-on:click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 1rem;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
p {
  position: relative;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
</style>