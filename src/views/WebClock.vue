<template>
  <section id="display">
    <h1>Web Clock</h1>
    <div class="h1_content">
      <Clock />
      <DigitalClock />
    </div>
    <p class="last_updated">Last updated: 2021.03.21</p>
  </section>
</template>

<script>
import Clock from '@/components/webclock/Clock';
import DigitalClock from '@/components/webclock/DigitalClock';

export default {
  name: "WebClock",
  components: {
    Clock,
    DigitalClock
  },
  data() {
    return {
      title: 'Web Clock',
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