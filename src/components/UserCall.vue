<template>
  <main-wrapper :hasBackButton="true" :title="title">
    <template v-slot:main>
      <div class="call_wrapper" v-for="contact in contacts" :key="contact.id">
        <img
          class="call_avatar"
          :src="require('./../assets/' + contact.avatar)"
        />

        <div class="call_container">
          <div class="call_name">{{ contact.name }}</div>

          <a :href="'tel:' + contact.phone" class="call_phone">{{
            contact.phone
          }}</a>
        </div>
      </div>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import MainWrapper from "./Wrapper/MainWrapper.vue";

export default {
  components: {
    MainWrapper,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ contacts: "getContacts" }),
    title() {
      return "Call";
    },
  },
};
</script>

<style scoped lang="scss">
.call_wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.call_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.call_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.call_name {
  margin-right: 10px;
  display: flex;
  text-align: start;
}

.call_name,
.call_phone {
  font-size: 18px;
}
</style>