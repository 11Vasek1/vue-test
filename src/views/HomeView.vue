<template>
  <form class="form">
    <input v-model="email" type="text" class="input" placeholder="email" />
    <input
      v-model="password"
      type="text"
      class="input"
      placeholder="password"
    />
    <button class="button" @click="submit">login</button>
    <div
      v-if="isMessageShow"
      class="messages form__messages"
      :class="{
        messages_error: !isCorrect,
        messages_success: isCorrect,
      }"
    >
      {{ message }}
    </div>
  </form>
</template>

<script>
import { isCorrectLoginPassword } from "@/api/auth";

export default {
  name: "HomeView",
  components: {},

  data: function () {
    return {
      email: "",
      password: "",
      isCorrect: false,
      isMessageShow: false,
      message: "",
    };
  },

  watch: {
    email() {
      this.hideMessage();
    },

    password() {
      this.hideMessage();
    },
  },

  methods: {
    submit(event) {
      event.preventDefault();
      const answer = isCorrectLoginPassword(this.email, this.password);
      this.isCorrect = answer.isCorrect;
      if (answer.isCorrect) {
        this.$store.commit("login");
      } else {
        this.$store.commit("logout");
      }
      this.message = answer.message;
      this.showMessage();
    },

    showMessage() {
      this.isMessageShow = true;
    },

    hideMessage() {
      this.isMessageShow = false;
    },
  },
};
</script>

<style lang='scss'>
@import "@/style/card.scss";
.form {
  width: 194px;
  margin: auto;

  &__messages {
    margin-top: 20px;
  }
}

.messages {
  @extend .border-rad;
  padding: 10px;

  &_error {
    background-color: rgb(255, 103, 103);
  }

  &_success {
    background-color: rgb(100, 194, 100);
  }
}

.input {
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}
</style>
