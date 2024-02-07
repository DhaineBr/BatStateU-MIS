<script>
import Undergraduate from '@/components/pages/charts/studentFactbook/undergraduate.vue'
import GraduateSchool from '@/components/pages/charts/studentFactbook/graduateSchool.vue'
import SeniorHighSchool from '@/components/pages/charts/studentFactbook/seniorHighSchool.vue'

const charts = [Undergraduate, GraduateSchool, SeniorHighSchool];

export default{
    name: 'charts',
    components: charts.reduce((acc, component) => {
        acc[component.name] = component;
        return acc;
    }, {}),
    data()    {
        const headers = ['I. Undergraduate', 'II. Graduate School', 'III. Senior High School']
        return  {
            headers
        }
    },
    methods: {
        getChartComponentName(header) {
            switch (header) {
            case 'Undergraduate':
                return 'Undergraduate';
            case 'Graduate School':
                return 'GraduateSchool';
            case 'Senior High School':
                return 'SeniorHighSchool';
            default:
                return '';
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="chart-cont" v-for="(header, index) in headers" :key="index">
            <div class="header">{{ header }}</div>
            <div class="chart"><component :is="getChartComponentName(header)"></component></div>
            <div class="notes"></div>
        </div>
    </div>
</template>
<style scoped>
.header {
    height: 5vh;
    font-weight: 600;
    color: #94080D;
    padding: 0 0 0 5vw
}
.chart-cont    {
    height: 45vh;
    width: 100%;
    margin: 0 0 5vh 0
}
.chart  {
    float: left;
    width: 70%;
}
.notes  {
    float: right;
    width: 30%;
}

/* Global */
*   {
    border: solid;
    border-width: 0.01rem
}
.container, .chart  {
    height: 150vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.chart, .notes  {
    height: 40vh;
}
</style>