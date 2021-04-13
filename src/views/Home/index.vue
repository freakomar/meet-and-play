<template>
  <main class="container">
    <section class="content">
      <h2 class="header d-inline-block">
        {{ config.pageTitle }}
      </h2>
      <div class="filter-block">
        <ul class="filter filters">
          <filter-form :filter="filter" />
        </ul>
      </div>
      <div class="search">
        <input type="text" class="search__input" placeholder="Город" />
        <button class="search__btn">Найти</button>
      </div>
      <div class="meetings">
        <div class="meetings__header">Популярные игры</div>
        <div class="meetings__meeting-list">
          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Футбол (до 16 лет)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Футбол (взрослые)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Баскетбол (до 16 лет)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Баскетбол</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Волейбол (дети)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Боулинг</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Бильярд</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Бег (ищу компанию)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Баскетбол (до 16 лет)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Баскетбол</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Волейбол (дети)</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>

          <div class="meeting-card">
            <div class="meeting-card__block">
              <p class="meeting-card__header">Боулинг</p>
            </div>
            <div class="meeting-card__info">
              <div class="meeting-card__players">15 из 20 игроков</div>
              <div class="meeting-card__date">24.03.21</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import FilterForm from "@/components/FilterForm";
import { config, filter } from "./setup";

export default {
  name: config.pageName,
  components: {
    FilterForm,
  },
  data: () => ({
    filter,
    config,
  }),
};
</script>
