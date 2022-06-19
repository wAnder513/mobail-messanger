<template>
  <main-wrapper :hasBackButton="true" :title="title">
    <template v-slot:main>
      <div
        class="chat_wrapper"
        v-for="message in dialog.chatContact"
        :key="message.id"
      >
        <div v-if="message.isContact" class="chat_continer-contact">
          <div class="chat_contact">
            {{ message.message }}
          </div>
        </div>

        <div v-if="!message.isContact" class="chat_continer-user">
          <div class="chat_user">
            {{ message.message }}
          </div>
        </div>

        <div class="chat_time">
          {{ message.sendTime }}
        </div>
      </div>

      <div class="chat_message">
        <input class="chat_input" type="text" v-model="inputMessage" />
        
        <i v-if="hasInputMessage" class="material-icons chat_send" @click="sendMessage">send</i>
      </div>
    </template>
  </main-wrapper>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import MainWrapper from "../Wrapper/MainWrapper.vue";

export default {
  components: { MainWrapper },
  data() {
    return {
      inputMessage: "",
    };
  },
  computed: {
    ...mapGetters({ dialog: "getCurrentUserDialog" }),
    hasInputMessage() {
      return this.inputMessage && this.inputMessage.length > 0
    },
    title() {
      return this.dialog.name;
    },
  },
  methods: {
    ...mapActions(['getContacts']),
    sendMessage() {
      let contact, newMessage = {};

      newMessage = {
        id: new Date().toLocaleString(),
        isContact: false,
        message: this.inputMessage,
        sendTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
        sendDate: `0${
          new Date().getMonth() + 1
        } ${new Date().getDate()} ${new Date().getFullYear()}`,
      };

      contact = { ...this.dialog };
      contact.chatContact.push(newMessage);

      axios.put("http://localhost:3000/contacts/" + this.dialog.id, contact);

      this.getContacts()
      this.inputMessage = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.chat_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;
}

.chat_contact {
  background-color: #217c7c;
  margin-right: auto;
  border-radius: 0 10px 10px 10px;
}

.chat_continer-contact,
.chat_continer-user {
  width: 70%;
  display: inline-flex;
}

.chat_continer-contact {
  margin-right: auto;
}

.chat_continer-user {
  margin-left: auto;
}

.chat_user {
  margin-left: auto;
  background-color: rgb(56, 119, 56);
  border-radius: 10px 0 10px 10px;
}

.chat_user,
.chat_contact {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  color: #fff;
}

.chat_time {
  margin-bottom: 10px;
  font-size: 14px;
}

.chat_continer-contact + .chat_time {
  margin-right: auto;
}

.chat_continer-user + .chat_time {
  margin-left: auto;
}

.chat_message {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5px 10px;
}

.chat_input {
  width: 85%;
  padding: 5px;
  font-size: 18px;
  margin-right: 5px;
}

.chat_send {
  font-size: 30px;
}
</style>
