<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">{{ config.pageTitle }}</h2>
    <button class="btn-search d-block" type="button">{{ config.pageBtn }}</button>
    
    <div class="meetings-container">
    <div>
      <div class="meetings-info">
        <meeting-info :info="info"/>
      </div>
      <div class="meetings-members grid grid-cols-3 gap-4">
        <meeting-info :members="members"/>
      </div>

      <div class="meetings-btns">
        <button class="btn-search btn-meetings d-block" type="button"> Редактировать </button>
        <button class="btn-search btn-meetings d-block" type="button"> Отменить встречу </button>
      </div>
    </div>

    <div class="meetings-discussions flex flex-col">
      <meetings-discussion :discussions="discussions"/>
    </div>

    </div>
  </section>
</template>

<script>
import MeetingInfo from "@/components/MeetingInfo";
import MeetingsDiscussion from "@/components/MeetingsDiscussion";
import { config, info, members, discussions } from "./setup";

export default {
  name: config.pageName,
  components: {
    MeetingInfo,
    MeetingsDiscussion
  },
  data: () => ({
    config,
    info,
    members,
    discussions
  }),
};
</script>