<template>
  <h2 class="meetings-discussions-title font-bold text-xl">Обсуждение:</h2>
  <div v-for="(discussion, key) in discussions" :key="`discussion-${key}`" class="meetings-discussions__item">
  <span class="meetings-discussions__item-name font-semibold">{{ discussion.name }}</span>
  <p class="meetings-discussions__item-content">{{ discussion.content }}</p>
  </div>
  <form action="#" class="meetings-discussions__form">
    <textarea name="#" id="#" placeholder="Написать..." class="resize border"></textarea>
    <button>
    <svg width="24[x" height="22px" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.2783 12.1308C23.7164 11.9246 23.9961 11.483 23.9961 10.9976C23.9961 10.5123 23.7164 10.0707 23.2783 9.86451L2.66111 0.159709C2.62978 0.144963 2.59786 0.13153 2.56542 0.119444C2.22387 -0.00779751 1.85308 -0.0340273 1.49711 0.0438721C1.14113 0.121771 0.814946 0.300525 0.557312 0.558887C0.299678 0.81725 0.121428 1.14436 0.0437485 1.50134C-0.0320321 1.84959 -0.00899272 2.21199 0.109983 2.5475L2.91876 10.9976L0.109987 19.4478C-0.00899226 19.7833 -0.0320312 20.1457 0.0437496 20.494C0.121428 20.8509 0.299672 21.178 0.557312 21.4364C0.814952 21.6948 1.14114 21.8735 1.49711 21.9514C1.85308 22.0293 2.22387 22.0031 2.56542 21.8759C2.59786 21.8638 2.62978 21.8503 2.66111 21.8356L23.2783 12.1308ZM5.13417 9.74581L2.90528 3.04025L17.1508 9.74581L5.13417 9.74581ZM2.90528 18.955L5.13422 12.2493L17.1511 12.2493L2.90528 18.955Z" />
    </svg>
</button>
  </form>
</template>

<script>
export default {
  name: "MeetingsDiscussion",
  props: {
    discussions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>