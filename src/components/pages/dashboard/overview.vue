<script>
import BarChartOne from '@/components/pages/charts/facultyProfile/academicRank.vue';
import BarChartTwo from '@/components/pages/charts/facultyProfile/development.vue';
import BarChartThree from '@/components/pages/charts/facultyProfile/campusAndDegree.vue';
import BarChartFour from '@/components/pages/charts/collegeStats/licensurePassingRate.vue';
import DoughnutChartOne from '@/components/pages/charts/collegeStats/enrollment.vue';
import DoughnutChartTwo from '@/components/pages/charts/collegeStats/graduates.vue';
import PieChartOne from '@/components/pages/charts/collegeStats/scholarship.vue';



export default {
  name: 'barChart',
  components: { 
    BarChartOne, 
    BarChartTwo, 
    BarChartThree, 
    BarChartFour, 
    DoughnutChartOne, 
    DoughnutChartTwo, 
    PieChartOne,
  },
  data() {

  // Dummy data for extension services
  const serviceObjects = [];

  for (let i = 0; i < 7; i++) {
    const serviceObject = {
      icon:`icon${i + 1}`,
      figure: (Math.floor(Math.random() * 10) + 1),
      serviceName: `service${i + 1}`,
    };
    serviceObjects.push(serviceObject);
  }

  return {
    serviceObjects,
  };
},

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
          <div class="left"><DoughnutChartOne /></div>
          <div class="right"><DoughnutChartTwo/></div>
        </div>
        <div class="bottom">
          <div class="left"><PieChartOne /></div>
          <div class="right"></div>
        </div>
        <div class="bottom-most"><BarChartFour /></div>
      </div>

      <div class="box-three">
        <div class="sub" v-for="(serviceObject, index ) in serviceObjects.slice(0, 2)" :key="index">
          <div class="icon">{{ serviceObject.icon }}</div>
          <div class="figure">{{ serviceObject.figure }}</div>
          <div class="service">{{ serviceObject.serviceName }}</div>
        </div>
        <div class="sub" v-for="(serviceObject, index ) in serviceObjects.slice(2, 4)" :key="index">
          <div class="icon">{{ serviceObject.icon }}</div>
          <div class="figure">{{ serviceObject.figure }}</div>
          <div class="service">{{ serviceObject.serviceName }}</div>
        </div>
        <div class="sub" v-for="(serviceObject, index ) in serviceObjects.slice(4, 6)" :key="index">
          <div class="icon">{{ serviceObject.icon }}</div>
          <div class="figure">{{ serviceObject.figure }}</div>
          <div class="service">{{ serviceObject.serviceName }}</div>
        </div>
        <div class="sub" v-for="(serviceObject, index) in serviceObjects.slice(6)" :key="index">
          <div class="icon">{{ serviceObject.icon }}</div>
          <div class="figure">{{ serviceObject.figure }}</div>
          <div class="service">{{ serviceObject.serviceName }}</div>
        </div>
      </div>
    </div>

    
</template>

<style scoped>
/* Global */
* {
  border: solid;
  border-width: 0.01rem;
}

.container  {
  display: flex;
  flex-direction: column;
  height: 560vh;
  width: 100%;
  padding-top: 10vh;
}

.box-one  {
  height: 95vh;
}

.box-two  {
  height: 165vh;
  padding-top: 5vh
}

.box-three  {
  height: 50vh;
}

.header {
  width: 90%;
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
  height: 45vh;
  width: 100%;
}

.bottom-most  {
  height: 65vh;
  width: 100%;
}

.top, .bottom, .bottom-most, .box-three {
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