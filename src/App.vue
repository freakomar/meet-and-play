<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
// для определения, какой layoyt подгружать
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "assets/style/variables.scss";
@import "assets/style/colors.scss";
@import "assets/style/global.scss";
@import "assets/style/sizes.scss";
</style>
