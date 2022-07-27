<template>
  <div>
    <ul>
      <div>Виды вспомогательных фунций Vuex</div>
      <li v-for="item in items" :key="item">
        {{ item.code }} - {{ item.title }} - {{ item.description }}
      </li>
    </ul>

    <div class="table__container">
    <table border="1">
      <thead>
        <th>имя</th>
        <th>что это</th>
        <th>Зачем это</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item">
          <td> {{ item.code }}</td><td>{{ item.title }}</td><td>{{ item.description }}</td>
          </tr>

      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
const HELPERS = [
  { code: "mapState", title: "вспомогательная функция", description: "-" },
  {
    code: "mapGetters",
    title: "вспомогательная функция",
    description:
      "Функция mapGetters просто проксирует геттеры хранилища в локальные вычисляемые свойства компонента",
  },
    {
    code: "mapMutations",
    title: "вспомогательная функция",
    description:
      "Мутации можно вызывать из кода компонентов, используя this.$store.commit('xxx'), или применяя вспомогательный метод mapMutations, который проксирует вызовы store.commit через методы компонентов (для этого требуется наличие корневой ссылки на хранилище $store)",
  },
];

export default {
  name: "VuexHelpersList",
  data() {
    return {
      items: HELPERS,
    };
  },
};
</script>

<style>

.table__container {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
}
</style>