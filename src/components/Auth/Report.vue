<template>
  <v-sheet
    class="overflow-hidden"
    style="position: relative;"
  >

  <template>
    <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      v-model="selected"
      :single-select="singleSelect"
      show-select
      :single-expand="singleExpand"
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
          @click.stop="drawer = !drawer"
          >
        </td>

          <!-- <v-btn @click.stop="drawer = !drawer">Red</v-btn> -->

            <v-navigation-drawer
            app
            temporary
            v-model="drawer"
            color="#FFFFFF"
            right
            width="40%"
            >
          <!-- <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Timesheet
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->


          <div class="my-2 mt-5 mr-5 mb-5 d-flex align-end flex-column">
            <v-btn depressed color="primary"
            >Изменить</v-btn>
          </div>

          <v-divider></v-divider>
          <div class="align-start ml-3 mr-3 mb-n4">
          <v-text-field
            label="title"
            name="Title"
            type="text"
            class="mt-3 mb-n4"
            v-model="editedTitle"
            outlined

          ></v-text-field>

          <v-text-field
            label="description"
            name="Description"
            type="text"
            outlined
            class="mb-n4"
            v-model="editedDescription"
          ></v-text-field>

          <v-text-field
            label="title2"
            name="Title2"
            type="text"
            outlined
            class="mb-n4"
            v-model="editedTitle2"
          ></v-text-field>

          <v-text-field
            label="title3"
            name="Title3"
            type="text"
            outlined
            class="mb-n4"
            v-model="editedTitle3"
          ></v-text-field>

          <v-btn
          block
          color="primary"
          @click="hidden = !hidden"
          >Проектная команда</v-btn>

          <!-- <v-text-field
            name="hidden"
            type="text"
            class="mb-n4"
            v-for="txt in projectUser"
            :key="txt.id"
            v-text="txt.name"
            v-show="hidden"
            v-model="hidden"
            link
            ></v-text-field> -->

            <v-list-item
            v-for="project in projectUser"
            :key="project.id"
            :to="project.url"
            v-show="hidden"
            v-model="hidden"
            link
            >
            <v-list-item-title v-text="project.name"></v-list-item-title>
          </v-list-item>

          <v-text-field
            label="Исполнитель"
            name="Исполнитель"
            type="text"
            outlined
            class="mt-4 font-italic font-weight-light"
            v-model="editedTitle3"
          ></v-text-field>


          </div>
      </v-navigation-drawer>
          </template>
        </v-data-table>
      </div>
    </template>
  </v-sheet>
</template>

<script>
  export default {
    data () {
      return {
        editedTitle: '',
        editedTitle2: '',
        editedTitle3: '',
        editedDescription: '',
        hidden: '',
        expanded: [],
        selected: [],
        singleExpand: false,
        singleSelect: false,
        snack: false,
        snackColor: '',
        snackText: '',
        max25chars: v => v.length <= 25 || 'Input too long!',
        pagination: {},
        projectUser: [
          {
            name: 'Апкова Луиза', url: '/reports2'
          },
          {
            name: 'Ермолаев Семен', url: '/reports2'
          },
          {
            name: 'Анна Петухова', url: '/reports2'
          },
          {
            name: 'Кузин Александр', url: '/reports2'
          },
        ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
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
        hidden: false,
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
