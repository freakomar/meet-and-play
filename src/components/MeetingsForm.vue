<template>
  <div
    v-for="(meeting, key) in meetings"
    :key="`meeting-${key}`"
    class="max-h-56 hover:cursor-pointer play-card"
  >
    <img class="block mb-2 rounded-2xl" :src="meeting.src" alt="play-card" />
    <div class="play-card__header">
      <span class="inline-block font-bold meeting-name">{{
        meeting.name
      }}</span>
      <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span>
    </div>
    <span class="inline-block"
      >{{ meeting.available_quantity }} из {{ meeting.required_quantity }}</span
    >
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