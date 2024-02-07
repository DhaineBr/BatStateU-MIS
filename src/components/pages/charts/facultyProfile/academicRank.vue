<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;
const randomNumber3 = Math.floor(Math.random() * 10) + 1;
const randomNumber4 = Math.floor(Math.random() * 10) + 1;

export default {
  name: 'BarChartOne',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Instructor', 'Assistant Professor', 'Associate Professor', 'Professor' ],
        datasets: [ { 
          backgroundColor:['#CF0412', '#E86217', '#8E04CF', '#04AACF'],
          data: [randomNumber1, randomNumber2, randomNumber3, randomNumber4] 
        } ]
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            display: false,
          }},
        plugins: {
          title: {
            display: true,
            text: 'Faculty by Academic Rank',      
          },
          legend: { display: false },
        },
      }
    }
  }
}
</script>

<template>
  <Bar
    id="BarChartOne"
    :options="chartOptions"
    :data="chartData"
  />
</template>
