<template>
  <footer>
    <img alt="kisre-favicon" src="@/assets/kisre_icon-24x24.png"><address>infokisre@gmail.com</address>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    date: String
  }
}
</script>

<style scoped>
footer {
  position: fixed; /*absoluteよりfixed*/
  bottom: 0;
  width: 100vw;
  height: 5rem;
  background: #3e3e3e;
  color: #fff;
  display: flex;
  justify-content: center;
}
img {
  width: 24px; /*px required*/
  height: 24px; /*px required*/
  margin-top: 1.3rem;
  margin-right: 1rem;
}
address {
  font-size: 1.4rem;
  margin-top: 1.8rem;
}
</style>