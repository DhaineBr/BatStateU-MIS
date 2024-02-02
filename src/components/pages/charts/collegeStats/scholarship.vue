<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChartOne',
  components: {
    Pie
  },
  data() {
    return  {
      chartData: {   
        labels: ['Male', 'Female'],
        datasets: [
          {
            backgroundColor: ['#EC061D', '#06ECC3'],
            data: [350, 100],
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Scholarship',      
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
  <Pie 
    id="PieChartOne"
    :data="chartData"
    :options="chartOptions" 
  />
</template>

<style scoped>
</style>
