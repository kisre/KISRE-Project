<template>
  <div id="scarves">
    <div v-bind:key="scarf.id" v-for="scarf in scarves" class="box">
      <p class="number">{{scarf.id}}</p>
      <p class="imgbox"><img alt="scarf" v-bind:src="scarf.img"></p>
      <p class="title">{{scarf.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scarves",
  data() {
    return {
      scarves: [
        {
          id: 1,
          img: require('@/assets/scarflist/crystalbubble.jpg'),
          title: 'Crystal Bubble'
        },
        {
          id: 2,
          img: require('@/assets/scarflist/dancedance.jpg'),
          title: 'Dance Dance'
        },
        {
          id: 3,
          img: require('@/assets/scarflist/lightningflashed.jpg'),
          title: 'Lightning Flashed'
        },
        {
          id: 4,
          img: require('@/assets/scarflist/partialuniverse.jpg'),
          title: 'Partial Universe'
        },
        {
          id: 5,
          img: require('@/assets/scarflist/upliftinghunch.jpg'),
          title: 'Uplifting Hunch'
        },
        {
          id: 6,
          img: require('@/assets/scarflist/warmweb.jpg'),
          title: 'Warm Web'
        }
      ]
    }
  }
}
</script>

<style scoped>
  div {
    text-align: left;
  }
  #scarves {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    margin: 0 2rem 0;
  }
  .number {
    line-height: 1;
    overflow: auto;
  }
  .imgbox {
    height: 17rem;
  }
  img  {
    display: block;
    margin-top: -2rem;
    width: 20rem;
    height: auto;
  }
  .title {
    line-height: 1.2;
    max-width: 20rem;
    margin: 0 0 3rem;
    word-wrap: break-word;
  }
</style>