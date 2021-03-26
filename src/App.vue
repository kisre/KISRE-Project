<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/views/Header";
import Footer from "@/views/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
}
#app {
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding-bottom: 7rem; /*footerのheight分*/
  display: flex;
  flex-direction: column;
}
a:hover {
  opacity:0.6;
}
h1 {
  width: 100vw;
  white-space: nowrap;
  font-size: 2.3rem;
  font-weight: bold;
  background: #3e3e3e;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0 3rem;
}
h2 {
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1.4;
}
.h1_content {
  width: 100vw;
  height: 100%;
  padding: 0 3rem 0;
}
.last_updated {
  font-size: 1.3rem;
  text-align: right;
  padding-right: 3rem;
  background-color: #ffffff;
  position: fixed; /*absoluteよりfixed*/
  bottom: 5rem; /*footerのheight分*/
  width: 100vw; /*vw required*/
  height: 2.3rem;
}
</style>
