<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/public">Public</router-link> |
    <router-link to="/protected">Protected</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang='scss' src='./style/index.scss'></style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
}
</style>