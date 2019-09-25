  <template>
  <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"

  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list-item>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>


<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-dashboard' },
        { title: 'About', icon: 'mdi-question_answer' },
      ],
      ads: [
        {
        title: 'First list',
        description: 'Hello i am squirrel',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
        },
        {
        title: 'Second list',
        description: 'Hello i am bird',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '1234'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

  }
</style>
