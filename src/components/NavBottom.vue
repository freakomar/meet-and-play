<template>
  <ul class="bottom-list-link">
    <li class="link">
      <router-link to="/settings" class="bottom-link" active-class="active-link"
        >Настройки</router-link
      >
    </li>
    <li class="link">
      <router-link to="/support" class="bottom-link" active-class="active-link"
        >Помощь</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "MapNavBottom",
  component: {},
};
</script>
