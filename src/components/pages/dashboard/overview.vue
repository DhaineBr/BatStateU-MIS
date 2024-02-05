<script>
import BarChartOne from '@/components/pages/charts/facultyProfile/academicRank.vue';
import BarChartTwo from '@/components/pages/charts/facultyProfile/development.vue';
import BarChartThree from '@/components/pages/charts/facultyProfile/campusAndDegree.vue';
import BarChartFour from '@/components/pages/charts/collegeStats/licensurePassingRate.vue';
import BarChartFive from '@/components/pages/charts/financialStatus/financialStatus.vue';
import DoughnutChartOne from '@/components/pages/charts/collegeStats/enrollment.vue';
import DoughnutChartTwo from '@/components/pages/charts/collegeStats/graduates.vue';
import DoughnutChartThree from '@/components/pages/charts/research/researchOutputOne.vue';
import DoughnutChartFour from '@/components/pages/charts/research/researchOutputTwo.vue';
import PieChartOne from '@/components/pages/charts/collegeStats/scholarship.vue';


export default {
  name: 'charts',
  components: { 
    BarChartOne, 
    BarChartTwo, 
    BarChartThree, 
    BarChartFour, 
    BarChartFive,
    DoughnutChartOne, 
    DoughnutChartTwo, 
    DoughnutChartThree,
    DoughnutChartFour,
    PieChartOne,
  },
  data() {

  // Dummy data for extension services
  const serviceObjects = [];
  for (let i = 0; i < 7; i++) {
    const serviceObject = {
      icon:`icon${i + 1}`,
      figure: (Math.floor(Math.random() * 10) + 20),
      serviceName: `service${i + 1}`,
    };
    serviceObjects.push(serviceObject);
  }

  // Dummy data for accreditation status
  const status = [
    'ABET Accredited', 
    'Level III Re-accredited', 
    'Qualified for Level IV ',
    'Level II Re-Accredited',
    'Level IV Phase 1',
    'Level I Accredited',
    'Qualified for Level III',
    'Candidates'];
  return {
    serviceObjects,
    status
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
        <div class="header">Extension Services</div>
        <div class="sub-one">
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(0, 2)" :key="index">
              <div class="icon">{{ serviceObject.icon }}</div>
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ serviceObject.serviceName }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(2, 4)" :key="index">
              <div class="icon">{{ serviceObject.icon }}</div>
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ serviceObject.serviceName }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(4, 6)" :key="index">
              <div class="icon">{{ serviceObject.icon }}</div>
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ serviceObject.serviceName }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index) in serviceObjects.slice(6)" :key="index">
              <div class="icon">{{ serviceObject.icon }}</div>
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ serviceObject.serviceName }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-four">
        <div class="header">Accreditation status of Academic Programs  </div>
        <div class="sub-one">
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(0, 2)" :key="index">
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ status[index] }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(2, 4)" :key="index">
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ status[index] }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index ) in serviceObjects.slice(4, 6)" :key="index">
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ status[index] }}</div>
            </div>
          </div>
          <div class="sub-two">
            <div class="sub-three" v-for="(serviceObject, index) in serviceObjects.slice(6, 8)" :key="index">
              <div class="figure">{{ serviceObject.figure }}</div>
              <div class="service">{{ status[index] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-five">
        <div class="header">Research </div>
        <div class="five-sub">
          <div class="charts">
            <DoughnutChartThree/>
          </div>
          <div class="figures">

          </div>
        </div>
      </div>
      <div class="box-six">
        <div class="header">Financial Status </div>
        <div class="six-sub">
          <BarChartFive/>
        </div>
      </div>
    </div>

</template>

<style scoped>
.container  {
  display: flex;
  flex-direction: column;
  height: 570vh;
  width: 100%;
  padding-top: 10vh;
}

/* Main Boxes */
.box-one  {
  height: 97.5vh;
}
.box-two  {
  height: 167.5vh;
}
.box-three {
  height: 57.5vh;
}
.box-four {
  height: 57.5vh
}
.box-five {
  height: 80vh
}
.box-six  {
  height: 100vh;
}

/* Box three sub boxes */
.sub-one  {
  height: 45vh;
  width: 100vw
}
.sub-two{
  width: 20%;
  margin: 0 1.5%
}
.sub-three {
  display: flex; 
  flex-direction: row;
  width: 100%;
  height: 20vh;
  font-size: 1.5vw;
}
.icon, .figure  {
  text-align: center;
  height: inherit;
}
.icon {
  width: 30%;
  color: #94080D
}
.figure {
  width: 20%;
  color: #D00412;
  font-size: 2vw;
  font-weight: 600;
}
.service  {
  width: 50%;
  color: black;
  height: inherit;
  text-align: left;
  font-size: 1.25vw;
}

/* Box five subboxes */
.five-sub {
  height: 67.5vh;
  width: 100vw;
}
.six-sub  {
  height: 87.5vh;
  width: 100vw;
}
/* Global */
* {
  border: solid;
  border-width: 0.01rem;
}
.header {
  width: 90%;
  height: 7.5vh;
  font-size: 2vw;
  font-weight: 600;
  color: #D00412
}
.box-one, .box-two, .box-three, .box-four, .box-five, .box-six  {
  padding-top: 5vh
}
.box-one,  .box-two, .box-three, .box-four, .box-five, .box-six, .left, .right, .sub-two, .icon, .figure, .service {
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
.top, .bottom, .bottom-most, .sub-one, .sub-three {
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