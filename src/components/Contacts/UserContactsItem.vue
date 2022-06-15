<template>
  <div class="user" @click="getUserProfile">
    <div class="user-continer">
      <img
        class="user_avatar"
        :src="require('../../assets/' + contact.avatar)"
      />
      <div class="user_name">{{ contact.name }}</div>
    </div>

    <div class="user_online" :class="userOnline"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    contact: Object
  },
  computed: {
    userOnline () {
      return this.contact.online ? 'online' : 'offline'
    }
  },
  methods: {
    ...mapActions(['getCurrentContactsProfile']),
    getUserProfile () {
      this.getCurrentContactsProfile(this.contact)

      this.$router.push({
        path: '/profile',
        query: { id: this.contact.id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.user-continer {
  display: flex;
  align-items: center;
}

.user_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user_online {
  width: 15px;
  height: 15px;
  border-radius: 50%;

  &.online {
    background-color: rgb(0, 255, 72);
  }

  &.offline {
    background-color: rgb(255, 0, 0);
  }
}
</style>
