<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChartOne',
  components: {
    Doughnut
  },
  data() {
    return  {
      chartData: {   
        labels: ['Male', 'Female'],
        datasets: [
          {
            backgroundColor: ['#EC061D', '#06ECC3'],
            data: [350, 100],
            borderWidth: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Enrollment',      
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
    id="DoughnutChartOne"
    :data="chartData"
    :options="chartOptions" 
  />
</template>

<style scoped>
</style>
