<template>
  <main-wrapper :hasBackButton="true" :title="title">
    <template v-slot:header></template>
    <template v-slot:main>
      <user-messages-dialog v-for="contact in contacts" :key="contact.id" :contact="contact">
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
  data() {
    return {
      title: "Messages",
    };
  },
  computed: {
    ...mapGetters({ contacts: "getContacts" }),
  },
};
</script>
