<script>

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name:'DoughnutChartThree',
  components: {
    Doughnut
  },
  data() {
    return  {
      chartData: {   
        labels: ['International Publication ', 'National Publication '],
        datasets: [
          {
            backgroundColor: ['#9A171C', '#06ECC3'],
            data: [350, 100],
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Research output published / disseminated',      
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
    
</template>
<style scoped></style>