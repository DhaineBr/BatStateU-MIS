<script>
import DoughnutChartKist from '@/components/pages/charts/offices/kistDoughnut.vue'

export default {
    components: {
        DoughnutChartKist
    },
    data()  {
        const cards = []
        const cardLabel = [
            'Current Office Ranking',
            'PBB Eligibility',
            'Pending Reports'
        ]
        const cardData = ['4th', 'Eligible', '4']
        for(let i = 0; i < 3; i++)  {
            const card = {
                label: cardLabel[i],
                value: cardData[i]
            }

            cards.push(card)
        }

        return  {
            cards
        }
    },
    methods: {
        goToOffices() {
        this.$router.push({ name: 'offices' });
        },
        openModal() {
        this.$refs.modal.openModal();
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <div class="button-cont">
                    <button class="back" @click="goToOffices"><mdicon name="chevron-left" class="icon"/></button>
                </div>
                <div class="title">Human Resource Management Office</div>
                <div class="officer">Current Office Director : John Doe</div>
                <div class="link">Organization Chart</div>
            </div>
            <div class="right">
                <div class="donut-chart"><DoughnutChartKist/></div>
                <div class="area-chart"> </div>
                <div class="cards">
                    <div v-for="(card, index) in cards" :key="index" class="backdrop">
                        <div class="label">{{ card.label }}</div>
                        <div class="value">{{ card.value }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>
<style scoped>
/* Top-left */
.left   {
    float: left;
    width: 32.5%;
}
.button-cont    {
    height: 15vh;
}
.back   {
    background-color: #94080D;
    color: white;
    border-radius: 0.35rem;
    font-size: 1vw;
    width: 7%;
    transition: 0.3s all ease;
}
.back:hover   {
    color: #94080D;
    background-color: white;
}
.title  {
    font-size: 3.5vw;
    line-height: 1.25;
    color: #94080D;
    font-weight: 600;
    height: 30vh;
}
.officer    {
    font-size: 1vw;
    margin: 5vh 0 1vh 0;
}
.link    {
    font-size: 1vw;
    color: #D00412;
    text-decoration: underline;
}

/* Top-right */
.donut-chart    {
    float: left;
    width: 15%;
    margin: 10vh 0 0 0;
    padding: 15vh 0 0 0;
    height: 40vh;
}
.area-chart    {
    float: left;
    width: 25%
}
.cards  {
    float: right;
    width: 27.5%;
    padding: 15vh 0 0 0
}
.backdrop {
    background-color: #D9D9D9;
    height: 6vh;
    width: 16.5vw;
    margin: 7.5% 0;
    border-radius: 0.4rem;
    font-size: 1vw;
    display: flex;
}
.label   {
    bottom: 0;
    height: inherit;
    background-color: #D00412;
    color: white;
    font-size: 1vw;
    border-radius: 0.4rem;
    padding: 0 5%;
    float: left;
    width: max-content;
    float: left
}
.value  {
    float: right;
    height: inherit;
    flex-grow: 1;
}

/* Bottom */
.bottom {
    height: 100vh;
    width: 100%;
}

/* Global */
*   {
    border-width: 0.01rem;
}
.left, .right   {
    height: inherit;
}
.top, .area-chart, .cards    {
    height: 60vh;
}
.left, .title, .officer, .link, .container, .button-cont, .back, .label, .value, .cards  {
    display: flex;
    flex-direction: column;
}
.button-cont, .title, .officer, .link   {
    width: 100%;
    padding: 0 0 0 10%;
    justify-content: center;
}
.label, .value, .cards  {
    align-items: center;
    justify-content: center;
}
</style>