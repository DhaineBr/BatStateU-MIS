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
        labels: ['Agriculture', 'Sanitary Engr.', 'Mechanical Engr.', 'Nutritionist Dietetics', 
        'Elementary Education', 'Secondary Educ.', 'Electronics Engr.', 'electrical Engr.',
        'Accountancy', 'Chemical Engr.', 'Civil Engr.', 'Architecture'],
        datasets: [
          {
            backgroundColor: ['#EC061D'],
            label: '',
            data: [randomNumber1, randomNumber2,  randomNumber3, randomNumber4, randomNumber5, randomNumber6,
            randomNumber7, randomNumber8,  randomNumber9, randomNumber10, randomNumber11, randomNumber12 ]
          },
          {
            backgroundColor: ['#06ECC3'],
            label: '',
            data: [randomNumber3, randomNumber4, randomNumber6, randomNumber2, randomNumber5, randomNumber6,
            randomNumber8, randomNumber7,  randomNumber12, randomNumber11, randomNumber9, randomNumber10 ],
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
            text: 'Passing Rate of Licensure Examinations',      
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
    id="BarChartFour"
    :options="chartOptions"
    :data="chartData"
  />
</template>
