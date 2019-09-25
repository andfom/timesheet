<!--<template>
 <div>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>

        <v-carousel>
        <v-carousel-item
        v-for="ad in ads"
        :key="ad.id"
        :src="ad.imageSrc"
        >
        <div class="car-link">
          <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
        </div>
        </v-carousel-item>
        </v-carousel>

      </v-flex>
    </v-layout>
  </v-container>
   <v-container grid-list-lg>
     <v-layout row wrap>
      <v-flex
      xs12
      sm6
      md4
      v-for="ad of ads"
      :key="ad.id"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text"
            height="200px"
            :src="ad.imageSrc"
          >
            <v-card-title class="align-end fill-height">{{ad.title}}</v-card-title>
          </v-img>

          <v-card-text>
            <span>Number 10</span><br>
            <span class="text--primary">
              <span>{{ad.description}}</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              :to="'/ad/' + ad.id"
            >
              Open
            </v-btn>
            <v-btn
              raised
              class="primary"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
   </v-container>
  </div> -->








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
