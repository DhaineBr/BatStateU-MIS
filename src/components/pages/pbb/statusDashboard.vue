<script>
import ProgressStat from '@/components/pages/charts/pbbDashboard/progress.vue' 

export default {
    data()  {
        const offices = [
            'Office of Academic Affairs', 
            'Office of Extension Services',
            'Office of Research Development'
        ]
        const reports = [
            'Performance Results',
            'Process Results',
            'Financial Results',
            'Citizen/Client Satisfaction Report',
            'Agency Accountabilities'
        ]
        const date = ['07-12-2023']
        const officeDropdown = []

        for(let i = 0; i < 5; i++)  {
            const office = {
                office: offices[i % offices.length],
                report: reports [i],
                date: date[i % date.length]
            }

            officeDropdown.push(office)
        }
        return  {
            offices,
            officeDropdown
        }
    },
    components:  {
        ProgressStat
    }
}
</script>
<template>
    <div class="container">
        <div class="summary">
            <div style="justify-content: center; align-items: center;" class="left"><ProgressStat /></div>
            <div style="display: flex; flex-flow: row wrap;" class="right">
                <div v-for="(report, index) in officeDropdown" :key="index" class="progress">
                    <div style="font-weight: 600; width: 100%;" class="report">{{ report.report }}</div>
                    <div style="width:100%" class="progress-container">
                        <progress max="100" :value="70" class="progress-bar"></progress> 
                        <div class="value">85%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-filter">
            <button class="filter">
                <mdicon style="margin: 0 5% 0 0" name="file-cog-outline"/> Modify Indicators
            </button>
        </div>
        <div class="status-list">
            <div style="font-size: 1.25vw; border: solid; border-width: 0 0.05rem 0 0;" class="left">
                <div style="height: 7vh;" class="header">Offices</div>
                <v-menu v-for="(office, index) in officeDropdown" :key="index">
                    <template v-slot:activator="{ props }">
                        <v-btn style="height: 7vh; display: flex; justify-content: space-between" v-bind="props">
                            <div class="reports">{{office.report}}</div>
                            <div class="icon"><mdicon style="width: 50%" name="chevron-right"/></div>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in officeDropdown" :key="index" :value="index">
                        <v-list-item-title>{{ item.office }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="right">
                <div class="title">Office submission status</div>
                <div v-for="(status, index) in officeDropdown" :key="index" style="height: 10vh;" class="status">
                    <div class="symbol-container"><mdicon name="check" class="symbol"/></div>
                    <div class="office-name">{{ status.office }}</div>
                    <div class="date">Date accomplished: {{ status.date }}</div>
                </div>
            </div>  
        </div>
    </div>
</template>
<style scoped>
/* Top Summary */
.summary    {
    height: 30vh;
    width: 100%;
}
.progress   {
    width: 30%;
    flex-direction: column;
    margin: 0 2.5% 0 0;
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
.report, .value {
    font-size: 1vw;
}
.value  {
    width: 20%;
}
/* list-filter between the summary and status-list */
.list-filter, .filter    {
    height: 7.5vh;
    display: flex;
    flex-direction: row;
}
.filter {
    font-weight: 600;
    font-size: 1.25vw;
    align-items: center;
    margin: 0 0 0 auto;
    width: 14%;
}
/* status-list */
.status-list    {
    height: 100vh;
    border: solid;
    border-width: 0.1rem;
    border-radius: 1rem;
}
.header {
    align-items: center;
    justify-content: center;
    background-color: #94080D;
    color: white;
    border-color: black;
    border-radius: 0.9rem 0 0 0;
}
.v-btn  {
    background-color: #D9D9D9;
    border-radius: 0;
    font-size: 1.25vw;
    text-transform: capitalize;
    letter-spacing: 0.05vw;
    position: relative;
    border: solid;
    border-width: 0.05rem 0;
    border-color: black;
}
.reports    {
    float: left;
    margin: auto;
    width: 100%;
}
.icon   {
    margin: auto;
    font-size: 1vw;
    float: right;
    width: 20%;
    position: absolute; 
    right: 0; 
    top: 50%; 
    transform: translateY(-50%);
}
.title  {
    height: 10vh;
    font-weight: 600;
    font-size: 1.75vw;
    align-items: center;
    padding: 0 0 0 5vw;
}
.symbol-container {
    width: 10%;
    font-size: 1.65vw;
    margin: 0 0 0 4%;
}
.symbol {
    color: #46F381;
    background-color: transparent;
    border: solid;
    border-radius: 3rem;
    padding: 0 5%;
    width: 35%;
}
.office-name    {
    width: 60%;
    font-size: 1.25vw;
}
.date   {
    width: 30%;
    font-size: 1vw;
}

/* Global */
*   {
    outline: none;
}
.container  {
    width: 95%;
}
.left   {
    height: inherit;
    width: 30%;
    float: left;
    display: flex;
    flex-direction: column;
}
.right  {
    height: inherit;
    width: 70%;
    float: right
}
.v-btn, .header, .title, .status {
    display: flex;
    flex-direction: row;
    width: 100%;
}
.symbol-container, .symbol, .status, .progress-container, .progress, .value, .v-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.symbol-container, .symbol, .status, .progress-container    {
    flex-direction: row;
}
.symbol-container, .office-name, .date {
    height: inherit;
}
.office-name, .date {
    display: flex;
    align-items: center;
}
</style>