<script></script>
<template>
    <div class="container">
        <div class="nav">
            <div class="title">
                <div class="header">BatStateU Database</div>
                <div class="footer">Admin access site</div>
            </div>
            <div class="search-container">
                <div class="search">
                    <div class="icon"></div>
                    <input type="text" placeholder="Search for files">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="filters">
                <div class="year">
                    <div class="head"></div>
                </div>
                <div class="office">
                    <div class="head"></div>
                </div>
                <div class="file-type">
                    <div class="head"></div>
                </div>
            </div>
            <div class="table-container"><v-data-table :items="items"></v-data-table></div>
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
    width: 30%;
    height: inherit;
}
.search {
    background-color: white;
    border-radius: 0.5rem;
    height: 7vh;
    border-width: 0.05rem;
}
.icon   {
    float: left;
    width: 10%;
}
input[type='text']  {
    float: right;
    width: 90%;
    font-size: 1.5vw;
}

/* Bottom content */
.content    {
    height: 72.5vh;
}
.filters    {
    float: left;
    width: 20%;
    height: inherit;
    padding-top: 12vh;
}
.year, .office, .file-type  {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
}
.table-container  {
    float: right;
    width: 80%;
    height: inherit;
}

/* Global */
*   {
    border: solid;
    outline: none;
}
.nav, .content, .search, .search-container {
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
}
.header, .footer, .search {
    width: 100%;
}
.icon, input[type='text']   {
    height: 5vh;
    border: hidden;
    background-color: transparent;
}
::placeholder   {
    opacity: 0.5;
}
</style>