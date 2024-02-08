<script>
import { PrimeIcons } from 'primevue/api';
export default  {
    methods: {
        goToProfile() {
        this.$router.push({ name: 'profile' });
        }
    }
}
</script>
<template>
    <div class="top">
        <div class="head">
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
                <div class="backdrop"><div class="ranking-card"></div></div>
                <div class="backdrop"><div class="eligibility-card"></div></div>
            </div>
        </div>
    </div>
    <div class="left">
        <div class="header">
            Progress
        </div>
    </div>
    <div class="right">
        <div class="header">
            Tasks
        </div>
    </div>
</template>

<style scoped>

/* Top of the screen */
.top    {
    width: 100vw;
    height: 35vh;
    border-radius: 0 0 1rem 1rem;
    margin: 0 0 3vh 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0.375rem 0.75rem -0.125rem, 
            rgba(0, 0, 0, 0.3) 0px 0.1875rem 0.4375rem -0.1875rem;
}
.head   {
    height: 10vh;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    width: 100%;
    padding: 0 0 0 1%
}
.back   {
    font-size: 2.5vw;
    background-color: #94080D;
    color: white;
    border-radius: 0.35rem;
}
.summary    {
    height: 25vh;
}
.left-most  {
    width: 40%;
}
.middle, .right-most {
    width: 30%
}

/* Bottom Left side */
.left   {
    float: left;
    height: 65vh;
    width: 27.5%;
}

/* Bottom right side */
.right  {
    float: right;
    height: 65vh;
    width: 72.5%;
}

/* Global */
*   {
    border: solid;
    border-width: 0.01rem;
}
.top, .icon, .left-most, .middle, .right-most   {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.summary    {
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
.left, .right   {
    display: flex;
    flex-direction: column;
}
</style>