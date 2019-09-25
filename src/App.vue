<template>
  <v-app>
  <v-navigation-drawer
  app
  temporary
  v-model="drawer"
  color="#00569B"
  dark
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
        v-for="admin in links"
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
            v-for="project in admin.items"
            :key="project.id"
            :to="project.url"
            >
            <v-list-item-title v-text="project.title"></v-list-item-title>
          </v-list-item>

          <v-list-item
          v-for="user in admin.items_2"
            :key="user.title"
            :to="user.url"
          >
          <v-list-item-title v-text="user.title"></v-list-item-title>
          </v-list-item>
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
  <v-app-bar app color="rgba(243, 244, 248)">
      <v-app-bar-nav-icon color="rgba(0, 86, 155)"
      @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Home</router-link>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-items>

    <v-menu
      transition="slide-x-transition"
      bottom
      right
      v-for="user in users"
      :key="user.title"
    >
      <template v-slot:activator="{ on }">

          <v-btn text color="rgba(0, 86, 155)"

          v-on="on"
          >
            <v-icon size="38">{{user.icon}}</v-icon>
            {{user.title}}
            <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in user.drops"
          :key="i"

          :to="item.url"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

        </v-toolbar-items>
      </template>
  </v-app-bar>





  <!-- Sizes your content based upon application components -->
  <v-content class="contentApp">
    <!-- Provides the application the proper gutter -->

    <v-container fluid >
      <!-- If using vue-router -->
      <router-view class="grey lighten-4"></router-view>
    </v-container>
  </v-content>
  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
export default {
  data () {
    return {
      drawer: null,
      links: [
        {
          title: 'Отчеты',
          icon: 'mdi-chevron-right',
          action: 'mdi-chevron-right',
          items: [
            { id: '1', title: 'Проекты', url: '/reports', }
          ],
          items_2: [
            { id: '2', title: 'Сотрудники', url: '/reports2', },
          ],
        }
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
      users: [
        {
        title: 'Иванов Иван Иванович',
        icon: 'mdi-account-circle-outline',
        url: '/users',
        drops: [
          {title: 'Login', icon: 'mdi-login', url: '/login'},
          {title: 'Registration', icon: 'mdi-clipboard-account', url: '/registration'},
          ],
        },
      ],
    }
  }
}

// mdi-account-circle-outline
</script>


<style scoped>
  .pointer {
    cursor: pointer;
  }
  .contentApp {
    background-color: #EBEBEB;
  }
</style>
