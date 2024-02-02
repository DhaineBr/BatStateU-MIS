<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// dummy data
const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;
const randomNumber3 = Math.floor(Math.random() * 10) + 1;
const randomNumber4 = Math.floor(Math.random() * 10) + 1;
const randomNumber5 = Math.floor(Math.random() * 10) + 1;
const randomNumber6 = Math.floor(Math.random() * 10) + 1;

export default {
  name: 'BarChartThree',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Doctoral Degree', 'with units in Doctoral', 'Masteral Degree', 'with units in Masteral', 'h'],
        datasets: [
          {
            backgroundColor: ['#06ECC3'],
            label: '',
            data: [randomNumber1, randomNumber2,  randomNumber3, randomNumber4, randomNumber5]
          },
          {
            backgroundColor: ['#E86217'],
            label: '',
            data: [randomNumber3, randomNumber4, randomNumber6, randomNumber2, randomNumber5],
          },
          {
            backgroundColor: ['#CF0412'],
            label: '',
            data: [randomNumber5, randomNumber6, randomNumber1, randomNumber2, randomNumber4],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'x',
        scales: {
          y: {
            display: false,
          }},
        plugins: {
          title: {
            display: true,
            text: 'Faculty by Campus and Degree',      
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
    id="BarChartThree"
    :options="chartOptions"
    :data="chartData"
  />
</template>
