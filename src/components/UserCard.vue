<template>
  <div class="user-card">
    <img :src="info.src" class="user-card-image user-card__image" alt="" />
    <p class="h4 user-card__name">{{ info.name }}</p>
    <p class="text user-card__dob">{{ info.date }}</p>
    <p class="text user-card__email">{{ info.email }}</p>
    <p class="text user-card__phone">{{ info.phone }}</p>
    <p class="text user-card__location">{{ info.location }}</p>
  </div>
</template>

<style lang='scss'>
</style>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style lang='scss'>
@import "../style/card.scss";

.user-card {
  @extend .card;
  text-align: left;

  &__name {
    margin: 10px 0px;
  }
  &__email {
    margin: 5px 0px;
  }
  &__location {
    margin: 5px 0px;
  }
}

.user-card-image {
  @extend .border-rad;
}
</style>


