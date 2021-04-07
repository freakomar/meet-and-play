<template>
  <div v-for="(meeting, key) in meetings" :key="`meeting-${key}`" class="max-h-56 hover:cursor-pointer">
    <img
      class="block mb-2 rounded-2xl"
      :src="meeting.src"
      alt="play-cart"
    />
    <span class="inline-block font-bold">{{ meeting.name }}</span>
    <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span>
    <span class="inline-block float-right">{{ meeting.date }}</span>
  </div>
</template>

<script>
export default {
  name: "MeetingsForm",
  props: {
    meetings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>