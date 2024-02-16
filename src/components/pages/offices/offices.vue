<script>
export default {
    data()  {
        const offices = [
            {
                acronymOne: 'OUP',
                acronymTwo: '',
                name:  'Office of the University President'
            },
            {
                acronymOne: 'OVP',
                acronymTwo: 'FAA',
                name:  'Office of the Vice President for Academic Affairs '
            },
            {
                acronymOne: 'OVP',
                acronymTwo: 'RDES',
                name:  'Office of the Vice President for Research, Development, and Extension Services '
            },
            {
                acronymOne: 'OVP',
                acronymTwo: 'FAF',
                name:  'Office of the Vice President for Administration and Finance'
            },
            {
                acronymOne: 'OVP',
                acronymTwo: 'DEA',
                name:  'Office of the Vice President for Development and External Affairs'
            },
        ]
        const oupOffices = [
            'KSIT Park Development Office',
            'Action Center',
            'Office of the Secretary ',
            'Office of the Board of Regents',
            'Internal Audit Services Office',
            'Presidential Project Management Office',
            'Center for Innovation in Engineering Education',
            'Legal Affairs Office'
        ]
        const ovpfaaOffices = [
            'Office of Culture and Arts',
            'Office of Sports',
            'Office of Curriculum and Instructions',
            'Office of Student Affairs and Services',
            'Scholarship Office',
            'Testing and Admission Office',
            'Center for Transformative Learning',
            'Office of Quality Assurance Management'
        ]
        const ovprdesOffices = [
            'Office of Research, Development, and Extension Services',
            'Office of Industry, Energy and Emerging Technology Research',
            'Office of Agriculture, Aquatic, and Natural Resources Research',
            'Office of Integrated Basic and Applied Research',
            'Research Management Office',
            'Research Publication Management Office',
            'Knowledge and Technology Transfer Management Office',
            'Extension Services Office',
            'Community Development Office',
            'Extension Monitoring and Impact Assessment Office',
            'Gender and Development Advocacies Office',
            'Management and Health Research Office',
            'STEER Hub'
        ]
        const ovpfafOffices = [
            'Office of Administration and Impact Assessment',
            'Office of Administration Services ',
            'Human Resource Management Office ',
            'Finance Services Office ',
            'Accounting Office ',
            'Budget Office ',
            'Procurement Office ',
            'Records Office ',
            'General Services Office ',
            'Cashiering Office ',
            'Project Management Office ',
            'Health Services Office',
        ]
        const ovpdaeOffices = [
            'Development and  External Services Office',
            'ICT Service Office',
            'Network and Systems Administration Services Office',
            'ICT Special Project Office',
            'Electronic System Research Center Office',
            'GIS Application Development Center',
            'External Affairs ',
            'Auxiliary Services Office',
            'Digital Transformation Center',
            'Manufacturing Research Center',
            'ICT Operations Office',
            'Institutional Planning and Development Office',
            'ICT Operations Office ',
            'Material Testing and Calibration Center',
            'Analytical Research Center Office',
            'Food Innovation Center',
            'Social Innovation Research Center',
            'Management Information System Office',
            'Center for Technopreneurship and Innovation',
            'VIP Corals Office - Lobo',
            'VIP Corals Office - Nasugbu'
        ]
        return  {
            offices,
            oupOffices,
            ovpfaaOffices,
            ovprdesOffices,
            ovpfafOffices,
            ovpdaeOffices
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <div class="header" style="margin-top: 2%">
                    <div class="head">Report Submission</div>
                    <div class="caption">Submit report in CSV File with proper<br>documentation and format of data</div>
                </div>
                <div class="search-container">
                    <div class="search">
                        <input type="text" placeholder="Search for an office">
                        <div class="icon"><mdicon name="magnify" class="icon"/></div>
                    </div>
                </div>
                <div class="header" style="margin-top: 3%">
                    <div class="head">Head Offices </div>
                    <div class="caption">Find your Office under these head offices</div>
                </div>
            </div>
            <div class="right">
                <img src="@/assets/offices.svg" style="width: 35vw; margin: 0 0 4vh 0">
            </div>
        </div>
        <nav class="main-nav">
            <RouterLink v-for="(office, index) in offices" :key="index" :to="`/landing/offices/${office.acronymOne.toLowerCase()}${office.acronymTwo.toLowerCase()}`" class="main-card">
                <div class="left" style="font-size: 2.75vw; font-weight: 600; line-height: 1;">{{ office.acronymOne }} <br> {{ office.acronymTwo }}</div>
                <div class="right" style="font-size: 0.85vw;  font-weight: 500; padding-right: 5%;">{{ office.name }}</div>
            </RouterLink>
        </nav>
        <div class="level-one">
            <div class="title">
                <div class="line-one"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
                <div class="office-title">Office of the University President</div>
                <div class="line-two"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
            </div>
            <nav class="card-container" style="height: 40vh; width: 100%">
                <RouterLink  v-for="(oupOffice, index) in oupOffices" :key="index" 
                :to="`/landing/${oupOffice.trim().toLowerCase().replace(/\s+/g, '-')}`" class="card">
                    {{ oupOffice }}
                </RouterLink>
            </nav>
        </div>
        <div class="level-two">
            <div class="title">
                <div class="line-one"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
                <div class="office-title">Office of the Vice President for Academic Affairs</div>
                <div class="line-two"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
            </div>
            <nav class="card-container" style="height: 40vh; width: 100%">
                <RouterLink  v-for="(ovpfaaOffice, index) in ovpfaaOffices" :key="index" 
                :to="`/landing/offices/ovpfaa/${ovpfaaOffice.trim().toLowerCase().replace(/\s+/g, '-')}`" class="card">
                    {{ ovpfaaOffice }}
                </RouterLink>
            </nav>
        </div>
        <div class="level-three">
            <div class="title">
                <div class="line-one" style="width:15%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
                <div class="office-title" style="width:65%">Office of the Vice President for Research, Development, and Extension Servicess</div>
                <div class="line-two" style="width:15%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
            </div>
            <nav class="card-container" style="height: 55vh; width: 100%">
                <RouterLink  v-for="(ovprdesOffice, index) in ovprdesOffices" :key="index" 
                :to="`/landing/offices/ovprdes/${ovprdesOffice.trim().toLowerCase().replace(/\s+/g, '-')}`" class="card">
                    {{ ovprdesOffice }}
                </RouterLink>
            </nav>
        </div>
        <div class="level-four">
            <div class="title">
                <div class="line-one" style="width:20%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
                <div class="office-title" style="width:55%">Office of the Vice President for Administration and Finance</div>
                <div class="line-two" style="width:20%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
            </div>
            <nav class="card-container" style="height: 55vh; width: 100%">
                <RouterLink  v-for="(ovpfafOffice, index) in ovpfafOffices" :key="index" 
                :to="`/landing/offices/ovpfaf/${ovpfafOffice.trim().toLowerCase().replace(/\s+/g, '-')}`" class="card">
                    {{ ovpfafOffice }}
                </RouterLink>
            </nav>
        </div>
        <div class="level-five">
            <div class="title">
                <div class="line-one" style="width:20%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
                <div class="office-title" style="width:55%">Office of the Vice President for Development and External Affairs</div>
                <div class="line-two" style="width:20%"><hr style="width:100%; border: solid; border-width: 0.01rem;"></div>
            </div>
            <nav class="card-container" style="height: 90vh; width: 100%">
                <RouterLink  v-for="(ovpdaeOffice, index) in ovpdaeOffices" :key="index" 
                :to="`/landing/offices/ovpdae/${ovpdaeOffice.trim().toLowerCase().replace(/\s+/g, '-')}`" class="card">
                    {{ ovpdaeOffice }}
                </RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
/* Main Nav */
.top    {
    height: 55vh;
}
.head   {
    font-weight: 600;
    font-size: 2vw;
    color: #94080D;
}
.caption    {
    font-weight: 100;
    font-size: 1.1vw;
    line-height: 1;
    color: #94080D;
}
.search {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8vh;
    border-radius: 0.75rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0rem 0.0625rem 0.125rem 0rem, rgba(60, 64, 67, 0.15) 0rem 0.125rem 0.375rem 0.125rem;
    border: solid;
    border-width: 0.01rem;
}
input[type='text']  {
    width: 85%
}
.icon   {
    height: inherit;
    width: 10%;
    font-size: 2vw;
    text-align: right;
}

/* Main Nav */
.main-nav   {
    height: 35vh
}
.main-card  {
    height: 22vh;
    background-color: #D00412;
    box-shadow: rgba(0, 0, 0, 0.15) 0.5rem 0.5rem 0.15rem;
}
.card   {
    height: 12.5vh;
    background-color: #94080D;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0.1875rem 0.375rem, rgba(0, 0, 0, 0.23) 0px 0.1875rem 0.375rem;
    padding: 2%;
    font-size: 1vw;
    font-weight: 500;
}
.acronym    {
    font-size: 3vw;
    width: 70%
}
.meaning    {
    font-size: 1.25vw;
    width: 30%
}
.level-three, .level-four   {
    height: 67.5vh;
}
/* Global */
*   {
    outline: none;
}
.container  {
    height: 500vh
}
.left, .right, .card  {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.left   {
    float: left;
    height: inherit;
    width: 55%;
}
.right  {
    float: right;
    height: inherit;
    width: 45%
}
.header, .search-container    {
    width: 90%;
    margin: 0 0 3% 0
}
.main-card, .main-nav, .title  {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
}
.level-one, .level-two  {
    height: 50vh;
}
.level-one, .level-two, .line-one, .line-two   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card-container  {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
.main-card, .card  {
    width: 17.25vw;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
    margin: auto 1% auto 1%
}
.title  {
    width: 100%;
    height: 7.5vh;
    margin: 2.5vh 0 2vh 0;
    color: #94080D
}
.office-title   {
    width: 35%;
    text-align: center;
    font-size: 1.25vw;
    font-weight: lighter;
}
.level-five {
    height: 120vh;
}
.level-one, .level-two, .level-three, .level-four, .level-five {
    margin: 2.5% 0 7.5% 0;
}
.line-one, .line-two    {
    width: 30%;
    height: inherit;
}
::placeholder, input[type='text']   {
    font-size: 1vw;
}
::placeholder   {
    opacity: 0.75
}
</style>