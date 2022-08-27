<template>
  <main-wrapper :hasBackButton="true" :title="currentContact.name">
    <template v-slot:main>
      <div class="profile">
        <img
          :src="require('../../assets/' + currentContact.profilePhoto)"
          class="profile_photo"
        />

        <div class="profile_container">
          <a class="profile_phone" :href="'tel:' + currentContact.phone">{{
            currentContact.phone
          }}</a>

          <div class="profile_name">
            <a :href="'tel:' + currentContact.phone" class="profile_call">Call</a>
            <button class="profile_chat" @click="addContactChat">
              Start chat
            </button>
          </div>
        </div>
      </div>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainWrapper from "../Wrapper/MainWrapper.vue";

export default {
  components: {
    MainWrapper,
  },
  computed: {
    ...mapGetters({
      currentContact: "getCurrentContactProfile",
    }),
  },
  methods: {
    ...mapActions(["getCurrentUserDialog"]),
    addContactChat() {
      this.getCurrentUserDialog(this.currentContact);

      this.$router.push({ path: "/message" });
    },
  },
};
</script>

<style scoped lang="scss">
.profile_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile_phone {
  font-size: 18px;
}

.profile_call {
  margin-right: 5px;
  background-color: green;
  text-decoration: none;
}

.profile_chat {
  background-color: darkred;
}

.profile_call,
.profile_chat {
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  color: #fff;
}

.profile_photo {
  width: 100%;
  height: 390px;
  margin-bottom: 10px;
}
</style>
