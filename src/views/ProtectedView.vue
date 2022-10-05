<template>
  <div class="protected">
    <h1>This is an protected page</h1>
    <p>{{ $store.state.isLogged }}</p>

    <div class="buttons">
      <button class="button buttons__left" @click="addCards">more</button>
      <button class="button" @click="logout">Logout</button>
    </div>

    <ul class="protected__list users-list">
      <user-card
        v-for="user in users"
        :info="user"
        :key="user.name"
      ></user-card>
    </ul>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import { getFullInfo } from "@/api/cardsApi.js";

export default {
  data: function () {
    return {
      users: [],
    };
  },

  created() {
    this.addCards();
  },

  components: {
    UserCard,
  },

  methods: {
    async addCards() {
      const humans = await getHumans();
      this.users.push(...humans);
    },

    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};

async function getHumans() {
  const NUMBER = 3;
  const fullPersonInfos = await getFullInfo(NUMBER);
  return fullPersonInfos.map(filterInfo);
}

function filterInfo(person) {
  const dob = formatDoB(person.dob.date);
  const location = generateLocation(person.location);
  return {
    src: person.picture.large, // 'https://biographe.ru/wp-content/uploads/2021/12/2332213.png',
    name: `${person.name.title} ${person.name.first} ${person.name.last}`,
    date: dob,
    email: person.email,
    phone: person.phone,
    location,
  };
}

function formatDoB(date) {
  const dob = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const str = dob.toLocaleString("en-US", options);
  return str;
}

function generateLocation(location) {
  return `${location.country}, ${location.city}`;
}
</script>

<style lang='scss'>
.buttons {
  margin: 40px 0px;

  &__left {
    margin-right: 20px;
  }
}
.users-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
}
</style>