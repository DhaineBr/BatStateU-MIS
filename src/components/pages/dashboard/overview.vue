<script>
import BarChartOne from '@/components/pages/charts/facultyProfile/academicRank.vue';
import BarChartTwo from '@/components/pages/charts/facultyProfile/development.vue';
import BarChartThree from '@/components/pages/charts/facultyProfile/campusAndDegree.vue'

export default {
  name: 'barChart',
  components: { BarChartOne, BarChartTwo, BarChartThree }
}


</script>
<template>
    <div class="container">
      <div class="box-one">
        <div class="header">Faculty Profile</div>
        <div class="top">
          <div class="left"><BarChartOne /></div>
          <div class="right"><BarChartTwo /></div>
        </div>
        <div class="bottom">
          <BarChartThree />
        </div>
      </div>

      <div class="box-two">
        <div class="header">College Statistics</div>
        <div class="top">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="bottom">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="bottom-most"></div>
      </div>
    </div>
</template>

<style scoped>
/* Global */
* {
  border: solid;
}

.container  {
  display: flex;
  flex-direction: column;
  height: 550vh;
  width: 100%;
}

.box-one  {
  height: 90vh;
}

.box-two  {
  height: 160vh;
  padding-top: 5vh
}

.header {
  width: 92.5%;
  height: 5vh;
  font-size: 2vw;
  font-weight: 600;
  color: #D00412
}

.box-one,  .box-two, .left, .right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top, .bottom  {
  height: 42.5vh;
  width: 100%;
}

.bottom-most  {
  height: 65vh;
}

.top, .bottom, .bottom-most {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.left,  .right {
  height: inherit;
  width: 40%;
  margin: auto;
}

.left {
  float: left;
}

.right  {
  float: right;
}

</style>