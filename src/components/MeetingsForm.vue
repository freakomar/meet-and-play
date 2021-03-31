<template>
  <div v-for="(meeting, key) in meetings" :key="`meeting-${key}`" class="play-cart">
    <img
      class="img-play-cart d-block"
      :src="meeting.src"
      alt="play-cart"
    />
    <span class="play-cart-name d-inline-block font-weight-bold">{{ meeting.name }}</span>
    <span class="play-cart-age d-inline-block font-weight-bold">(до {{ meeting.age }} лет)</span>
    <span class="play-cart-data d-inline-block float-right">{{ meeting.date }}</span>
  </div>
</template>

<script>
export default {
  name: "mapMeetingsForm",
  props: {
    meetings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>