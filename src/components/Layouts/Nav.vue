<template>
  <div class="side-bar">
    <map-nav-side-bar />
    <nav class="side-bar_navigation">
      <div class="list-link">
        <nav-item />
        <map-nav-bottom />
      </div>
      <span>Company&nbsp;{{ year }}</span>
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
  computed: {
    year() {      
      return new Date().getFullYear()
    },
  },
};
</script>
