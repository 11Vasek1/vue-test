<template>
  <li class="project">
    <p class="h4 project__title">{{ project.title }}</p>
    <p class="text project__desc">{{ project.description }}</p>
    <ul class="techs project__techs">
      <li
        class="text project__tech"
        v-for="(tech, index) in project.stack"
        :key="index"
      >
        {{ tech }}
      </li>
    </ul>

    <a v-if="project.link" :href="project.link" class="text project__link"
      >Ссылка</a
    >
  </li>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="scss">
@import "../style/card.scss";
.project {
  @extend .card;
  display: flex;
  flex-direction: column;

  margin: 20px 0px;

  &__desc {
    margin: 10px 0px;
  }
  &__link {
    margin-top: 10px;
  }

  &__tech {
    margin-right: 10px;
  }
}

.techs {
  display: flex;
  flex-direction: row;
}
</style>


