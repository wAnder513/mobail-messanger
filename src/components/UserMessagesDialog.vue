<template>
  <div class="dialog">
    <div class="dialog_container">
      <img :src="userAcvatar" class="dialog_avatar" />

      <div class="dialog_person">
        <div class="dialog_name">{{ user.name }}</div>
        <div class="dialog_message">{{ general.message }}</div>
      </div>
    </div>

    <div class="dialog_time">{{ general.time }}</div>
  </div>
</template>

<script>
import userAvatar from "../assets/images.png";

export default {
  data() {
    return {
      lastMessageContact: {
        sendTime: "",
      },
      lastMessageUser: {
        sendTime: "",
      },
      general: {
        time: "",
        message: "",
      },
    };
  },
  props: {
    user: Object,
  },
  created() {
    this.lastUserMessage();
  },
  computed: {
    userAcvatar() {
      return userAvatar;
    },
  },
  methods: {
    hasMessages(messages) {
      return messages && messages.length > 0;
    },
    lastUserMessage() {
      if (this.hasMessages(this.user.messagesContact)) {
        this.lastMessageContact =
          this.user.messagesContact[this.user.messagesContact.length - 1];
      } else {
        this.lastMessageContact.sendTime = "";
      }

      if (this.hasMessages(this.user.messagesCurrentUser)) {
        this.lastMessageUser =
          this.user.messagesCurrentUser[
            this.user.messagesCurrentUser.length - 1
          ];
      } else {
        this.lastMessageUser.sendTime = "";
      }

      if (this.lastMessageContact.sendTime > this.lastMessageUser.sendTime) {
        this.general.time = this.lastMessageContact.sendTime;
        this.general.message = this.lastMessageContact.message;
      } else {
        this.general.time = this.lastMessageUser.sendTime;
        this.general.message = this.lastMessageUser.message;
      }
    },
  },
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

.dialog_name {
  font-size: 18px;
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