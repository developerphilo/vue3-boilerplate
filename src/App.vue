<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue3 Boilerplate" />
</template>

<script>
import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() =>
  import(/*webpackChunkName: "Helloworld"*/ "@/components/HelloWorld")
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
  background: rgb(214, 212, 212);
  overflow: hidden;
}
img {
  padding-top: 10%;
}
</style>
