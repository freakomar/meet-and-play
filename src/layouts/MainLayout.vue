<template>
  <div class="container">
    <div class="side-bar">
      <div class="side-bar_header">
        <h2>Meet & Play</h2>
        <div class="avatar">
          <img class="avatar-img" src="#" alt="avatar" />
        </div>
        <div class="authorization-description">
          <span class="user-name"
            >Константин <br />
            Константинов</span
          >
          <span class="user-city">Санкт-Петербург</span>
          <!-- <span class="user-authorization">Вход&nbsp;/&nbsp;Регистрация</span> -->
        </div>
      </div>
      <nav class="side-bar_navigation">
        <div class="list-link">
          <ul class="top-list-link">
            <li class="link"><a class="top-link" href="#">Учавствую</a></li>
            <li class="link"><a class="top-link" href="#">Мои встречи</a></li>
            <li class="link">
              <a class="top-link" href="#">Создать встречу</a>
            </li>
            <li class="link"><a class="top-link" href="#">Избранное</a></li>
          </ul>
          <ul class="bottom-list-link">
            <li class="link">
              <a href="#" class="bottom-link">Настройки</a>
            </li>
            <li class="link"><a href="#" class="bottom-link">Помощь</a></li>
          </ul>
        </div>
        <span>Company&nbsp;2021</span>
      </nav>
    </div>
    <main class="main-window">
      <router-view />
    </main>
  </div>
</template>
