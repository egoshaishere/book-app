<template>
  <div class="table__container">
    <table border="1">
      <thead>
        <th>имя</th>
        <th>что это</th>
        <th>Зачем это</th>
        <th>Как это</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item">
          <td>{{ item.name }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.how }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const BASE_THINGS = [
  {
    name: "state",
    title: "Состояние",
    description: "куда уж без него",
    how: '',
  },
  {
    name: "getters",
    title: "Просто гетеры",
    description: "Действия которые возвращают данные из хранилища",
    how: '',
  },
  {
    name: "mutations",
    title: "Синхронные изменения состояния",
    description: "Синхронные транзакции",
    how: 'this.$store.commit("increment")',
  },
  {
    name: "actions",
    title: "Действия — похожи на мутации с несколькими отличиями",
    description: "Вместо того, чтобы напрямую менять состояние, действия инициируют мутации. Действия могут использоваться для асинхронных операций.",
    how: 'this.$store.dispatch("increment")',
  },
  {
    name: "modules",
    title: "ну модули там...",
    description: "не дочитал еще",
    how: '',
  },
];
export default {
  name: "Base",
  data() {
    return {
      items: BASE_THINGS,
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