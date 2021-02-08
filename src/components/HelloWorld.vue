<template>
  <div class="hello">
    <h1>Vue 3 Boilerplate</h1>
    <h1>{{ msg }}</h1>

    <p>
      For a guide on how to customize this project,<br />
      check out
    </p>

    <div class="links">
      <a
        href="https://github.com/developerphilo/vue3-boilerplate"
        target="_blank"
        rel="noopener"
        >Vue 3 boilerplate repo</a
      >

      <a href="https://v3.vuejs.org/" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >
    </div>
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
  padding-bottom: 2%;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 2.2em;
}
a {
  padding: 15px 32px;
  background: rgb(12, 138, 29);
  color: #eeeeee;
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1em;
  margin-right: 1%;
}
a:hover {
  background: #eeeeee;
  color: rgb(12, 138, 29);
}
.links {
  display: flex;
  justify-content: center;
}
</style>
