<template>
  <main class="container">
    <section class="content">
      <header class="header">Выберите спортивную игру</header>
      <div class="filters">
        <button class="filter-btn">Футбол</button>
        <button class="filter-btn">Баскетбол</button>
        <button class="filter-btn">Бег</button>
        <button class="filter-btn">Волейбол</button>
        <button class="filter-btn">Хоккей</button>
        <button class="filter-btn">Спортзал</button>
        <button class="filter-btn">Теннис</button>
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
export default {
  name: "Home",
};
</script>