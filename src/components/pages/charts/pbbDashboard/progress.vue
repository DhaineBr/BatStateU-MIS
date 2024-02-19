<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs';


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'ProgressStat',
  components: {
    Doughnut
  },
  data() {
    return  {
      chartData: {   
        labels: ['', ''],
        datasets: [
          {
            backgroundColor: ['#D00412', '#D7D7D7'],
            data: [50, 50],
            borderWidth: 0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        rotation: 270, 
        circumference: 180, 
        cutout: '75%',
        plugins: {
          title: {
            display: false,
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
    id="ProgressStat"
    :data="chartData"
    :options="chartOptions" 
    />
</template>
<style scoped></style>