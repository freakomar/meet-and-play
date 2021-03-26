<template>
  <li class="link">
    <router-link
      :to="to"
      class="bottom-link d-flex align-items-center text-decoration-none"
      active-class="active-link"
      ><slot
    /></router-link>
  </li>
</template>

<script>
export default {
  name: "MapNavBottom",
  component: {},
  props: {
    to: {
      type: String,
      default: "",
    },
  },
};
</script>
