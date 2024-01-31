<script>
    export default {
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
                    <div class="chart-one"></div>
                    <div class="chart-two"></div>
                    <div class="chart-three"></div>
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
            
        </div>
        <div class="activities">
            <div class="title">Activities</div>
        </div>
    </div>
</template>
<style scoped>

*   {
    border: hidden;
    outline: none;
}

/* Left Side */
.left   {
    width: 75vw;
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
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0.121875rem 0.121875rem 0.1625rem;
}

.qpro, .pbb {
    float: left;
    width: 40%;
    font-size: 2.25vw;
    font-weight: 700;
    color: #94080D;
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
    height: 35vh;
    padding: 0 0 0 2.5%;
}

.visualization  {
    height: 50vh;
}

.title  {
    font-weight: 900;
    color: #94080D;
    font-size: 1vw;
    width: 100%;
}

.chart-container    {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 20vh;
}
.chart-one, .chart-two, .chart-three    {
    width: 30%;
    margin: auto;
    height: 15vh;
}

.summary    {
    height: 40vh;
}

.summary-header {
    background-color: #94080D;
    color: white;
    height: 5vh;
    font-size: 1vw;
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
    width: 25vw;
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


</style>