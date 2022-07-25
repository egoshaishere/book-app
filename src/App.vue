<template>
  <div id="app">
    APP
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue">VUE</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  border: solid 2px silver;
}
</style>
