<template>
  <div id="app">
    <div class="title">Книга всего</div>
    
    <div class="header__box">
      <nav class="header">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/vue">VUE</router-link> |
        <router-link to="/vuex">VUEX</router-link> |
        <router-link to="/ideas">IDEAS</router-link>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  border: solid 2px silver;
}

.header__box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
