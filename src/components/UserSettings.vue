<template>
  <main-wrapper :hasBackButton="true" :title="title">
    <template v-slot:main>
      <form class="settings_form" @submit.prevent="submitSettingsForm">
        <label class="settings_wrapper">
          <input type="checkbox" class="settings_checkbox" v-model="checked" />
          <span class="settings_check-input"></span>
          Dark theme
        </label>

        <button type="submit" class="settings_submit">Submit</button>
      </form>
    </template>
  </main-wrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainWrapper from "./Wrapper/MainWrapper.vue";

export default {
  components: {
    MainWrapper,
  },
  data() {
    return {
      checked: false,
    };
  },
  created() {
    this.checked = this.isDarkTheme;
  },
  computed: {
    ...mapGetters({ isDarkTheme: "getTheme" }),
    title() {
      return "Settings";
    },
  },
  methods: {
    ...mapActions(["getTheme"]),
    submitSettingsForm() {
      this.getTheme(this.checked);
    },
  },
};
</script>

<style scoped lang="scss">
.settings_wrapper {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.settings_form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

// Styles for checkbox
.settings_checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.settings_checkbox:checked + .settings_check-input {
  background-image: url(../assets/checkbox/on.svg);
}

.settings_checkbox:focus + .settings_check-input {
  background-image: url(../assets/checkbox/off-focused.svg);
}

.settings_checkbox:checked:focus + .settings_check-input {
  background-image: url(../assets/checkbox/on-focused.svg);
}

.settings_checkbox:disabled + .settings_check-input {
  background-image: url(../assets/checkbox/off-disabled.svg);
}

.settings_checkbox:checked:disabled + .settings_check-input {
  background-image: url(../assets/checkbox/on-disabled.svg);
}
// Styles for checkbox End

.settings_check-input {
  position: absolute;
  margin-left: -25px;
  width: 20px;
  height: 20px;
  background-image: url(../assets/checkbox/off.svg);
}

.settings_submit {
  border: none;
  background-color: rgb(4, 77, 4);
  color: #fff;
  padding: 5px 10px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 5px;
  width: min-content;
  margin: 0 auto;
  letter-spacing: 1px;
}
</style>