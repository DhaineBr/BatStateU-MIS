<script>
export default {
    data()  {
        function generateRandomDate(startDate, endDate) {
        // Convert dates to timestamps
        const startTimestamp = startDate.getTime();
        const endTimestamp = endDate.getTime();
        // Generate a random timestamp within the range
        const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
        // Convert timestamp back to a Date object
        const randomDate = new Date(randomTimestamp);

        return randomDate;
        }


        // filters
        const years = ['2020-2021', '2021-2022', '2022-2023', '2023-2024']
        const offices = ['PBB', 'QPRO', 'QStar', 'SUC']
        const fileTypes = ['PDF', 'Excel', 'Docs/Word', 'PPT/Powerpoint', 'CSV'] 

        // dummy table data
        const tableData = []
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');

        for (let i = 0; i < 60; i++){
            const tableRow = {
                name: "Data File name " + (i + 1).toString(),
                datePublished: generateRandomDate(startDate, endDate),
                fileType: fileTypes[i % fileTypes.length],
            }
            tableData.push(tableRow)
        }

        return  {
            years,
            offices,
            fileTypes,
            tableData
        }
    },
    methods: {
        getNumericFormat(date) {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
}
</script>
<template>
    
    <div class="container">
        <div class="nav">
            <div class="title">
                <div class="header">BatStateU Database</div>
                <div class="footer">Admin access site</div>
            </div>
            <div class="search-container">
                <div class="search">
                    <div class="icon"><mdicon name="magnify"/></div>
                    <input type="text" placeholder="Search for files">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="filters">
                <div class="year">
                    <div class="head">Year</div>
                    <div v-for="(year, index) in years" :key="index" class="list">
                        <input type="checkbox" :value="year" v-model="filters">
                        <div class="text">{{ year }}</div>
                    </div>
                </div>
                <div class="office">
                    <div class="head">Office</div>
                    <div v-for="(office, index) in offices" :key="index" class="list">
                        <input type="checkbox" id="jack" :value="office" v-model="filters">
                        <div class="text">{{ office }}</div>
                    </div>
                </div>
                <div class="file-type">
                    <div class="head">File Type</div>
                    <div v-for="(fileType, index) in fileTypes" :key="index" class="list">
                        <input type="checkbox" id="jack" :value="fileType" v-model="filters">
                        <div class="text">{{ fileType }}</div>
                    </div>
                </div>
            </div>
            <div class="table-container">
                <v-data-table fixed-header class="table">
                    <thead>
                        <tr>
                            <th class="text-center">Name <button><mdicon name="swap-vertical"/></button></th>
                            <th class="text-center">Date published <button><mdicon name="swap-vertical"/></button></th>
                            <th class="text-center">File type</th>
                            <th class="text-center">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in tableData" :key="index">
                            <td>{{ data.name }}</td>
                            <td>{{ data.datePublished }}</td>
                            <td>{{ data.fileType }}</td>
                            <td><button><mdicon name="dots-horizontal"/></button></td>
                        </tr>
                    </tbody>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Top bar */
.nav {
    height: 17.5vh;
}
.title  {
    float: left;
    width: 60%;
    height: inherit;  
    color: #94080D;  
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 0 0 0 2%
}
.header {
    font-size: 2vw;
    font-weight: 600;
    line-height: 1;
}
.footer {
    font-size: 1.15vw;
    font-weight: 100;
    line-height: 1;
}
.search-container {
    float: left;
    width: 40%;
    height: inherit;
    margin: 0 0 0 0;
}
.search {
    background-color: white;
    border-radius: 0.75rem;
    height: 8vh;
    box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 0.0625rem, rgba(6, 24, 44, 0.65) 0 0.125rem 0.1875rem -0.03125rem, rgba(255, 255, 255, 0.08) 0 0.03125rem 0 inset;
    width: 80.5%;
}
.icon   {
    float: left;
    width: 10%;
}
input[type='text']  {
    float: right;
    width: 90%;
    font-size: 1.25vw;
}

/* Bottom content */
.content    {
    height: 110vh;
}
.filters    {
    float: left;
    width: 17.5%;
    height: inherit;
    padding-top: 5vh;
    font-size: 1vw;
}
.head   {
    font-weight: 600;
    margin: 0 0 2vh 0
}
.list   {
    width: 70%;
    text-align: left;
    display: flex;
    flex-direction: row;
}
.year, .office, .file-type  {
    height: 28vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
}
input[type="checkbox"]   {
    margin: 0 7.5%;
    cursor: pointer;
    width: 1vw;
    background-color: #94080D;
}
.table-container  {
    float: right;
    width: 82.5%;
    height: inherit;

}
.table  {
    width: 95%;
    border-radius: 0.75rem;
    height: 100%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 0.0625rem, rgba(6, 24, 44, 0.65) 0px 0.125rem 0.1875rem -0.03125rem, rgba(255, 255, 255, 0.08) 0px 0.03125rem 0px inset;
    font-size: 1vw;
}
thead   {
    background-color: #D9D9D9;
    position: sticky;
    border-radius: 0.75rem 0.75rem 0 0;
    width: 100%;
}
.table-header  {
    font-weight: 600;
    text-align: center;
}
/* Global */
*   {
    outline: none;
}
.container  {
    height: 132.5vh
}
.nav, .content, .search, .search-container, .icon {
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
}
.header, .footer {
    width: 100%;
}
.icon, input[type='text']   {
    height: 5vh;
    border: hidden;
    background-color: transparent;
}
::placeholder   {
    opacity: 0.75;
}
</style>