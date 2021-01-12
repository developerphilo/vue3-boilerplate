<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <a href="https://v3.vuejs.org/" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
    <a
      href="https://github.com/developerphilo/vue3-boilerplate"
      target="_blank"
      rel="noopener"
      >Vue3 boilerplate repo</a
    >.
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
p {
  padding: 3% 0;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 2em;
}
a {
  color: #42b983;
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1em;
}
</style>
