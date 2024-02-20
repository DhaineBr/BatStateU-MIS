<script>
import ProgressStat from '@/components/pages/charts/pbbDashboard/progress.vue'

export default {
    data()  {
        const reports = [
            'Performance Results',
            'Process Results',
            'Financial Results',
            'Citizen/Client Satisfaction Report',
            'Agency Accountabilities'
        ]
        const quarters = [
            '2023 Q4',
            '2023 Q3',
            '2023 Q2',
            '2023 Q1',
            '2022 Q4',
            '2022 Q3',
            '2022 Q2',
            '2022 Q1',
        ]

        return  {
            reports,
            quarters
        }
    },
    components: {
        ProgressStat
    }
}
</script>
<template>
    <div class="container">
        <div class="top">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn style="height:inherit; display: flex; justify-content: space-between" v-bind="props">
                        2023 Q1
                        <mdicon name="menu-down"/>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(quarter, index) in quarters" :key="index" :value="index">
                    <v-list-item-title>{{ quarter }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="left">
            <div class="chart-cont"><ProgressStat /></div>
            <div v-for="(report, index) in reports" :key="index" class="progress-cont">
                <div style="font-weight: 600" class="header">{{ report }}</div>
                <div class="progress-group">
                    <progress max="100" :value="85" class="progress-bar"></progress> 
                    <div class="value">85%</div>
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>
<style scoped>
/* top bar */
.top    {
    height: 5vh;
    margin: 0 0 1% 0 
}
.v-btn  {
    margin: 0 0 0 auto;
    letter-spacing: 0.05vw;
    background-color: #94080D;
    color: white;
    font-size: 1vw;
    width: 9%;
}
/* left-side */
.left   {
    width: 25%;
    float: left;
    height: inherit;
}
.chart-cont {
    height: 45vh;
    width: 100%;
}
.progress-group   {
    width: 85%
}
.progress-bar   {
    width: 80%;
    height: 2.5vh;
    float: left;
    margin: auto;
    border: none;
}
.progress-bar::-webkit-progress-bar {
    background-color: #D9D9D9;
}
.progress-bar::-webkit-progress-value {
    background-color: #D00412;
}
.header, .value {
    font-size: 1vw;
}
.value  {
    width: 20%;
}
/* right-side */
.right  {
    width: 75%;
    float: right;
    height: inherit;
}
/* Global */
*   {
    border: solid;
    border-width: 0.05rem;
    outline: none;
}
.container  {
    width: 95%;
}
.chart-cont {
    display: flex;
    flex-direction: column;
}
.progress-group, .value {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>