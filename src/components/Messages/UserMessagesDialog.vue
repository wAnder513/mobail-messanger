<template>
  <div class="dialog" @click="getCurrentDialog">
    <div class="dialog_container">
      <img
        :src="require('../../assets/' + contact.avatar)"
        class="dialog_avatar"
      />

      <div class="dialog_person">
        <div class="dialog_name">{{ contact.name }}</div>

        <div class="dialog_message">
          <img
            class="dialog_user-avatar"
            :src="require('../../assets/' + user.avatar)"
          />
          <span>{{ textLastMessage }}</span>
        </div>
      </div>
    </div>

    <div class="dialog_time">{{ timeLastMessage }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    contact: Object,
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
    textLastMessage() {
      let lastMessage = "";
      if (
        this.contact.chatContact[this.contact.chatContact.length - 1].message
          .length > 30
      ) {
        lastMessage =
          this.contact.chatContact[
            this.contact.chatContact.length - 1
          ].message.slice(0, 30) + "...";
      } else {
        lastMessage =
          this.contact.chatContact[this.contact.chatContact.length - 1].message;
      }
      return lastMessage;
    },
    timeLastMessage() {
      // date display in messages
      const currentDate = new Date();
      let visibleDate = "";

      if (
        // Today time //
        dayjs().format("MM.DD.YYYY") ===
        this.contact.chatContact[this.contact.chatContact.length - 1].sendDate
      ) {
        visibleDate =
          this.contact.chatContact[this.contact.chatContact.length - 1]
            .sendTime;
      } else if (
        // Yesterday //
        `${("0" + (currentDate.getMonth() + 1)).slice(-2)}.${
          currentDate.getDate() - 1
        }.${currentDate.getFullYear()}` ===
        this.contact.chatContact[this.contact.chatContact.length - 1].sendDate
      ) {
        visibleDate = "yesterday";
      } else if (
        // Mounth and Day //
        dayjs().format("YYYY") ===
        dayjs(
          this.contact.chatContact[this.contact.chatContact.length - 1].sendDate
        ).format("YYYY")
      ) {
        visibleDate = dayjs().format("MMM D");
      } else {
        // Mounth and Year //
        visibleDate = dayjs(
          this.contact.chatContact[this.contact.chatContact.length - 1].sendDate
        ).format("MMM YYYY");
      }

      return visibleDate;
    },
  },
  methods: {
    ...mapActions(["getCurrentUserDialog"]),
    getCurrentDialog() {
      this.getCurrentUserDialog(this.contact);

      this.$router.push({ path: "/message" });
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
  margin-right: 10px;
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
  font-weight: bold;
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
