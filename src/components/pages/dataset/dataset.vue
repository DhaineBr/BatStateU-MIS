<script>
export default {
    data()  {
        const links = [
            'KSIT Park Development Office',
            'Action Center',
            'Office of the Secretary',
            'Presidential Project Management Office',
            'Office of Culture and Arts ',
            'Office of Sports',
            'Testing and Admission Office',
            'Office of Sports',
            'Office of Curriculum and Instructions',
            'Center for Transformative Learning',
            'Office of Quality Assurance Management ',
            'Center for Innovation in Engineering Education',
            'Legal Affairs Office',
            'Office of the Board of Regents',
            'Scholarship Office'
        ]
        return  {
            links
        }
    }
}
</script>
<template>
    <div class="left">
        <div class="top">
            <div class="title">Dataset</div>
            <div class="subtext">Contains documentation of data being regulated within
            <br>the Management Information System (MIS) Office</div>
        </div>
        <div class="bottom">
            <div class="box">
                <div class="header">Office of Human Resources</div>
                <div class="text">
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Ab quia sequi eos perspiciatis dolorem quo porro consequatur qui unde maxime et suscipit esse et rerum voluptatem et aliquam aliquam.</li>
                    <li>Et aliquam dignissimos ut assumenda delectus ut officia saepe sed doloribus itaque!</li>
                    <li>Ut dignissimos impedit et voluptas sunt aut debitis soluta aut necessitatibus explicabo est voluptas consequuntur non voluptas inventore!</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="top-nav">
            <div class="search-container">
                <input type="text" placeholder="Search for an office">
                <div class="icon"><mdicon name="magnify" style="margin: 0" class="icon"/></div>
            </div>
        </div>
        <div class="bottom">
            <div class="link-container">
                <nav>
                    <RouterLink v-for="(link, index) in links" :key="index" 
                    :to="`/landing/dataset/${link.toLowerCase().replace(/\s+/g, '-')}`" class="link">
                        {{link}}
                        <mdicon name="chevron-right" class="icon"/>
                    </RouterLink>                                              
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Left Side */
.left   {
    float: left;
    width: 47.5%;
    height: 90vh;
}   
.top {
    color: #94080D;
    height: 20vh;
}
.title {
    font-size: 2.25vw;
    font-weight: 700;
    width: 85%;
}
.subtext    {
    font-size: 1.25vw;
    width: 85%;
    line-height: 1;
}
.box    {
    width: 85%;
    height: 90vh;
    background-color: #EEEEEE;
    border: solid;
    border-radius: 1rem;
    border-width: 0.05rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0 0.125rem 0.5rem 0rem;
}
.header {
    height: 10vh;
    width: 85%;
    font-size: 1.75vw;
    display: flex;
    text-align: left;
    justify-content: left;
    align-items: center;
    color: #94080D;
    font-weight: 500;
}
.text   {
    height: 72.5vh;
    width: 80%;
    font-size: 1vw;
    font-weight: 600;
    line-height: 1.25;
}

/* Right Side */
.right {
    float: right;
    width: 52.5%;
    height: 90vh;
}
.top-nav {
    height: 37.5vh;
    width: 80%;
    align-self: flex-end;
}
.search-container   {
    text-align: right;
    justify-content: right;
    width: 85%;
    height: 7.5vh;
    border: solid;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    border-width: 0.05rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0 0.125rem 0.5rem 0rem;
    margin-right: 0
}
input[type='text']  {
    font-size: 1.25vw;
    padding: 1.5% 4%;
    width: 90%;
    height: 4vh;
    background-color: white;
}
.icon   {
    width: 10%;
    height: 4vh;
    background-color: transparent;
    margin: 0 0 0 auto;
}
.link-container {
    width: 87.5%;
    height: 65vh;
    background-color: transparent;
}
.link   {
    height: 6vh;
    border: solid;
    border-radius: 0.5rem;
    border-width: 0.05rem;
    color: #D00412;
    font-size: 1vw;
    padding: 0 0 0 4%;
    cursor: pointer;
    transition: all 0.5s ease;
}
.link:hover {
    background-color: #D00412;
    color: white;
}

/* Global */
*   {
    background-color: #F5F5F5;
    outline: none;
}
.top, .bottom, .icon, .box, .right, .top-nav    {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header, .text, ul, li  {
    background-color: transparent;
}
.bottom {
    height: 100vh;
    color: black;
    width: 100%;
}
::placeholder   {
    opacity: 0.5;
}
.search-container, .link   {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>