<template>
  <section>
    <p class="head_foot">Today</p>
    <table>
      <tr><td class="year">2021.02−{{onToday}}</td><td class="event">独学・Vue.js</td></tr>
      <tr><td class="year">2017.09−2017.12</td><td class="event">県ITスキルアッププログラム・Java開発技術</td></tr>
      <tr><td class="year">2016.03</td><td class="event">派遣会社講座・UI/UX</td></tr>
      <tr><td class="year">2016.01</td><td class="event">派遣会社講座・HTML5</td></tr>
      <tr><td class="year">2010.09−2011.08</td><td class="event">洋裁スクール</td></tr>
      <tr><td class="year">2005.06−2006.05</td><td class="event">大学・BA(Hons)・Fine Art with Contemporary Writing（Singapore/England）</td></tr>
      <tr><td class="year">2004.08−2005.06</td><td class="event">陶芸スクール（Singapore）</td></tr>
      <tr><td class="year">2004.01−2004.12</td><td class="event">語学スクール・大学入学準備（Singapore）</td></tr>
      <tr><td class="year">2001.05−2002.05</td><td class="event">イラストスクール・イラストレーション専門コース</td></tr>
      <tr><td class="year">2001.01</td><td class="event">大学公開講座・色彩学理論入門コース</td></tr>
      <tr><td class="year">1999.09</td><td class="event">大学公開講座・色彩学初級入門コース</td></tr>
      <tr><td class="year">1996.11−1997.04</td><td class="event">派遣会社スクール・マルチメディアクリエイターコース</td></tr>
      <tr><td class="year">1995.04−1997.03</td><td class="event">短期大学・食物栄養専攻</td></tr>
    </table>
    <p class="head_foot">Birth</p>
  </section>
</template>

<script>
export default {
  name: "Learning",
  props: {
    onToday: String
  },
  created() {
    let date = new Date();
    let year, preMonth, month, onToday;

    year = date.getFullYear();
    preMonth = date.getMonth() + 1;
    month = ('0' + preMonth).slice(-2);

    onToday = `${year}.${month}`;
    this.onToday = onToday;
  }
}
</script>

<style scoped>

</style>