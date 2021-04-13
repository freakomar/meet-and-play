<template>
  
  <div v-for="(info, key) in info" :key="`info-${key}`" class="meetings-info__item">
    <span class="meetings-info__item-name">{{ info.name }}:</span>
    <p class="meetings-info__item-content font-bold">{{ info.content }}</p>
  </div>

  <div v-for="(member, key) in members" :key="`member-${key}`" class="meetings-members__item">
  <img class="meetings-members__item-img">{{ member.img }}
  <span class="meetings-members__item-name">{{ member.name }}</span>

  </div>

  
</template>


<script>
export default {
  name: "MeetingInfo",
  props: {
    info: {
      type: Array,
      default: () => [],
    },
    members: {
      type: Array,
      default: () => [],
    },
    
  },
};

// <p class="meetings-info__item-txt font-bold"
//     v-for="(info, key) in info" :key="`meeting-${key}`"
//     >{{ info.name }}</p>
</script>