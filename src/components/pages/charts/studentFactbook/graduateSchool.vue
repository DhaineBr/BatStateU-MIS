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

let year = 2010;
let labels = [];

for (let i = 0; i < 10; i++) {
    labels.push(year.toString());
    year++;
}

export default {
  name: 'GraduateSchool',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: labels ,
        
        datasets: [ { 
            backgroundColor: '#D00412',
            data: [
                randomNumber1, 
                randomNumber2, 
                randomNumber3, 
                randomNumber4, 
                randomNumber5, 
                randomNumber2, 
                randomNumber3, 
                randomNumber4, 
                randomNumber5, 
                randomNumber1],
            stack: 'stack' 
          },
          { 
            backgroundColor: '#06ECC3',
            data: [randomNumber1, 
            randomNumber2, 
            randomNumber3, 
            randomNumber4, 
            randomNumber5, 
            randomNumber2, 
            randomNumber3, 
            randomNumber4, 
            randomNumber5, 
            randomNumber1],
            stack: 'stack' 
          },
        ]
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'x',
        scales: {
            
          y: {
            display: false,
            stacked: true ,
            
          }
        },
        plugins: {
          title: {
            display: false   
          },
          legend: { display: false }
        }
      }
    }
  }
}
</script>

<template>
  <Bar
    id="GraduateSchool"
    :options="chartOptions"
    :data="chartData"
  />
</template>
