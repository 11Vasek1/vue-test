<template>
  <div class="contact">
    <a :href="link" class="text">{{ text }}</a>
    <span class="text" v-if="isPreferrable">
      - Предпочитаемый способ связи</span
    >
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
    isPreferrable: Boolean,
  },
};
</script>

<style lang="scss">
.contact {
  text-align: left;
}
</style>