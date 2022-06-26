<template>
  <div class="message_wrapper">
    <div v-if="message.isContact" class="message_continer-contact">
      <div class="message_contact">
        {{ message.message }}
      </div>
    </div>

    <div v-if="!message.isContact" class="message_continer-user">
      <div class="message_user">
        {{ message.message }}
      </div>
    </div>

    <div class="message_time">
      {{ message.sendTime }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  props: {
    message: Object,
    dateMessageCurrent: { type: null || String },
  },
};
</script>

<style scoped lang="scss">
.message_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
}

.message_contact {
  background-color: #217c7c;
  margin-right: auto;
  border-radius: 0 10px 10px 10px;
}

.message_continer-contact,
.message_continer-user {
  width: 70%;
  display: inline-flex;
}

.message_continer-contact {
  margin-right: auto;
}

.message_continer-user {
  margin-left: auto;
}

.message_user {
  margin-left: auto;
  background-color: rgb(56, 119, 56);
  border-radius: 10px 0 10px 10px;
}

.message_user,
.message_contact {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  color: #fff;
}

.message_time {
  margin-bottom: 10px;
  font-size: 14px;
}

.message_continer-contact + .message_time {
  margin-right: auto;
}

.message_continer-user + .message_time {
  margin-left: auto;
}
</style>