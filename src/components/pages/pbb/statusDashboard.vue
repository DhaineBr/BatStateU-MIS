<script>
  export default {
    // data: () => ({
    //   items: [
    //     { title: 'Office of Academic Affairs' },
    //     { title: 'Office of Academic Affairs' },
    //     { title: 'Office of Academic Affairs' },
    //     { title: 'Office of Academic Affairs' },
    //   ],

    // }),

    data()  {
        const items = [
            'Office of Academic Affairs 1', 
            'Office of Academic Affairs 2'
        ]
        const offices = [
            'Performance Results',
            'Process Results',
            'Financial Results',
            'Citizen/Client Satisfaction Report',
            'Agency Accountabilities'
        ]
        const officeDropdown = []

        for(let i = 0; i < 4; i++)  {
            const office = {
                item: items[i % items.length],
                office: offices [i]
            }

            officeDropdown.push(office)
        }
        return  {
            items,
            officeDropdown
        }
    }
  }

</script>
<template>
    <div class="container">
        <div class="summary">
            <div class="left">

            </div>
            <div class="right">

            </div>
        </div>
        <div class="status-list">
            <div style="font-size: 1.25vw;" class="left">
                <div style="height: 7vh;" class="header">Offices</div>
                <v-menu v-for="(office, index) in officeDropdown" :key="index">
                    <template v-slot:activator="{ props }">
                        <v-btn style="height: 7vh;" v-bind="props">{{office.office}}<mdicon name="chevron-right" class="icon"/></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in officeDropdown" :key="index" :value="index">
                        <v-list-item-title>{{ item.item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="right">
                <div class="title">Office submission status</div>
                <div class="office-status">
                    <div class="symbol">
                        <mdicon name="check"/>
                        <div class="office-name"></div>
                        <div class="date"></div>
                    </div>
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

/* status-list */
.status-list    {
    height: 100vh;
}
.header {
    align-items: center;
    justify-content: center;
    background-color: #94080D;
    color: white;
}
.v-btn  {
    background-color: #D9D9D9;
    border-radius: 0;
    font-size: 1.25vw;
    justify-content: flex-start;
    text-transform: capitalize;
    letter-spacing: 0.05vw;
    position: relative;
}
.icon   {
    margin: 0 0 0 35vw;
    position: absolute;
    font-size: 1vw;
}
.title  {
    height: 10vh;
    font-weight: 600;
    font-size: 1.75vw;
    align-items: center;
    padding: 0 0 0 5vw;
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
.left   {
    height: inherit;
    width: 30%;
    float: left
}
.right  {
    height: inherit;
    width: 70%;
    float: right
}
.v-btn, .header, .title {
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>