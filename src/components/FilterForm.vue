<template>
  <li v-for="(item, key) in filter" :key="`filter-${key}`" class="filter-name">
    <button class="btn-filter d-block">{{ item.name }}</button>
  </li>
</template>

<script>
export default {
  name: "mapFilterForm",
  props: {
    filter: {
      type: Array,
      default: () => [],
    },
  },
};
</script>