<template>
  <v-sheet
    class="overflow-hidden"
    style="position: relative;"
  >

  <template>
    <div>
      <v-data-table
        :headers="headers"
        :items="projectName"
        v-model="selected"
        :single-select="singleSelect"
        show-select
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        class="elevation-0"
        show-expand
      >

        <template v-slot:expanded-item="{ items }">
          <!-- Не получается расположить открывающийся td во всю строку таблицы -->
          <div v-for="txt of projectUser"
              :key="txt.id">
            <td
              v-text="txt.name"
              class="tdWhite"
              @click.stop="drawer = !drawer"
            >
            </td>
            <td
              v-text="txt.plan"
              class="tdWhite"
              @click.stop="drawer = !drawer"
            >
            </td>
            <td
              v-text="txt.written"
              class="tdWhite"
              @click.stop="drawer = !drawer"
            >
            </td>
          </div>


            <v-navigation-drawer
              app
              temporary
              v-model="drawer"
              color="#FFFFFF"
              right
              width="40%"
            >

            <div class="my-2 mt-5 mr-5 mb-5 d-flex align-end flex-column">
              <v-btn depressed color="primary"
              >Изменить</v-btn>
            </div>

            <v-divider></v-divider>
            <div class="align-start ml-3 mr-3 mb-n4">
            <v-text-field
              label="Проект"
              name="Title"
              type="text"
              class="mt-3 mb-n4"
              v-model="editedTitle"
              outlined
            ></v-text-field>

            <v-text-field
              label="Описание"
              name="Description"
              type="text"
              outlined
              class="mb-n4"
              v-model="editedDescription"
            ></v-text-field>

            <v-text-field
              label="Дата"
              name="Title2"
              type="text"
              outlined
              class="mb-n4"
              v-model="editedTitle2"
            ></v-text-field>

            <v-text-field
              label="Сумма"
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
        headers: [
          {
            text: 'Проект',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Сумма', value: 'money' },
          { text: 'Запланировано', value: 'plan' },
          { text: 'Списано', value: 'written' },
        ],
        projectName: [
          {
            name: 'PRJ.FDRS.192-17 ',
            money: '997 700,60 p',
            plan: '1200 ч',
            written: '230 ч',
            value: 'name'
          },
          {
            name: 'PRJ.FDRS.192-18 ',
            money: '997 700,60 p',
            plan: '1200 ч',
            written: '230 ч',
            value: 'money'
          },
          {
            name: 'PRJ.FDRS.192-19 ',
            money: '997 700,60 p',
            plan: '1200 ч',
            written: '230 ч',
            value: 'plan'
          },
          {
            name: 'PRJ.FDRS.192-20 ',
            money: '997 700,60 p',
            plan: '1200 ч',
            written: '230 ч',
            value: 'written'
          },
        ],
        projectUser: [
          {
            name: 'Апкова Луиза',
            url: '/reports2',
            money: '997 700,60 p',
            project: 'PRJ.FDRS.192-17 ',
            plan: '1200 ч',
            written: '230 ч',
            id: 1
          },
          {
            name: 'Ермолаев Семен',
            url: '/reports2',
            money: '997 700,60 p',
            project: 'PRJ.FDRS.192-18 ',
            plan: '1200 ч',
            written: '230 ч',
            id: 2
          },
          {
            name: 'Анна Петухова',
            url: '/reports2',
            money: '997 700,60 p',
            project: 'PRJ.FDRS.192-19 ',
            plan: '1200 ч',
            written: '230 ч',
            id: 3
          },
          {
            name: 'Кузин Александр',
            url: '/reports2',
            money: '997 700,60 p',
            project: 'PRJ.FDRS.192-20 ',
            plan: '1200 ч',
            written: '230 ч',
            id: 4
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
