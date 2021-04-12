<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">{{ config.pageTitle }}</h2>
    <button class="btn-search d-block" type="button">{{ config.pageBtn }}</button>
    <div class="filter-block">
      <ul class="filter d-flex ">
        <filter-form :filter="filter" />
      </ul>
    </div>
    <div class="play-cart-block">
      <meetings-form :meetings="meetings"/>
    </div>
  </section>
</template>

<script>
import FilterForm from "@/components/FilterForm";
import MeetingsForm from "@/components/MeetingsForm"
import { config, meetings, filter } from "./setup";

export default {
  name: config.pageName,
  components: {
    FilterForm,
    MeetingsForm
  },
  data: () => ({
    meetings,
    filter,
    config,
  }),
};
</script>
