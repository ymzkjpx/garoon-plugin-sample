<template>
  <div class="jumbo">
    <img alt="Vue logo" src="@/assets/logo.png">
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TopPage',
  components: {
    HelloWorld
  }
}
</script>

<style>
.jumbo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
