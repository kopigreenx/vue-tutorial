<template>
  <nav>
  <div class="container">
    <div class="nav-wrapper">
      <Router-link to="/" class="brand-logo">Todo Apps</Router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/About">About</router-link></li>
          <li><router-link to="/Todo">Todo</router-link></li>
          <li><router-link to="/Login"> <i class="material-icons prefix">https</i></router-link></li>
      </ul>
    </div>
  </div>
  </nav>
</template>
