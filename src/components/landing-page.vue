<script></script>
<template>
    <div class="container">

    
    <nav>
        <RouterLink to="/landing/mainmenu" class="main">
            <div class="img-container"><img src="https://dione.batstate-u.edu.ph/student/batsu_icon.png"></div>
            <div class="text">University MIS</div>
        </RouterLink>
        <RouterLink to="/landing/profile" class="nav-button">Profile</RouterLink>
        <RouterLink to="/landing/dashboard/overview" class="nav-button">Dashboard</RouterLink>
        <RouterLink to="/landing/dataset" class="nav-button">Dataset</RouterLink>
        <RouterLink to="/landing/pbb" class="nav-button">PBB</RouterLink>
        <RouterLink to="/landing/offices" class="nav-button">Offices</RouterLink>
    </nav>
    <div class="content">
        <RouterView /> 
    </div>

    </div>
</template>
<style scoped>

*   {
    border: hidden;
}

.container  {
    width: 100vw;
    height: 100vh;
}

nav {
    display: flex;
    flex-direction: row;
    height: 10vh;
    background-color: #D00412;
}

img {
    height: 7vh;
}
.nav-button, .main {
    display: flex;
    text-align: center;
    color: white;
}

.main   {
    width: 30vw;
    background-color: #94080D;
    font-size: 1.35vw;
}

.nav-button, .main, .img-container   {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.img-container  {
    width: 20%;
}

.nav-button {
    width: 10vw;
    font-size: 1.15vw;
}

.nav-button:active,
.nav-button:focus  {
    background-color: #94080D;
}
.content    {
    height: 90vh;
}
</style>