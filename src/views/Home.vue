<template>
  <section class="home">
    <h1>Hello World—Literally</h1>
    <div class="h1_content">
      <article class="description">
        <p>This website is an ongoing showcase called <b>KISRE Project</b>, which consists of <b>several projects</b> based on KISRE's curiosities in everyday life.</p>
        <p>I am hoping this project grows enough that by looking at this site you got to know the person I am.</p>
      </article>
    </div>
    <aside class="environment">
      <p><b>Develop environment</b>:<br>
        Vue.js—JavaScript Framework<br>
        Webstorm—JavaScript IDE by JetBrains<br>
        Plug-in—Vue Router, vue-head, and vue-gtag</p>
    </aside>
    <p class="last_updated">10 years from March 2011</p>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: 'Home',
      content: 'Introduction of this website'
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

<style scoped>
.description {
  text-align: left;
  padding-bottom: 9rem;
}
.description p {
  margin-bottom: 1.5rem;
}
.environment {
  text-align: left;
  padding-right: 3rem;
  background-color: #ffffff;
  position: fixed; /*absoluteよりfixed*/
  bottom: 7.3rem; /*footerとlast_updatedのheight分*/
  width: 100vw; /*vw required*/
  height: 9rem;
}
.environment p {
  float: right;
  font-size: 1.5rem;
}
</style>