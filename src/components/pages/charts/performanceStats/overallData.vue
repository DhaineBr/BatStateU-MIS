<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'OverallData',
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
            data: [25, 75],
            borderWidth: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Completion of overall data',      
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
    id="OverallData"
    :data="chartData"
    :options="chartOptions" 
    />
</template>
<style scoped></style>