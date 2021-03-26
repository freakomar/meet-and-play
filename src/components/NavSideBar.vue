<template>
  <div class="side-bar_header d-flex flex-column align-items-center">
    <h2>{{ title }}</h2>
    <div class="avatar">
      <img class="avatar-img" src="#" alt="avatar" />
    </div>
    <div class="authorization-description text-center">
      <span class="user-name d-block font-weight-bold"
        >Константин <br />
        Константинов</span
      >
      <span class="user-city d-block">Санкт-Петербург</span>
      <!-- <span class="user-authorization font-weight-bold">Вход&nbsp;/&nbsp;Регистрация</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MapNavSideBar",
  component: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>


