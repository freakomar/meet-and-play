<template>
  <li v-for="(item, key) in filter" :key="`filter-${key}`" class="mr-4">
    <button
      class="block bg-gray-200 rounded-full py-1 px-3 leading-6 hover:bg-blue-410"
    >
      {{ item.name }}
    </button>
  </li>
</template>

<script>
export default {
  name: "FilterForm",
  props: {
    filter: {
      type: Array,
      default: () => [],
    },
  },
};
</script>