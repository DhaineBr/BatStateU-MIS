<script>
export default {
    data()  {
        const reports = [
            'Performance Results',
            'Process Results',
            'Financial Results',
            'Citizen/Client Satisfaction Report',
            'Agency Accountabilities'
        ]
        const forms = [
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

        return  {
            reports,
            forms
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="left">
            <div class="header"></div>
        </div>
        <div class="right">

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
    height: 7.5vh;
}
/* right side */
.right  {
    float: right;
    width: 70%;
}
/* Global */
*   {
    outline: none;
    border: solid;
    border-width: 0.01rem;
}
.container  {
    width: 95%;
}
.left, .right   {
    height: inherit;
    display: flex;
    flex-direction: column;

}
</style>