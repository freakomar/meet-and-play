<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">{{ config.pageTitle }}</h2>
    <button class="btn-search d-block" type="button">
      {{ config.pageBtn }}
    </button>
    <div class="mt-16 w-8/12">
      <form class="grid grid-cols-2 gap-y-4 gap-x-8">
        <div class="relative">
          <label for="name-with-label" class="text-gray-700">
            Название встречи
          </label>
          <input
            type="text"
            id="name-with-label"
            class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div class="relative">
          <label for="name-with-label" class="text-gray-700"> Город </label>
          <input
            type="text"
            id="name-with-label"
            class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div class="relative">
          <label for="name-with-label" class="text-gray-700"> Адрес </label>
          <input
            type="text"
            id="name-with-label"
            class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div class="relative">
          <label for="name-with-label" class="text-gray-700">
            <span class="text-gray-700">Спорт</span>
            <select
              class="form-select block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <svg
                fill="#e2e8f0"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
              <option>Выбери из списка</option>
              <option>Футбол</option>
              <option>Баскетбол</option>
              <option>Волейбол</option>
              <option>Тенис</option>
            </select>
          </label>
        </div>
      </form>
      <form class="mt-4 mb-8 text-center">
        <div class="relative inline-block mr-8">
          <label for="name-with-label" class="text-gray-700">
            Количество <br />
            участников
          </label>
          <input
            type="text"
            id="name-with-label"
            class="block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-20 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div class="relative inline-block mr-8">
          <label for="name-with-label" class="text-gray-700"> Дата </label>
          <input
            type="data"
            id="name-with-label"
            class="block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-20 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div class="relative inline-block mr-8">
          <label class="text-gray-700" for="time"> Время </label>
          <input
            type="time"
            id="time"
            class="block mt-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"
          />
        </div>
      </form>
      <button
        type="button"
        class="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-center text-base shadow-md focus:outline-none rounded-lg"
      >
        Создать встречу
      </button>
    </div>
  </section>
</template>

<script>
import { config } from "./setup";

export default {
  name: config.pageName,
  data: () => ({
    config,
  }),
};
</script>
