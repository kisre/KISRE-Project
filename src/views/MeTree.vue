<template>
  <section>
    <h1>Me Tree</h1>
    <nav>
      <router-link to="/moving">Moving</router-link> |
      <router-link to="/learning">Learning</router-link> |
      <router-link to="/qualification">Qualification</router-link> |
      <router-link to="/jobexperience">Job Experience</router-link>
    </nav>
    <div class="h1_content">
      <router-view :key="$route.path" />
    </div>
    <p class="last_updated">Last updated: 2021.03.21</p>
  </section>
</template>

<script>
export default {
  name: "MeTree",
  data() {
    return {
      title: 'Me Tree',
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
  }
}
</script>

<style>
nav {
  padding: 0 3rem;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #01598e;
}

.head_foot {
  margin: 1rem;
}
table {
  width: 100%; /*% required*/
}
tr {
  display: flex;
  justify-content: center;
}
td {
  padding-bottom: 1rem;
  width: 50%; /*% required*/
}
.year {
  text-align: right;
  padding-right: 1rem;
  border-right: solid 2px #222222;
  line-height: 1.8rem;
}
.event {
  text-align: left;
  padding-left: 1rem;
  font-size: 1.4rem;
  line-height: 2rem;
}
</style>