<template>
  <li class="link">
    <router-link
      :to="to"
      class="top-link d-flex align-items-center text-decoration-none"
      active-class="active-link"
      ><slot
    /></router-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: String,
      default: "",
    },
  },
};
</script>
