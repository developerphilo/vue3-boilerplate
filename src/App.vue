<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: calc(10px + 0.33vw);
  scroll-behavior: smooth;
  text-align: center;
  color: #394a5c;
  width: 100%;
  height: 100vh;
  position: relative;
  background: rgb(214, 212, 212);
  overflow: hidden;
}
img {
  padding-top: 8%;
}
</style>
