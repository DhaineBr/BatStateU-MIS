<script>
</script>

<template>
    <div class="container">
        <div class="nav">
            <div class="left">
                <div class="header">University Management <br>
                <span>Information</span> System
                </div>
                <div class="footer">
                Central System for Managing and Processing Data 
                <br>of Batangas State University  
                </div>
            </div>
            <div class="right">
                <nav>
                    <RouterLink to="/landing/dashboard/overview" class="nav-button">Overview</RouterLink>
                    <RouterLink to="/landing/dashboard/qsstars" class="nav-button">QS Stars</RouterLink>
                    <RouterLink to="/landing/dashboard/the" class="nav-button">THE</RouterLink>
                    <RouterLink to="/landing/dashboard/scopus" class="nav-button">Scopus</RouterLink>
                    <RouterLink to="/landing/dashboard/altmetric" class="nav-button">Altmetric</RouterLink>
                    <RouterLink to="/landing/dashboard/misfactbook" class="nav-button"><mdicon name="dots-horizontal" class="icon"/></RouterLink>
                </nav>
            </div>
        </div>
    </div>
    <div class="content">
        <RouterView /> 
    </div>
</template>

<style scoped>
.container  {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 35vh;
}

/* Navigation */
.nav, .left, .right    {
    height: 25vh;
}

/* Left or title */
.left   {
    float: left;
    width: 50%;
}
.header {
  font-weight: bolder;
  font-size: 2.75vw;
  color: #94080D;
  line-height: 1.25;
  margin: 10% 0 0 0;
}
.footer  {
  font-size: 1vw;
  font-weight: 100;
  line-height: 1;
}
span  {
  color: #EC061D;
  font-weight: 600;
}
.content    {
    height: 65vh;
}

/* Right or navigation buttons */
.right  {
    float: right;
    width: 50%;
}
nav {
    text-align: right;
    width: 90%;
    margin-top: 22.5%;
}
.nav-button, .icon {
    color: #94080D;
    font-size: 1vw;
    margin: 0 1%;
    background-color: transparent;
    padding: 1% 1.5%;
}
.nav-button:active, .nav-button:focus, .icon:active, .icon:focus {
    background-color: #94080D;
    color: white;
}

/* Global */
*   {
    border: hidden;
    background-color: #F5F5F5;
    outline: none;
}
.header, .footer    {
    width: 90%;
    text-align: left;
    padding: 0 0 0 5%;
}
.left, .right   {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
</style>
