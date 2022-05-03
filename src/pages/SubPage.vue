<script>
export default {
  name: 'SubPage',
  data() {
    return {
      message: 'SubPage'
    }
  },
}
</script>

<template>
  <div>
  <div>
    <h1>{{ message }}</h1>
  </div>
  <router-link to="/">TopPage</router-link>
  </div>
</template>