<script>
export default {
    
}
</script>
<template>
    <div class="container">
        <div class="top-nav">
            <div class="title-box">
                <div class="title">Performance-Based Bonus Dashboard</div>
                <div class="fy">FY 2023</div>
                <div class="quarter">Current Quarter: Q3</div>
            </div>
            <div class="navigation-container">
                    <nav>
                        <RouterLink to="/landing/pbb/status-dashboard" class="nav-button">Status Dashboard</RouterLink>
                        <RouterLink to="/landing/pbb/submissions" class="nav-button">Submissions</RouterLink>
                        <RouterLink to="/landing/pbb/admin" class="nav-button">Admin</RouterLink>
                    </nav>
            </div>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<style scoped>
/* left */
.top-nav    {
    height: 30vh;
}
.title-box  {
    float: left;
}
.title  {
    font-size: 1.75vw;
    color: #94080D;
    font-weight: 600;
}
.fy {
    font-size: 1vw;
}
.quarter    {
    font-size: 1vw;
    font-weight: 600;
}
.navigation-container   {
    float: right;
}

/* right */
nav    {
    width: 90%;
}
.nav-button    {
    width: 33%;
    font-size: 1vw;
    text-align: center;
    height: 7.5vh;
    border-radius: 0.75rem 0.75rem 0 0;
    color: black;
    background-color: #D9D9D9;
    cursor: pointer;
    transition: 0.5s all ease;
}
.nav-button:hover   {
    color: white;
    background-color: #858585;
}

/* Global */
*   {
    /* border: solid;
    border-width: 0.05rem; */
    outline: none;
}
.container{
    height: 120vh;
}
.title-box, .navigation-container   {
    height: inherit;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title, .fy, .quarter   {
    width: 100%;
    padding: 0 0 0 5vh;
}
nav, .nav-button   {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
}
</style>