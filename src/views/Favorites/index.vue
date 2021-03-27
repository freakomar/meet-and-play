<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">{{ config.pageTitle }}</h2>
    <button class="btn-search d-block" type="button">{{ config.pageBtn }}</button>
    <div class="filter-block">
      <ul class="filter d-flex ">
        <map-filter-form :filter="filter" />
      </ul>
    </div>
    <div class="play-cart-block">
      <map-meetings-form :meetings="meetings"/>
    </div>
  </section>
</template>

<script>
import mapFilterForm from "@/components/FilterForm";
import mapMeetingsForm from "@/components/MeetingsForm"
import { config, meetings, filter } from "./setup";

export default {
  name: config.pageName,
  components: {
    mapFilterForm,
    mapMeetingsForm
  },
  data: () => ({
    meetings,
    filter,
    config,
  }),
};
</script>
