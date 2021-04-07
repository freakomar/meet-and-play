<template>
  <li class="mt-5">
    <router-link
      :to="to"
      class="top-link flex items-center no-underline text-black hover:text-blue-530"
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
