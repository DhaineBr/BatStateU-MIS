<script></script>
<template>
    <div class="top">

    </div>
    <div class="left">
        <div class="header">
            Progress
        </div>
    </div>
    <div class="right">
        <div class="header">
            Tasks
        </div>
    </div>

</template>

<style scoped>

*   {
    border: solid;
}

/* Top of the screen */
.top    {
    width: 100vw;
    height: 25vh;
    border-radius: 0 0 1rem 1rem;
}

/* Bottom Left side */
.left   {
    float: left;
    height: 65vh;
    width: 27.5vw;
}

/* Bottom right side */
.right  {
    float: right;
    height: 65vh;
    width: 72.5vw;
}

/* Global */
.header    {
    background-color: #D00412;
    color: white;
    padding: 0 0 0 5%;
    font-size: 1.5vw;
    line-height: 2.25;
}
.left, .right   {
    display: flex;
    flex-direction: column;
}
</style>