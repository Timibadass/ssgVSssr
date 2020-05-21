<template>
  <div class="container">
    <h1 class="title">Hello World!</h1>
    <Logo />
    <p
      class="subtitle"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsa vitae tempora perferendis, voluptate a accusantium itaque vel ex, provident autem quod rem saepe ullam hic explicabo voluptas, libero distinctio?</p>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 800px;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>