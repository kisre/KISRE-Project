<template>
  <section>
    <h1>Titled Scarf</h1>
    <div class="h1_content">
      <Scarves v-bind:scarves="scarves" class="scarves"/>
    </div>
    <p class="last_updated">Last updated: 2021.03.07</p>
  </section>
</template>

<script>
import Scarves from '@/components/scarflist/Scarves';

export default {
  name: 'TitledScarf',
  props: {
    scarves: Array
  },
  components: {
    Scarves
  },
  data() {
    return {
      title: 'Titled Scarf',
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

<style scoped>
</style>

