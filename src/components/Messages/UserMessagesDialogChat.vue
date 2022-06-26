<template>
  <main-wrapper :hasBackButton="true" :title="title">
    <template v-slot:main>
      <user-messages-dialog-chat-message
        v-for="message in dialog.chatContact"
        :key="message.id"
        :message="message"
      >
      </user-messages-dialog-chat-message>

      <div class="chat_message">
        <input class="chat_input" type="text" v-model="inputMessage" />

        <i
          v-if="hasInputMessage"
          class="material-icons chat_send"
          @click="sendMessage"
          >send</i
        >
      </div>
    </template>
  </main-wrapper>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import MainWrapper from "../Wrapper/MainWrapper.vue";
import UserMessagesDialogChatMessage from "./UserMessagesDialogChatMessage.vue";

export default {
  components: { MainWrapper, UserMessagesDialogChatMessage },
  data() {
    return {
      inputMessage: null,
      timeMessage: null,
    };
  },
  computed: {
    ...mapGetters({
      dialog: "getCurrentUserDialog",
      dateMessage: "getDateMessage",
    }),
    hasInputMessage() {
      return this.inputMessage && this.inputMessage.length > 0;
    },
    title() {
      return this.dialog.name;
    },
  },
  methods: {
    ...mapActions(["getContacts", "getCurrentDateMessage"]),
    sendMessage() {
      let contact,
        newMessage = {};

      newMessage = {
        id: new Date().toLocaleString(),
        isContact: false,
        message: this.inputMessage,
        sendTime: `${
          new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours()
        }:${
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes()
        }`,
        sendDate: `${("0" + (new Date().getMonth() + 1)).slice(
          -2
        )} ${new Date().getDate()} ${new Date().getFullYear()}`,
      };

      contact = { ...this.dialog };
      contact.chatContact.push(newMessage);

      axios.put("http://localhost:3000/contacts/" + this.dialog.id, contact);

      this.getContacts();
      this.inputMessage = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.chat_input {
  width: calc(100% - 50px);
  padding: 5px;
  font-size: 18px;
  margin-right: 5px;
}

.chat_send {
  font-size: 30px;
}

.chat_message {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5px 10px;
}
</style>
