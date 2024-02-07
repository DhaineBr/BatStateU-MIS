<script>
import OverallData from '@/components/pages/charts/performanceStats/overallData.vue'
import PbbGrading from '@/components/pages/charts/performanceStats/pbbGrading.vue'

export default {
    components: {
        OverallData,
        PbbGrading,
    },
    methods: {
        goToPbbdashboard() {
        this.$router.push({ name: 'pbbdashboard' });
        }
    }
};
</script>

<template>
    <div class="left">
        <div class="visualization">
            <div class="header">
                OFFICE OF
            </div>
            <div class="campus">
                Campus: Central
            </div>
            <div class="submissions">
                <div class="title">Submissions</div>
                <div class="card-container">
                    <div class="card">
                        <div class="qpro">QPRO</div>
                        <div class="text">Quarterly</div>
                    </div>
                    <div class="card" @click="goToPbbdashboard">
                        <div class="pbb">PBB</div>
                        <div class="text">Performance Based Bonus (Q3)</div>
                    </div>
                </div>
            </div>
            <div class="perf-stats">
                <div class="title">Performance Statistics</div>
                <div class="chart-container">
                    <div class="chart-one"><OverallData /></div>
                    <div class="chart-two"><PbbGrading /></div>
                    <div class="chart-three"> 
                        <select v-model="selectedOption" placeholder="2023">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <progress max="100" :value="100" class="progress-bar"></progress>
                        <progress max="100" :value="100" class="progress-bar"></progress>
                        <progress max="100" :value="50" class="progress-bar"></progress>
                        <progress max="100" :value="0" class="progress-bar"></progress>
                    </div>
                </div>
            </div>
        </div>
        <div class="summary">
            <div class="summary-header">
                MIS Office: Summary of data
            </div>
        </div>
    </div>
    <div class="right">
        <div class="calendar">
            <VCalendar transparent borderless/>
        </div>
        <div class="activities">
            <div class="title">Activities</div>
        </div>
    </div>
</template>
<style scoped>
/* Left Side */
.left   {
    width: 75%;
    height: 90vh;
    float: left;
}
.header {
    font-size: 2vw;
    color: #94080D;
    font-weight: 700;
}
.campus {
    font-size: 1.5vw;
    font-weight: 400;
}
.submissions    {
    height: 15vh;
    padding: 0 0 0 2.5%;
}
.card-container {
    display: flex;
    flex-direction: row;
}
.card   {
    border-radius: 0.5rem;
    width: 20vw;
    background-color: white;
    margin: 0 5% 0 0;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0.121875rem 0.121875rem 0.1625rem;
}
.qpro, .pbb {
    float: left;
    width: 40%;
    font-size: 2.25vw;
    font-weight: 700;
    color: #94080D;
    background-color: #FFFFFF;
}
.text   {
    float: right;
    width: 60%;
    text-align: left;
    line-height: 1;
    font-size: 1.15vw;
    color: black
}
.perf-stats {
    height: 40vh;
    padding: 0 0 0 2.5%;
}
.visualization  {
    height: 65vh;
}
.title  {
    font-weight: 900;
    color: #94080D;
    font-size: 1vw;
    width: 100%;
}
.chart-container    {
    height: 27.5vh;
    width: 100%;
}
.chart-one, .chart-two, .chart-three    {
    margin: auto;
    height: 25vh;
}
.chart-one, .chart-two  {
    width: 25%
}
.chart-three    {
    width: 50%;
}
.summary    {
    height: 40vh;
}
.summary-header {
    background-color: #94080D;
    color: white;
    height: 7.5vh;
    font-size: 1vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0.375rem 0.75rem -0.125rem, rgba(0, 0, 0, 0.3) 0px 0.1875rem 0.4375rem -0.1875rem;
}
.title, .summary-header, .header, .campus   {
    align-items: center;
    justify-content: left;
    display: flex;
}
.summary-header, .header, .campus   {
    padding: 0 0 0 2.5%;
}

/* Right Side */
.right   {
    width: 25%;
    height: 90vh;
    float: right;
}
.calendar   {
    height: 40vh;
}
.activities {
    height: 50vh;
    padding: 2.5% 0 0 2.5%;
}
.calendar, .activities  {
    box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.0625rem 0.25rem;
}

/* Global */
*   {
    border: solid;
    outline: none;
    border-width: 0.01rem;
}
.perf-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.card, .chart-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.progress-bar   {
    width: 20vw;
    height: 2.5vh
}
.progress-bar::-webkit-progress-bar {
    background-color: #D9D9D9;
    border-radius: 1rem;
}
.progress-bar::-webkit-progress-value {
    background-color: #D00412;
    border-radius: 1rem;
}
</style>