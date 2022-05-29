<template>
  <main-wrapper :hasBackButton="true">
    <template v-slot:header></template>
    <template v-slot:main>
      <user-messages-dialog v-for="user in users" :key="user.id" :user="user">
      </user-messages-dialog>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import MainWrapper from "./MainWrapper.vue";
import UserMessagesDialog from "./UserMessagesDialog.vue";

export default {
  components: {
    MainWrapper,
    UserMessagesDialog,
  },
  created() {
    this.sortMessages()
  },
  computed: {
    ...mapGetters({ users: "getUsers" }),
  },
  methods: {
    sortMessages() {
      this.users.sort((a, b) => {
        return a - b;
      });

      return this.users;
    },
  },
};
</script>

<style scoped lang="scss">
</style>