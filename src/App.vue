<script>
export default {
  name: 'App'
}
</script>
<template>
  <div class="container">
    <aside class="ly_link-menu">
      <ul class="links">
        <li>
          <router-link to="/">TopPage</router-link>
        </li>
        <li>
          <router-link to="/sub-page">SubPage</router-link>
        </li>
      </ul>

    </aside>
    <main class="ly_main">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
}

.ly_link-menu {
  width: 22%;
  order: 1;
}

.links {
  width: 100%;
  font-size: 0.8rem;
  white-space: break-spaces;
  list-style: none;
  padding-left: 0;
  overflow-wrap: break-word;
}

.ly_main {
  max-width: 75%;
  order: 2;
  display: flex;
  justify-content: flex-start;
}
</style>