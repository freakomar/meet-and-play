<template>
  <section class="views-main">
    <h2 class="views-main__title d-inline-block">{{ config.pageTitle }}</h2>
    <div class="filter-block">
      <ul class="filter d-flex">
        <filter-form :filter="filter" />
      </ul>
    </div>
    <div class="search-block">
      <input type="text" placeholder="Город" />
      <button class="btn-fill">Найти</button>
    </div>
    <div class="play-cards-header">Популярные игры</div>
    <div class="play-cards-block">
      <meetings-form :meetings="meetings" />
    </div>
  </section>
</template>

<script>
import FilterForm from "@/components/FilterForm";
import MeetingsForm from "@/components/MeetingsForm";
import { config, meetings, filter } from "./setup";

export default {
  name: config.pageName,
  components: {
    FilterForm,
    MeetingsForm,
  },
  data: () => ({
    meetings,
    filter,
    config,
  }),
};
</script>
