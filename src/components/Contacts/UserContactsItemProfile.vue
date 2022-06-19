<template>
  <main-wrapper :hasBackButton="true" :title="currentContact.name">
    <template v-slot:main>
      <div class="profile">
        <img
          :src="require('../../assets/' + currentContact.profilePhoto)"
          class="profile_photo"
        />

        <div class="profile_container">
          <div class="profile_phone">{{ currentContact.phone }}</div>

          <div class="profile_name">
            <button class="profile_call">Call</button>
            <button class="profile_chat">Start chat</button>
          </div>
        </div>
      </div>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters } from 'vuex'
import MainWrapper from '../Wrapper/MainWrapper.vue'

export default {
  components: {
    MainWrapper
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      currentContact: 'getCurrentContactProfile'
    })
  }
}
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
