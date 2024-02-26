<script>
import Undergraduate from '@/components/pages/charts/studentFactbook/undergraduate.vue'

export default{
    name: 'charts',
    components: {
        Undergraduate
    },
    data()    {
        const headers = [
            'I. Undergraduate', 
            'II. Graduate School', 
            'III. Senior High School'
        ]
        const notes = [
            'Nam dignissim nisl eget velit fringilla scelerisque.',
            'Etiam vitae orci quis est varius mollis.',
            'Nullam non turpis at elit dictum consectetur ut vel velit.',
            'Vestibulum suscipit odio elementum ullamcorper cursus.'
        ]
        return  {
            headers,
            notes
        }
    },
    methods: {
        goToFactbook() {
        this.$router.push({ name: 'misfactbook' });
        },
        openModal() {
        this.$refs.modal.openModal();
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="top-cont">
            <div class="button-cont">
                <button class="back" @click="goToFactbook">
                    <mdicon name="chevron-left" class="icon"/>
                </button>
            </div>
            <div class="title">
                Students
            </div>
        </div>
        <div class="chart-cont" v-for="(header, index) in headers" :key="index">
            <div class="header">{{ header }}</div>
            <div class="chart"><Undergraduate /></div>
            <div class="notes">
                Notes:
                <li v-for="(note, index) in notes" :key="index">
                    {{ note }}
                </li>
            </div>
        </div>
    </div>
</template>
<style scoped>
.top-cont   {
    width: 100%;
    height: 20vh;
}
.button-cont    {
    height: 5vh;
}
.title  {
    font-size: 2.5vw;
}
.back   {
    background-color: #94080D;
    color: white;
    border-radius: 0.35rem;
    font-size: 1vw;
    width: 2%;
    transition: 0.3s all ease;
}
.back:hover   {
    color: #94080D;
    background-color: white;
}
.header, .button-cont, .title {
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
    width: 60%;
}
.notes  {
    float: right;
    width: 40%;
    font-weight: 600;
    font-size: 1vw;
}

/* Global */
*   {
    outline: none;
}
.container, .chart  {
    height: 180vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.chart, .notes  {
    height: 40vh;
}
</style>