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

        <v-navigation-drawer
        app
        temporary
        v-model="drawer"
        color="#FFFFFF"
        right
        >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Timesheet
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

    <v-list>
      <v-list-group
        v-for="admin in items"
        :key="admin.title"
        color="#A1DAF8"
        v-model="admin.active"
        link
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
          <v-list-item-title v-text="admin.title"></v-list-item-title>
          </v-list-item-content>
        </template>

          <v-list-item
            v-for="project in items"
            :key="project.title"
            :to="project.url"
            link
            >
            <v-list-item-title v-text="project.title"></v-list-item-title>
          </v-list-item>

          <!-- <v-list-item
          v-for="user in admin.items_2"
            :key="user.title"
            :to="user.url"
          >
          <v-list-item-title v-text="user.title"></v-list-item-title>
          </v-list-item> -->
      </v-list-group>

      <v-list-group
        v-for="admin in links_2"
        :key="admin.title"
        color="#A1DAF8"
        v-model="admin.active"
        link
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title v-text="admin.title"></v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
          color="#A1DAF8"
          v-for="project in admin.links_3"
          :key="project.title"
          v-model="project.active"
          link
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="project.title"></v-list-item-title>
            </v-list-item-content>
          </template>

            <v-list-item
            v-for="addproject in project.items_1"
            :key="addproject.id"
            :to="addproject.url"
            >
            <v-list-item-title v-text="addproject.title"></v-list-item-title>
          </v-list-item>
          <v-list-item
          v-for="transform in project.items_2"
            :key="transform.title"
            :to="transform.url"
          >
          <v-list-item-title v-text="transform.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
          value="true"
          color="#A1DAF8"
          v-for="users in admin.links_4"
          :key="users.title"
          v-model="users.active"
          link
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="users.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="transformUser in users.items"
            :key="transformUser.title"
            :to="transformUser.url"
          >
            <v-list-item-title v-text="transformUser.title"></v-list-item-title>

          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
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
        expanded: [],
        selected: [],
        singleExpand: false,
        singleSelect: false,
        snack: false,
        snackColor: '',
        snackText: '',
        max25chars: v => v.length <= 25 || 'Input too long!',
        pagination: {},
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
        items: [
          { title: 'Home', icon: 'mdi-dashboard' },
          { title: 'About', icon: 'mdi-question_answer' },
        ],
        links_2: [
            {
              id: 3,
              title: 'Администрирование',
              icon: 'mdi-chevron-right',
              url: '/admin',
              action: 'mdi-chevron-right',
              links_3: [
                {
                  id: 4,
                  title: 'Проекты',
                  icon: 'mdi-chevron-right',
                  url: '/admin',
                  action: 'mdi-chevron-right',
                  items_1: [
                    { id: '5', title: 'Добавление проекта', url: '/project', }
                  ],
                  items_2: [
                    { id: '6', title: 'Изменить проект', url: '/project_2', },
                  ],
                },
              ],
              links_4: [
                {
                  id: 7,
                  title: 'Сотрудники',
                  icon: 'mdi-chevron-right',
                  url: '/admin',
                  action: 'mdi-chevron-right',
                  items: [
                    { id: '8', title: 'Редактировать сотрудника', url: '/transformUser', }
                  ],
                },
              ],
            },
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
