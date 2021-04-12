<template>
  <div class="container w-screen h-screen flex flex-row">
    <map-nav
      :navItemMenu="navItemMenu"
      :navBottomMenu="navBottomMenu"
      :titleAndCopy="titleAndCopy"
    />
    <div class="flex h-screen flex-col flex-grow overflow-y-auto relative">
      <router-view />
    </div>
  </div>
</template>

<script>
// для определения, какой layout подгружать
import MapNav from "@/components/Layouts/Nav";
import { navItemMenu, navBottomMenu, titleAndCopy } from "./setup";
export default {
  components: {
    MapNav,
  },
  data: () => ({
    navItemMenu,
    navBottomMenu,
    titleAndCopy,
  }),
};
</script>
<style src="./assets/tailwind.css"> </style>
<style lang="scss">
@import "assets/styles/global.scss";
</style>
