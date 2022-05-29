<template>
  <router-link class="link" to="/">
    <i class="material-icons">account_circle</i>
  </router-link>

  <router-link class="link" to="/messages">
    <i class="material-icons">message</i>
  </router-link>

  <router-link class="link" to="/settings">
    <i class="material-icons">settings</i>
  </router-link>

  <router-link class="link" to="/call">
    <i class="material-icons">call</i>
  </router-link>

  <router-link class="link" to="/home">
    <i class="material-icons">home</i>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.link {
    color: rgb(35, 35, 35);
}
</style>