<template>
  <section class="about">
    <h1>KISRE Project</h1>
    <div class="h1_content">
      <article>
        <h2>Me Tree</h2>
        <p>Introduce an author of this site using the Today−Birth tree.<br>
        <span class="first_updated">First updated: 2021.03.21</span></p>
      </article>
      <article>
        <h2>Titled Scarf</h2>
        <p>The scarves are all handmade and have unique titles. Since 2009.<br>
        <span class="first_updated">First updated: 2021.03.07</span></p>
      </article>
      <article>
        <h2>Todo List</h2>
        <p>I found this tutor in the following URL of Youtube is so helpful for my learning Vue.js and JavaScript.<br>
          This app is a some-changed version of <cite>https://youtu.be/Wy9q22isx3U</cite>.<br>
        <span class="first_updated">First updated: 2021.03.07</span></p>
      </article>
      <article>
        <h2>Web Clock</h2>
        <p>Somehow analog clocks attracts my attention. It may be because their system which go from 12 to 1 showing future time.<br>
          List of words;<br>
          年—year, 月—month, 日—day, and inside brackets showing one of the following:<br>
          日—Sunday, 月—Monday, 火—Tuesday, 水—Wednesday, 木—Thursday, 金—Friday, and 土—Saturday.<br>
        <span class="first_updated">First updated: 2021.03.07</span></p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: 'About',
      content: 'Table of KISRE Projects'
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
article {
  text-align: left;
}
p {
  margin-bottom: 2rem;
}
.first_updated {
  font-size: 1.2rem;
  float: right;
}
</style>
