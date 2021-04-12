<template>
  <li class="mt-5">
    <i class="el-icon-delete"></i>
    <router-link
      :to="to"
      class="bottom-link flex items-center no-underline text-black hover:text-blue-530"
      active-class="active-link"
      ><slot
    /></router-link>
  </li>  
</template>

<script>
export default {
  name: "NavBottom",
  component: {},
  props: {
    to: {
      type: String,
      default: "",
    },
  },
};
</script>
