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
const randomNumber7 = Math.floor(Math.random() * 10) + 1;
const randomNumber8 = Math.floor(Math.random() * 10) + 1;
const randomNumber9 = Math.floor(Math.random() * 10) + 1;
const randomNumber10 = Math.floor(Math.random() * 10) + 1;
const randomNumber11 = Math.floor(Math.random() * 10) + 1;
const randomNumber12 = Math.floor(Math.random() * 10) + 1;

export default {
  name: 'BarChartFour',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['IGP Income', 'Financial Charge', 'MOOE', 'Cost of Goods Sold', 
        'Personal Services', 'Income from Operations', 'Subsidy Income from National Government'],
        datasets: [
          {
            backgroundColor: ['#EC061D'],
            label: '2017',
            data: [randomNumber1, randomNumber2,  randomNumber3, randomNumber4, randomNumber5, randomNumber6,
            randomNumber7, randomNumber8,  randomNumber9, randomNumber10, randomNumber11, randomNumber12 ]
          },
          {
            backgroundColor: ['#06ECC3'],
            label: '2016',
            data: [randomNumber3, randomNumber4, randomNumber6, randomNumber2, randomNumber5, randomNumber6,
            randomNumber8, randomNumber7,  randomNumber12, randomNumber11, randomNumber9, randomNumber10 ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'y',
        scales: {
            y: {
                display: true,
                grid: {
                  display: false
                }
            },
            x:  {
                display: false
            }},
        plugins: {
          title: {
            display: true,
            text: 'Passing Rate of Licensure Examinations',      
          },
          legend: { display: true },
        },
      }
    }
  }
}
</script>

<template>
  <Bar
    id="BarChartFour"
    :options="chartOptions"
    :data="chartData"
  />
</template>
