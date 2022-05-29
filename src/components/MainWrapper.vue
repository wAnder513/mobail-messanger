<template>
  <header>
    <div v-if="hasBackButton" class="wrapper_back" @click="backToPreviousPage">
      <i class="material-icons wrapper_icon">arrow_back_ios_icon</i>
      <div>Back</div>
    </div>

    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <main-wrapper-footer></main-wrapper-footer>
  </footer>
</template>

<script>
import MainWrapperFooter from "./MainWrapperFooter.vue";

export default {
  components: {
    MainWrapperFooter,
  },
  props: {
    hasBackButton: { type: Boolean, default: false },
  },
  methods: {
    backToPreviousPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
header,
footer {
  background-color: #c3c3c3;
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

main {
  padding: 10px;
  // height: 300px;
  overflow-x: auto;
}

footer {
  height: 40px;
  justify-content: space-between;
  flex: 1 1 auto;
}

.wrapper_back {
    display: flex;
    align-items: center;
}

.wrapper_icon {
    width: 20px;
    margin-right: 5px;
}
</style>