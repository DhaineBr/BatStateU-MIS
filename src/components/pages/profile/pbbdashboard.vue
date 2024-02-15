<script>
import OverallPbbProgress from '@/components/pages/charts/pbbDashboard/overallPbbStatus.vue'
import ProgressStatus from '@/components/pages/charts/pbbDashboard/progressStatus.vue'
import chatPopUp from '@/components/pages/charts/pbbDashboard/chatPopUp.vue'

export default  {
    components: {
        OverallPbbProgress,
        ProgressStatus,
        chatPopUp
    },
    data()  {
        const learnMoreTooltip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sollicitudin orci, quis accumsan eros. Maecenas ultrices elit ac mollis porttitor. Duis tempor venenatis"
        // dummy data
        const higherEd = [
            'Outcome Indicator 1: Percentage of first time licensure exam takers',
            'Outcome Indicator 2: Percentage of graduates (2 years prior) that are employed',
            'Outcome Indicator 3: Percentage of undergraduate students enrolled in CHED-identified  and RDC-identified priority programs',
            'Outcome Indicator 4: Percentage of undergraduate programs with accreditation'
        ]
        const advancedEd = [
            'Outcome Indicator 5: Percentage  of graduate school faculty engaged in research work',
            'Outcome Indicator 1 (State University): Percentage  of graduate school faculty enrolled in research degree program',
            'Outcome Indicator 2: Percentage  of graduate programs with accreditation'
        ]
        return  {
            higherEd,
            advancedEd,
            learnMoreTooltip
        }
    },
    methods: {
        goToProfile() {
        this.$router.push({ name: 'profile' });
        },
        openModal() {
        this.$refs.modal.openModal();
        }
        
    }
}
</script>
<template>
    
    <div class="top">
        <div class="head" style="width: 100%;">
            <button class="back" @click="goToProfile"><mdicon name="chevron-left" class="icon"/></button>
        </div>
        <div class="summary">
            <div class="left-most">
                <div class="title">Performance-Based Bonus</div>
                <div class="subtitle">FY 2023</div>
                <div class="quarter">Current Quarter: Q3</div>
            </div>
            <div class="middle">
                
            </div>
            <div class="right-most">
                <div class="backdrop"><div class="card">Current Office Ranking</div><div class="value" style="color:black; width: 27.25%">1st</div></div>
                <div class="backdrop"><div class="card">PBB Eligibility</div><div class="value" style="color: #159300; width: 51%">Eligible</div></div>
            </div>
        </div>
    </div>
    <div class="left">
        <div class="header" style="border: solid; border-width: 0 0.25rem 0 0;">
            Progress
        </div>
        <div class="chart-one">
            <OverallPbbProgress/>
        </div>
        <div class="chart-two">
            <ProgressStatus/>
        </div>
    </div>
    <div class="right">
        <div class="header" style="border: solid; border-width: 0 0 0 0.25rem;">
            Tasks
        </div>
        <div class="content">
            <div class="head" style="height: 7vh">
                <div class="subhead" style="height: 7vh;">
                    Performance Results 
                </div>
                <div class="deadline">
                    Deadline: July 10, 2023 (10d)
                </div>
            </div>
            <div class="status">
                <div class="status-header">Higher Education</div>
                <div v-for="(task, index) in higherEd" :key="index" class="list" style="height: 7.5vh;">
                    <div class="list-item" style="height: 5vh; text-align: left; width: 100%">
                        <div class="status-box-false" style="margin: 0 1%"></div>
                        <div class="task">{{ task }}</div>
                        <div class="learn-more" style="margin: 0 1.5%">
                            <img src="./../../../assets/learn_more.svg" style="width: 1.5vw; opacity: 0.5">
                            <v-tooltip :text="learnMoreTooltip" activator="parent" location="start" class="tooltip">
                            </v-tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div class="status">
                <div class="status-header">Advanced Education</div>
                <div v-for="(task, index) in advancedEd" :key="index" class="list" style="height: 7.5vh;">
                    <div class="list-item" style="height: 5vh; text-align: left; width: 100%">
                        <div class="status-box-false" style="margin: 0 1%"></div>
                        <div class="task">{{ task }}</div>
                        <div class="learn-more" style="margin: 0 1.5%">
                            <img src="./../../../assets/learn_more.svg" style="width: 1.5vw; opacity: 0.5">
                            <v-tooltip :text="learnMoreTooltip" activator="parent" location="top" class="tooltip">
                            </v-tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <v-btn class="floating-button" stacked @click="openModal">
        <span style="font-size:1.25vw">
        <mdicon name="message-text-outline" class="icon"/>
        PBB
        </span>
    </v-btn>
</template>

<style scoped>
/* Top of the screen */
.top    {
    width: 100%;
    height: 35vh;
    background-color: white;
    border-radius: 0 0 1rem 1rem;
    margin: 0 0 3vh 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0.375rem 0.75rem -0.125rem, 
    rgba(0, 0, 0, 0.3) 0px 0.1875rem 0.4375rem -0.1875rem;
}
.back   {
    font-size: 2.5vw;
    background-color: #94080D;
    color: white;
    border-radius: 0.35rem;
}
.summary    {
    height: 35vh;
}
.left-most  {
    width: 40%;
}
.middle, .right-most {
    width: 30%
}
.backdrop {
    background-color: white;
    height: 6vh;
    width: 16.5vw;
    margin: 2.5% 0;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0.25rem 0.25rem 0.2rem;
    text-align: right;
    font-size: 1vw;
}
.card   {
    bottom: 0;
    height: inherit;
    background-color: #D00412;
    color: white;
    font-size: 1vw;
    border-radius: 0.4rem;
    padding: 0 5%;
    float: left;
}
.value  {
    height: inherit;    
    float: right;
}

/* Bottom Left side */
.left   {
    float: left;
    height: 120vh;
    width: 27.5%;
}
.chart-one {
    height: 30vh;
}
.chart-two  {
    height: 45vh
}

/* Bottom right side */
.right  {
    float: right;
    height: 120vh;
    width: 72.5%;
}
.content    {
    height: 100vh;
    width: 95%;
    margin: 5vh 0 0 4%
}
.subhead    {
    text-align: left;
    color: white;
    width: 50%;
    background-image: linear-gradient(to right, #D00412 , #F5F5F5);
}
.deadline   {
    width: 50%;
    text-align: right;
}
.list       {
    display: flex;
    flex-direction: row;
    align-items:start;
    justify-content:left;
    text-align: left;
}
/* Global */
*   {
    border: none;
    border-width: 0.01rem;
}
.top, .icon, .left-most, .middle, .right-most, .card, .value, .chart-one, .chart-two, .list, img   {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.summary  {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
}
.left-most, .middle, .right-most    {
    height: 25vh;
}
.title, .subtitle, .quarter {
    width: 100%;
    padding: 0 0 0 7.5%;
}
.title  {
    color: #94080D;
    font-weight: 600;
    font-size: 2.25vw;
}
.subtitle   {
    font-weight: 100;
}
.quarter    {
    font-weight: 600;
    padding-top: 2.5%
}
.subtitle, .quarter {
    color: #000000;
    font-size: 1.25vw;
}
.header    {
    background-color: #D00412;
    color: white;
    padding: 0 0 0 5%;
    font-size: 1.5vw;
    line-height: 2.25;
}
.head, .subhead, .list-item  {
    height: 10vh;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    padding: 0 0 0 1%
}
.subhead, .deadline {
    font-size: 1.25vw;
    height: 6.5vh;
}

.chart-one, .chart-two  {
    margin: 5vh 0 0 0 
}
.left, .right   {
    display: flex;
    flex-direction: column;
}
.status-header  {
    padding: 2% 0 1% 2%;
    font-size: 1.25vw;
    font-weight: 600
}
.status-box-false {
    height: 3.5vh;
    width: 1.6vw;
    background-color: white;
    border-radius: 0.15rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0rem 0.125rem 0.5rem 0rem;
    border: solid;
    border-width: 0.1rem;
}
.tooltip    {
    width: 85%;
    font-size: 0.5vw;
}
/* Floating Button */
.floating-button   {
    background-color: #94080D;
    color: white;
    border-radius: 4rem;
    position: fixed;
    bottom: 2vh; 
    right: 2vw; 
}
</style>