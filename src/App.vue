<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {

  // Redirect to the landing page
  router.push({ name: 'landing' });
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <div class="login" v-if="$route.name === 'login'">
    <div class="welcome">
      <div class="text">
        <div class="header">University Management <br>
          <span>Information</span> System
        </div>
        <div class="footer">
          Central System for Managing and Processing Data 
          <br>of Batangas State University  
        </div>
      </div>
    </div>
    <div class="login-window">         
      <h2>Login</h2>
      <div class="input-fields">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
      </div>
      <button @click="handleLogin">Login</button>
    </div>
  </div>
  <router-view v-if="$route.name !== 'login'"></router-view>
</template>

<style scoped>

* {
  border: hidden;
  font-family: 'Inter', sans-serif;
  background-color: #F5F5F5;
  outline: none;
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #f0f0f0; 
}

.login  {
  width: 100vw;
  height: 100vh;
}


/* Left Side */
.welcome  {
  width: 60%;
  float: left;
  background-color: transparent;
}

.header {
  font-weight: bolder;
  font-size: 2.75vw;
  padding: 0 0 0 10%;
  color: #94080D;
  margin: 60vh 0 0 0;
  line-height: 1.25;
}

.footer  {
  padding: 0 0 0 10%;
  font-size: 1vw;
  font-weight: 100;
  line-height: 1;
}

span  {
  color: #EC061D;
  font-weight: 600;
}


/* Right Side */
.login-window {
  background-color: #D00412;
  color: white;
  width: 40%;
  float: right;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
}

h2  {
  background-color: transparent;
  margin: 50% 0 0 0;
}

.input-fields {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  text-align: center;
  margin: 3% 0 0 0;
}

input, button {
  font-size: 1.25vw;
  margin: 3.5% auto 0 auto;
  padding: 2% 5%;
  border-radius: 0.35rem;
  width: 80%;
  border: solid;
  border-color: black;
  border-width: 0.15vw;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625rem 1.25rem, rgba(0, 0, 0, 0.23) 0px 0.375rem 0.375rem;
}

button {
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  color: #94080D;
  font-weight: 400;
  cursor: pointer;
  padding: 1%;
  background-color: white;
}

::placeholder {
  font-weight: 100;
  opacity: 0.5;
}
.welcome, .login-window {
  height: 100vh;
}


*::-webkit-scrollbar {
  width: 1rem;
}

*::-webkit-scrollbar-thumb {
  background-color: #d4d4d4; 
  border-radius: 0.5rem; 
}

*::-webkit-scrollbar-track {
  background-color: #f0f0f0;    
}

</style>
