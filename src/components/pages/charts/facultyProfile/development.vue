<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;
const randomNumber3 = Math.floor(Math.random() * 10) + 1;
const randomNumber4 = Math.floor(Math.random() * 10) + 1;

export default {
  name: 'BarChartTwo',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Accomplishments', 'Targets'],
        
        datasets: [
          {
            backgroundColor: ['#06ECC3'],
            label: '',
            data: [randomNumber1, randomNumber2],
          },
          {
            backgroundColor: ['#EC061D'],
            label: '',
            data: [randomNumber3, randomNumber4],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            display: false, 
          },
          y: {
            grid: {
              display: false
            }
          }},
        plugins: {
          title: {
            display: true,
            text: 'Faculty Development',      
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
    id="BarChartTwo"
    :options="chartOptions"
    :data="chartData"
  />
</template>
