<template>
  <section>
    <p class="head_foot">Today</p>
    <table>
      <tr><td class="year">Moving</td><td class="event">引越歴</td></tr>
      <tr><td class="year">Learning</td><td class="event">学校歴</td></tr>
      <tr><td class="year">Qualification</td><td class="event">資格歴</td></tr>
      <tr><td class="year">Job Experience</td><td class="event">職務歴</td></tr>
      <tr><td>↓</td></tr>
    </table>
    <p class="head_foot">Birth</p>
  </section>
</template>

<script>
export default {
  name: "MeTreeAbout"
}
</script>

<style scoped>
.event {
  line-height: 2.2rem;
}
</style>