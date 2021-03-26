<template>
  <header>
    <img alt="kisre" src="@/assets/kisrelogo.gif">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/metree">Me Tree</router-link><br>
      <router-link to="/titledscarf">Titled Scarf</router-link> |
      <router-link to="/todolist">Todo List</router-link> |
      <router-link to="/webclock">Web Clock</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  width: 100vw;
}
img {
  margin: 30px auto; /*px required*/
  width: 150px; /*px required*/
  height: 36px; /*px required*/
}
nav {
  padding: 0 3rem;
}
nav a {
  font-size: 1.7rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #01598e;
}
</style>