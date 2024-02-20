<script>
export default {
    data()  {
        const results = [
            'Higher Education',
            'Advanced Education',
            'Research Services',
            'Techinical Advisory Services',
            'Re certification of QMS',
            'Modified Form A for SUCs Performance Report',
            'Citizen/Client Satisfaction Report',
            'Summary Report of Complaints Received through #8888 Hotline',
            'Forms 10',
            'Updating of Transparency Seal',
            'Compliance with the Freedom of Information (FOI) Program',
            'Submission and Review of SALN',
            'PhilGEPS posting of all invitations to bids and awarded contracts',
            'Submission of FY 2022 Annual Procurement Plan-Common Use Supplies and Equipment (APP-CSE)',
            'Undertaking of Early Procurement Activities covering 2022 Procurement Projects'
        ]
        const indicators = [
            'Outcome Indicator 1: Percentage of first time licensure exam takers',
            'Outcome Indicator 2: Number of successful completion of Licensure Examination',
            'Outcome Indicator 5: Percentage  of graduate school faculty engaged in research work'
        ]
        const forms = [
            'BSED September 2021',
            'Elementary Education September 2021',
            'Accountancy December 2021',
            'Nutritionist Dietitian 2021',
            'Nursing November 2021'
        ]
        return  {
            results,
            indicators,
            forms
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="left">
            <div class="header">Performance Results</div>
            <div v-for="(result, index) in results.slice(0, 4)" :key="index" class="form">{{ result }}</div>
            <div class="header">Process Results</div>
            <div v-for="(result, index) in results.slice(4, 5)" :key="index" class="form">{{ result }}</div>
            <div class="header">Financial Results</div>
            <div v-for="(result, index) in results.slice(5, 6)" :key="index" class="form">{{ result }}</div>
            <div class="header">Citizen Client Satisfaction Results</div>
            <div v-for="(result, index) in results.slice(6, 9)" :key="index" class="form">{{ result }}</div>
            <div class="header">Agency Accountabilities</div>
            <div v-for="(result, index) in results.slice(10, 15)" :key="index" class="form">{{ result }}</div>
        </div>
        <div class="right">
            <div class="head">Higher Education</div>
            <div v-for="(indicator, index) in indicators" :key="index" style="margin: 2% 0 0 0" class="summary">
                <div class="status"></div>
                <div class="outcome">
                    <div class="icon-container"><mdicon name="check" class="status-icon"/></div> 
                    <div style="font-weight: 600" class="indicator">{{ indicator }}</div>
                </div>
                <v-table>
                    <tbody>
                        <tr v-for="(form, index) in forms" :key="index">
                            <td style="color: #46F381; width: 5%"><mdicon name="circle"/></td>
                            <td>{{ form }}</td>
                            <td>07-12-2021</td>
                        </tr>
                    </tbody>
                </v-table>
                <div class="button-container">
                    <v-btn style="background-color: #94080D;">Add</v-btn>
                    <v-btn style="background-color: #D00412;">Submit</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* left side */
.left   {
    float: left;
    width: 30%;
}
.header {
    background-color: #94080D;
    color: white;
}
/* right side */
.right  {
    float: right;
    width: 70%;
}
.head   {
    font-size: 1.5vw;
    font-weight: 600;
    color: #94080D;
    width: 100%;
    margin: 0 0 2.5% 0;
}
.icon-container {
    width: 3%;
    font-size: 1.65vw;
}
.status-icon    {
    color: #46F381;
    background-color: transparent;
    border: solid;
    border-radius: 3rem;
    width: 3.5%;
}
.summary, .v-table    {
    font-size: 1vw;
}
.v-table    {
    width: 90%;
    margin: 0 0 0 auto
}
.v-table tr:nth-child(odd) {
    background-color: #F5F5F5;
}
.v-table tr:nth-child(even) {
    background-color: #C1C1C1;
}
.button-container   {
    width: 30%;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    height: 7.5vh;
}
.v-btn  {
    border-radius: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.05vw;
    margin: 1% 0 0 5%;
    font-size: 1vw;
    height: 2vh;
    color: white;
    box-shadow: none;
}
/* Global */
*   {
    outline: none;
    /* border: solid;
    border-width: 0.01rem; */
}
.container  {
    width: 95%;
}
.left, .right   {
    height: inherit;
    display: flex;
    flex-direction: column;
}
.header, .head, .form, .outcome, .indicator  {
    display: flex;
    align-items: center;
    padding: 0 0 0 4.75%;
    height: 7.5vh;
}
.header, .form {
    font-size: 1vw
}
</style>