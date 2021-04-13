<template>
  <div class="modal modal-sign-up">
    <span class="modal-close"></span>
    <span class="modal-title">Регистрация</span>
    <form action="#" class="modal-form">
      <div class="wrp">
        <label>
          <span class="modal-name">Имя</span>
          <input type="text" name="" id="" placeholder="Иван" />
        </label>
        <label>
          <span class="modal-name">Город</span>
          <input type="text" name="" id="" placeholder="Москва" />
        </label>
      </div>
      <div class="wrp">
        <label>
          <span class="modal-name">Эл. почта</span>
          <input type="email" name="" id="" placeholder="ivan@ivanov.ru" />
        </label>
        <label>
          <span class="modal-name">Пароль</span>
          <input type="password" name="" id="" placeholder="******" />
        </label>
      </div>
      <button type="button" class="form-btn">Зарегистрироваться</button>
    </form>
    <span class="modal-msg">Уже зарегистрированы?</span>
    <a href="#" class="modal-msg-link">Войти</a>
  </div>
</template>
