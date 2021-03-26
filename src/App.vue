<template>
  <div class="app container">
    <map-nav />
    <div class="content">
      <main class="main-window">
        <div class="modals">
          <router-view />
        </div>
      </main>
    </div>
  </div>

  <!-- <component :is="layout">
    <router-view />
  </component> -->
</template>

<script>
// для определения, какой layoyt подгружать
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
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
}
</style>
