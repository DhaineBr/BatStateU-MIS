<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChartKist',
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
            borderWidth: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: false,
          },
          legend: { 
            display: false,    
        },
          
        }
      }
    }
  }
}
</script>

<template>
  <Doughnut 
    id="DoughnutChartKist"
    :data="chartData"
    :options="chartOptions" 
  />
  <div class="text">
    <img src="./../../../../assets/learn_more.svg" style="width: 1vw; opacity: 0.5">
    Data Submission Progress
  </div>
</template>
<style scoped>
.text   {
    font-size: 1vw;
    color: #808080;
    margin: 5vh 0 0 0
}
</style>
