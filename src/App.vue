<template>
  <div class="app_wrapper"></div>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.getContacts();
    this.getUser();
  },
  methods: {
    ...mapActions(["getContacts", "getUser"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  font-size: 20px;
}

button {
  cursor: pointer;
}

a {
  color: rgb(0, 149, 255);
}

.app_wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
