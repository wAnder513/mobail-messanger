<template>
  <main-wrapper :title="title">
    <template v-slot:header></template>
    <template v-slot:main>
      <user-contacts-item
        v-for="(contact, index) in contacts"
        :key="`${contact.id}-${index}`"
        :contact="contact"
      ></user-contacts-item>
    </template>
  </main-wrapper>
</template>

<script>
import { mapGetters } from 'vuex'
import MainWrapper from '../Wrapper/MainWrapper.vue'
import UserContactsItem from './UserContactsItem.vue'

export default {
  components: {
    MainWrapper,
    UserContactsItem
  },
  data () {
    return {
      title: 'Contacts'
    }
  },
  computed: {
    ...mapGetters({ contacts: 'getContacts' })
  }
}
</script>

<style scoped lang="scss"></style>
