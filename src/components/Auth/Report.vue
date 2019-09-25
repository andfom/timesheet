<template>
  <v-data-table
    v-model="selected"
    :single-select="singleSelect"
    show-select
    :single-expand="singleExpand"
    :headers="headers"
    :items="desserts"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    class="elevation-0"
  >

    <template v-slot:expanded-item="{ headers }">
    <td
      v-for="txt in headers"
      :key="txt.id"
      :colspan="txt.text"
      v-text="txt.text"
      class="tdWhite"
      >
      </td>
      </template>
</v-data-table>
</template>

<script>
 export default {
    data () {
      return {

        expanded: [],
        selected: [],

        singleExpand: false,
        singleSelect: false,
        headers: [
          {
            text: 'Проект',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Запланировано', value: 'calories', },
          { text: 'Списано', value: 'fat' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            items: [
              {
                name: 'Ivan',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
              },
              {
                name: 'Ruslan',
                calories: 11,
                fat: 36.0,
                carbs: 223,
                protein: 3.0,
                iron: '12%',
              },
            ]
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            items: 'Участники'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-dashboard' },
          { title: 'About', icon: 'mdi-question_answer' },
        ],
      }
    },
  }
</script>


<style>
  tr {
    background-color: #00569B;
  }
  td {
    background-color: #ebebeb;
  }
  .tdWhite {
    background-color: #ebc5c5;
  }
  tr:hover td {
    background-color: rgb(167, 208, 247);
  }
  .diff {
     background-color: #fff;
  }

</style>
