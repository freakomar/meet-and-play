<template>
  <div class="app container">
    <map-nav />
    <div class="main-window">
      <router-view />
    </div>
  </div>
</template>

<script>
// для определения, какой layout подгружать
import MapNav from "@/components/Layouts/Nav";
export default {
  components: {
    MapNav,
  },
};
</script>

<style lang="scss">
@import "assets/styles/global.scss";
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.main-window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
  overflow-y: auto;
  position: relative;
}
</style>
