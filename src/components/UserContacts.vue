<template>
  <main-wrapper>
    <template v-slot:header>its header</template>
    <template v-slot:main>
        <user-contacts-item
          v-for="(user, index) in users"
          :key="`${user.id}-${index}`"
          :user="user"
        ></user-contacts-item>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import MainWrapper from "./MainWrapper.vue";
import UserContactsItem from "./UserContactsItem.vue";

export default {
  components: {
    MainWrapper,
    UserContactsItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ users: "getUsers" }),
  },
};
</script>

<style scoped lang="scss">

</style>