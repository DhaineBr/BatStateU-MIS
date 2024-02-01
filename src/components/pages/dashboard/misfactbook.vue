<script>

</script>
<template>
    <div class="container">
        <nav>
            <div class="top">
                <div class="backdrop"><div class="card">Faculty and Staff Members</div></div>
                <div class="backdrop"><RouterLink to="/landing/dashboard/studentfactbook"><div class="card">Students</div></RouterLink></div>
                <div class="backdrop"><div class="card">Admissions</div></div>
                <div class="backdrop"><div class="card">Enrollment</div></div>
                <div class="backdrop"><div class="card">Graduate Degrees Conferred</div></div>
            </div>
            <div class="bottom">
                <div class="backdrop"><div class="card">Career Path and Employment Status</div></div>
                <div class="backdrop"><div class="card">Research</div></div>
                <div class="backdrop"><div class="card">International</div></div>
                <div class="backdrop"><div class="card">Industry - University - Government Collaboration</div></div>
                <div class="backdrop"><div class="card">Finance</div></div>
            </div>
        </nav>
    </div>
</template>
<style scoped>

/* Global */
*   {
    border: none;
}

.container  {
    height: 65vh;
}

.top, .bottom    {
    height: 32.5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.card {
  position: absolute;
  bottom: 0;
  height: 15vh;
  width: 16.5vw;
  background-color: #94080D;
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}

.backdrop {
  position: relative; 
  background-color: #DADADA;
  height: 23.5vh;
  width: 16.5vw;
  margin: 0 1%;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0.15rem 0rem 0.1rem;
}


</style>