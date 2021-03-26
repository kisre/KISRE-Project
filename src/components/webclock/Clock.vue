<template>
  <time id="clock_display">
    <img src="@/assets/webclock/frame.png" id="img_fr" class="clock" alt="frame">
    <img src="@/assets/webclock/littlehand.png" id="img_hr" class="clock" alt="littlehand">
    <img src="@/assets/webclock/bighand.png" id="img_min" class="clock" alt="bighand">
    <img src="@/assets/webclock/secondhand.png" id="img_sec" class="clock" alt="secondhand">
  </time>
</template>

<script>
export default {
  name: "Clock",
  methods: {
    getDeg() {
      //Clock
      let date = new Date();
      let hour, minute, second, hDeg, mDeg, sDeg;
      hour = date.getHours();
      minute = date.getMinutes();
      second = date.getSeconds();

      hDeg = (hour % 12) * (360 / 12);
      mDeg = minute * (360 / 60);
      sDeg = second * (360 / 60);

      hDeg += (minute / 60) * (360 / 12);
      mDeg += (second / 60) * (360 / 60);

      let H = document.getElementById('img_hr');
      H.style.transform = `rotate(${hDeg}deg)`;
      H.style.MozTransform = `rotate(${hDeg}deg)`;
      H.style.webkitTransform = `rotate(${hDeg}deg)`;
      H.style.msTransform = `rotate(${hDeg}deg)`;

      let M = document.getElementById('img_min');
      M.style.transform = `rotate(${mDeg}deg)`;
      M.style.MozTransform = `rotate(${mDeg}deg)`;
      M.style.webkitTransform = `rotate(${mDeg}deg)`;
      M.style.msTransform = `rotate(${mDeg}deg)`;

      let S = document.getElementById('img_sec');
      S.style.transform = `rotate(${sDeg}deg)`;
      S.style.MozTransform = `rotate(${sDeg}deg)`;
      S.style.webkitTransform = `rotate(${sDeg}deg)`;
      S.style.msTransform = `rotate(${sDeg}deg)`;
    }
  },
  created() {
    setInterval( this.getDeg, 1000 );
  }
}
</script>

<style scoped>
#clock_display {
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
  margin: 0 auto 0;
  text-align: center;
}
.clock {
  position: absolute;
  top: 0;
  left: 0;
}
.clock img {
  border: none;
  width: 500px;
  height: 500px;
}
</style>