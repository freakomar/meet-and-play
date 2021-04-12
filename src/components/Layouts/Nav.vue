<template>
  <div
    v-for="(title, key) in titleAndCopy"
    :key="`titleAndCopy-${key}`"
    class="flex flex-col w-72 h-screen bg-gray-200"
  >
    <nav-side-bar :title="title.name" />
    <nav class="side-bar_navigation flex flex-grow flex-col items-center font-medium text-base bg-gray-200">
      <div>
        <ul class="list-none mt-11">
          <nav-item
            v-for="(navItem, key) in navItemMenu"
            :to="navItem.to"
            :key="`navItem-${key}`"
          >
            {{ navItem.name }}
          </nav-item>
        </ul>
        <ul class="list-none my-11">
          <nav-bottom
            v-for="(navBottom, key) in navBottomMenu"
            :to="navBottom.to"
            :key="`navBottom-${key}`"
          >
            {{ navBottom.name }}
          </nav-bottom>
        </ul>
      </div>
      <span class="mt-auto mb-5 text-xs"
        >Copyright&nbsp;&copy;&nbsp;{{ year }}&nbsp;{{ title.name }}</span
      >
    </nav>
  </div>
</template>

<script>
import NavSideBar from "@/components/NavSideBar";
import NavItem from "@/components/NavItem";
import NavBottom from "@/components/NavBottom";

export default {
  name: "MapNav",
  components: {
    NavItem,
    NavSideBar,
    NavBottom,
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
      return new Date().getFullYear();
    },
  },
};
</script>
