<template>
  <ul class="top-list-link">
    <li class="link">
      <router-link to="/" class="top-link" active-class="active-link"
        >Учавствую</router-link
      >
    </li>
    <li class="link">
      <router-link to="/myMeetings" class="top-link" active-class="active-link"
        >Мои встречи</router-link
      >
    </li>
    <li class="link">
      <router-link to="/create" class="top-link" active-class="active-link"
        >Создать встречу</router-link
      >
    </li>
    <li class="link">
      <router-link to="/favorites" class="top-link" active-class="active-link"
        >Избранное</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavItem",
};
</script>
