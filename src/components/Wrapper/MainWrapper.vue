<template>
  <header>
    <div v-if="hasBackButton" class="wrapper_back" @click="backToPreviousPage">
      <i class="material-icons wrapper_icon">arrow_back_ios_icon</i>
      <div>Back</div>
    </div>

    <span>{{ title }}</span>
  </header>
  <main :class="interfaceTheme">
    <slot name="main"></slot>
  </main>
  <footer>
    <main-wrapper-footer></main-wrapper-footer>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import MainWrapperFooter from "./MainWrapperFooter.vue";

export default {
  components: {
    MainWrapperFooter,
  },
  props: {
    hasBackButton: { type: Boolean, default: false },
    title: { type: String, default: "" },
  },
  created() {},
  computed: {
    ...mapGetters({ isDark: "getTheme" }),
    interfaceTheme() {
      return this.isDark ? "dark-theme" : "white-theme";
    },
  },
  methods: {
    backToPreviousPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
header,
footer {
  background-color: #c3c3c3;
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  padding: 10px;
  overflow-x: auto;
}

.dark-theme {
  background-color: black;
  color: white;
}

footer {
  height: 40px;
  justify-content: space-between;
  flex: 1 1 auto;
}

.wrapper_back {
  position: absolute;
  display: flex;
  left: 10px;
}

.wrapper_icon {
  width: 20px;
  margin-right: 5px;
}
</style>
