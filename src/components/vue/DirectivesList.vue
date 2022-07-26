<template>
  <div>
    <ul>
      <div>Виды дирректив во Vue.js</div>
      <li v-for="item in items" :key="item">
        {{ item.code }} - {{ item.title }} - {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
const DIRECTIVES = [
  {
    code: "v-once",
    title: "Однократная привязка",
    description:
      "если необходимо, чтобы значение было привязано к элементу html только один раз и впоследствии не изменялось",
  },
  {
    code: "v-html",
    title: "Привязка к html",
    description: "Для привязки элемента к коду html",
  },
  {
    code: "v-on",
    title: "Обработка событий",
    description: "Для обработки событий элементов html в Vue.js",
  },
  {
    code: "v-model",
    title: "Двусторонняя привязка",
    description: "Для создания  двусторонней привязки",
  },
  {
    code: "v-if",
    title: "Условный рендеринг",
    description: "Позволяет отобразить или скрыть элемент html по условию",
  },
  {
    code: "v-model",
    title: "Двусторонняя привязка",
    description: "Для создания  двусторонней привязки",
  },
  {
    code: "v-model",
    title: "Двусторонняя привязка",
    description: "Для создания  двусторонней привязки",
  },
];

export default {
  name: "DirectivesList",
  data() {
    return {
      items: DIRECTIVES,
    };
  },
};
</script>

<style>
</style>