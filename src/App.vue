<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Vue3 boilerplate" />
</template>

<script>
import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() =>
  import(/* webpackChunkName: “HelloWorld” */ "@/components/HelloWorld")
);

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #394a5c;
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(185, 29, 102) 0%,
    rgb(185, 29, 102) 50%,
    rgb(212, 42, 93) 50%,
    rgb(212, 42, 93) 100%
  );
  overflow: hidden;
}
img {
  padding-top: 10%;
}
</style>
