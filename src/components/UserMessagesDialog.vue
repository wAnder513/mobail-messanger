<template>
  <div class="dialog">
    <div class="dialog_container">
      <img :src="require('../assets/' + contact.avatar)" class="dialog_avatar" />

      <div class="dialog_person">
        <div class="dialog_name">{{ contact.name }}</div>
        
        <div class="dialog_message">

          <img v-if="!contact.lastMessage.isContact" :src="require('../assets/' + user.avatar)"
          class="dialog_user-avatar"/>
          <span>{{ contact.lastMessage.message }}</span>
        </div>
      </div>
    </div>

    <div class="dialog_time">{{ timeLastMessage }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  props: {
    contact: Object,
  },
  computed: {
    ...mapGetters({ user: 'getUser'}),
    timeLastMessage() {
      const currentDate = new Date();
      let visibleDate = "";

      if (
        `0${
          currentDate.getMonth() + 1
        } ${currentDate.getDate()} ${currentDate.getFullYear()}` ===
        this.contact.lastMessage.sendDate
      ) {
        visibleDate = this.contact.lastMessage.sendTime;
      } else if (
        `0${currentDate.getMonth()} ${currentDate.getDate()} ${currentDate.getFullYear()}` ===
        this.contact.lastMessage.sendDate
      ) {
        visibleDate = "tomorrow";
      } else if (
        String(currentDate.getFullYear()) ===
        new Date(this.contact.lastMessage.sendDate).toLocaleDateString("en-US", {
          year: "numeric",
        })
      ) {
        visibleDate = new Date(
          this.contact.lastMessage.sendDate
        ).toLocaleDateString("en-US", { month: "short", day: "2-digit" });
      } else {
        visibleDate = new Date(
          this.contact.lastMessage.sendDate
        ).toLocaleDateString("en-US", { year: "numeric", month: "short" });
      }

      return visibleDate;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.dialog {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
}

.dialog_container {
  display: flex;
}

.dialog_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.dialog_user-avatar {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
}

.dialog_name {
  font-size: 18px;
  margin-bottom: 5px;
}

.dialog_message {
  font-size: 14px;
}

.dialog_person {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
}
</style>