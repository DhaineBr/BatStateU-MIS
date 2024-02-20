<script>
import { RouterLink } from 'vue-router';
import Dashboard from '@/components/pages/dashboard/dashboard.vue'
export default {
  components: {
    RouterLink,
    Dashboard,
  },
  data() {
    const offices = [
      'Faculty and Staff Members',
      'Students',
      'Admissions',
      'Enrollment',
      'Graduate Degrees Conferred',
      'Career Path and Employment Status',
      'Research',
      'International',
      'Industry - University - Government Collaboration',
      'Finance'
    ]
    return {
      isDashboardHidden: false, 
      offices
    };
  },
  methods: {
    hideDashboard() {
      this.isDashboardHidden = true;
    },
  },
};
</script>
<template>
    <div class="container">
        <nav>
            <div class="top">
                <div v-for="(office, index) in offices" :key="index" class="backdrop">
                  <RouterLink :to="`/landing/${office.toLowerCase().replace(/\s+/g, '-')}`"
                  class="card" @click="hideDashboard">{{ office }}</RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>

/* Global */
*   {
    border: none;
}
.container  {
    height: 65vh;
}
.top {
    height: 65vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.card {
  position: absolute;
  bottom: 0;
  height: 15vh;
  width: 16.5vw;
  background-color: #94080D;
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  float: left
}
.backdrop {
  position: relative; 
  background-color: #DADADA;
  height: 23.5vh;
  width: 16.5vw;
  margin: 0 1%;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0.15rem 0rem 0.1rem;
}
</style>