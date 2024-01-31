<script>
</script>

<template>
    <div class="container">
        <div class="nav">
            <div class="left">
                <div class="header"></div>
                <div class="text"></div>
            </div>
            <div class="right">
                <div class="nav-buttons"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container  {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 600vh;
}

/* Navigation */
.nav, .left, .right    {
    height: 30vh;
}

/* Left or title */
.left   {
    float: left;
    width: 50%;
}
/* Right or navigation buttons */
.right  {
    float: right;
    width: 50%;
}
/* Global */
*   {
    border: solid;
    background-color: #F5F5F5;
    outline: none;
}

</style>
