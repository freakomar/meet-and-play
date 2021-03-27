<template>
  <div v-for="(title, key) in titleAndCopy" :key="`titleAndCopy-${key}`" class="side-bar d-flex flex-column">    
    <map-nav-side-bar :title="title.name"/>
    <nav class="side-bar_navigation d-flex flex-column align-items-center">
      <div class="list-link">
        <ul class="top-list-link">
        <nav-item v-for="(navItem, key) in navItemMenu" :to="navItem.to" :key="`navItem-${key}`">
          {{ navItem.name }}
        </nav-item>
        </ul>
        <ul class="bottom-list-link">
        <map-nav-bottom v-for="(navBottom, key) in navBottomMenu" :to="navBottom.to" :key="`navBottom-${key}`">
          {{ navBottom.name }}
        </map-nav-bottom>
        </ul>
      </div>
      <span class="mt-auto">Copyright&nbsp;&copy;&nbsp;{{ year }}&nbsp;{{ title.name }}</span>
    </nav>    
  </div>
</template>

<script>
import MapNavSideBar from "@/components/NavSideBar";
import NavItem from "@/components/NavItem";
import MapNavBottom from "@/components/NavBottom";
export default {
  name: "MapNav",
  components: {
    NavItem,
    MapNavSideBar,
    MapNavBottom,
  },
  props: {
    navItemMenu: {
      type: Array,
      default: () => [],
    },
    navBottomMenu: {
      type: Array,
      default: () => [],
    },
    titleAndCopy: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    year() {      
      return new Date().getFullYear()
    },
  },
};
</script>
