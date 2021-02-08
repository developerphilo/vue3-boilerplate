<template>
  <div class="error">
    <h1>404</h1>
    <p>Ooops this page doesn’t exist</p>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 4em;
  letter-spacing: 2px;
}
p {
  font-size: 1.5em;
  letter-spacing: 2px;
  padding-bottom: 4%;
}
a {
  padding: 13px 32px;
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
</style>
