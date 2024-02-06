<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PbbGrading',
  components: {
    Doughnut
  },
  data() {
    return  {
      chartData: {   
        labels: ['', ''],
        datasets: [
          {
            backgroundColor: ['#D00412', '#D9D9D9'],
            data: [75, 25],
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'PBB Grading: Non-eligible', 
            position: 'bottom'     
          },
          legend: { display: false,   
        },
          
        }
      }
    }
  }
}
</script>
<template>
    <Doughnut 
    id="PbbGrading"
    :data="chartData"
    :options="chartOptions" 
    />
</template>
<style scoped></style>