<template>
  <div class="cv">
    <div class="cv__left">
      <img src="../assets/photo.jpg" class="cv-photo cv__photo" />
      <p class="h3">Персональная информация</p>
      <p class="h4 cv__contacts-title">Контакты</p>
      <my-contact
        class="cv__contact"
        v-for="(contact, index) in info.contacts"
        :isPreferrable="contact.isPreferrable || false"
        :link="contact.link"
        :text="contact.text"
        :key="index"
      />

      <p class="h4 cv__languages-title">Языки</p>
      <p class="text cv__language" v-for="text in info.lang" :key="text">
        {{ text }}
      </p>

      <p class="h4 cv__skills-title">Ключевые навыки</p>
      <p class="text cv__skill" v-for="text in info.skills" :key="text">
        {{ text }}
      </p>
    </div>
    <div class="cv__right">
      <p class="h1 cv__name">Навалов Дмитрий</p>
      <p class="h2 cv__profession">Frontend разработчик</p>

      <p class="h3 cv__work-place-title">Место работы</p>

      <div class="work-place">
        <p class="work-place__name h4">WebValley Studio</p>
        <p class="work-place__time-range text">
          Сентябрь 2019 — настоящее время. 3 года 1 месяц
        </p>
        <p class="h4">Деятельность</p>
        <p class="text">
          Администрирование сайтов; создание сайтов: промо-лендинги,
          корпоративные сайты, интернет магазины; Обучение, менторство коллег;
        </p>
      </div>

      <p class="h3 cv__projects-title">Проекты</p>

      <p class="text">
        Указаны последние сайты. Всего было создано около 20 сайтов.
      </p>

      <ul>
        <my-project
          v-for="(project, index) in info.projects"
          :key="index"
          :project="project"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import MyContact from "@/components/MyContact.vue";
import MyProject from "@/components/MyProject.vue";

const info = {
  skills: [
    "Уверенные навыки JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "WebGL",
    "Three.js",
    "React",
    "Redux",
    "Redux-toolkit",
    "GSAP",
    "Webpack",
    "Gulp",
    "Wordpress",
  ],
  lang: ["Английский - B1, чтение документации", "Французский - A1"],
  contacts: [
    {
      isPreferrable: true,
      link: "https://t.me/wrair",
      text: "телеграм",
    },
    {
      link: "tel:+79855286482",
      text: "телефон",
    },
    {
      link: "mailto:dmitry.navalov@mail.ru",
      text: "email",
    },
  ],
  projects: [
    {
      title: "sufno",
      description: "Промо лендинг для nft компании",
      link: "https://surfn.so/",
      stack: ["react", "redux", "GSAP", "WebGL"],
    },

    {
      title: "Audiophile",
      description: "Интернет магазин аудио техники",
      stack: ["react", "redux-toolkit"],
    },

    {
      title: "koreansimple",
      description: "Корпоративный сайт онлайн школы ",
      link: "https://koreansimple.com/",
      stack: ["HTML", "SCSS", "JS", "Wordpress"],
    },

    {
      title: "Outerraagency",
      description: "Промо лендинг event агенства",
      stack: ["HTML", "SCSS", "JS", "Wordpress", "GSAP", "WebGL"],
    },

    {
      title: "evaplan",
      description: "Лендинг компании по производству эвакуационных планов",
      link: "https://evaplan.ru/",
      stack: ["HTML", "CSS", "JS", "Tilda"],
    },

    {
      title: "Ingain",
      description:
        "Сайт компании по созданию дизайн интерьеров из Хабаровска. Попал в ТОП 10 сайтов Рейтинга Рунета в категориях 'Мебель и интерьер' и 'Сайты на конструкторе'",
      link: "https://evaplan.ru/",
      stack: ["HTML", "CSS", "JS", "Tilda"],
    },

    {
      title: "Itiva",
      description: "Сайт грузинского кадрового агентства",
      stack: ["HTML", "CSS", "JS", "WebGL", "Tilda"],
    },

    //
  ],
};

export default {
  components: {
    UserCard,
    MyContact,
    MyProject,
  },

  data: function () {
    return {
      info,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/card.scss";
.cv {
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 30px;

  &__photo {
    width: 100%;
    height: 300px;

    margin-bottom: 30px;
  }

  &__work-place-title {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &__work-place,
  &__projects-title,
  &__contacts-title,
  &__languages-title,
  &__skills-title {
    margin-top: 30px;
  }

  &__language,
  &__skill,
  &__contact {
    margin: 5px 0px;
  }
}

.work-place {
  @extend .card;
}

.cv-photo {
  @extend .border-rad;
  object-fit: cover;
}
</style>
