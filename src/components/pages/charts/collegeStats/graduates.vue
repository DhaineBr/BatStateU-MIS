<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChartTwo',
  components: {
    Doughnut
  },
  data() {
    return  {
      chartData: {   
        labels: ['Main Campus', 'Alangilan Campus', 'Extension Campuses'],
        datasets: [
          {
            backgroundColor: ['#EC061D', '#E86217', '#06ECC3'],
            data: [350, 100, 88],
            borderWidth: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Graduate',      
          },
          legend: { display: true,
            position: 'left'    
        },
          
        }
      }
    }
  }
}
</script>

<template>
  <Doughnut 
    id="DoughnutChartTwo"
    :data="chartData"
    :options="chartOptions" 
  />
</template>

<style scoped>
</style>
