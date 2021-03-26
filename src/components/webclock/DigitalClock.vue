<template>
  <div id="digital_display">
    <time class="eng">{{digitalDate}} {{digitalTime}}</time>
    <time class="jpn">年 月 日（{{digitalDay}}）時 分 秒</time>
  </div>
</template>

<script>
export default {
  name: "DigitalClock",
  props: {
    digitalDate: String,
    digitalTime: String,
    digitalDay: String
  },
  methods: {
    getDigital() {
      //Digital Date
      let date = new Date();
      let WeekEng, WeekJpn, year, preMonth, month, dateGot, weekEngGot, weekJpnGot, digitalDate;
      WeekEng = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
      WeekJpn = ['日', '月', '火', '水', '木', '金', '土'];

      year = date.getFullYear();
      preMonth = date.getMonth() + 1;
      month = ('0' + preMonth).slice(-2);
      dateGot = date.getDate();
      weekEngGot = WeekEng[date.getDay()];
      weekJpnGot = WeekJpn[date.getDay()];

      digitalDate = `${year}.${month}.${dateGot} ${weekEngGot}`;
      this.digitalDate = digitalDate;

      //Digital Day
      this.digitalDay = weekJpnGot;

      //Digital Time
      let hour, minute, second;
      hour = date.getHours();
      minute = date.getMinutes();
      second = date.getSeconds();

      if(hour < 10) hour = `0${hour}`;
      if(minute < 10) minute = `0${minute}`;
      if(second < 10) second = `0${second}`;

      this.digitalTime = hour + ':' + minute + ':' + second;
    }
  },
  created() {
    setInterval( this.getDigital, 1000 );
  }
}
</script>

<style scoped>
  #digital_display,
  time {
    display: block;
  }
  .eng {
    font-size: 1.4rem;
  }
  .jpn {
    font-size: 1.2rem;
  }
</style>