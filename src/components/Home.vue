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




  <!-- <v-container fluid>
    <v-layout row>
      <v-flex xs12>



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





      </v-flex>
    </v-layout>
  </v-container>
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
</style> -->






<!-- start -->

<template>
  <v-sheet
    class="overflow-hidden"
    style="position: relative;"

  >


    <!-- end -->
<template>
  <div>

    <v-data-table
      :headers="headers"
      :items="desserts"
    >

      <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @click.stop="drawer = !drawer"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > {{ props.item.name }}
          <template v-slot:input>
            <!-- <v-text-field
              v-model="props.item.name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field> -->

          </template>
        </v-edit-dialog>
      </template>


      <template v-slot:item.iron="props">
        <v-edit-dialog slot="activator"
          :return-value.sync="props.item.iron"
          large
          persistent
          @click.stop="drawer = !drawer"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.iron }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update Iron</div>
          </template>
          <!-- <template v-slot:input>
            <v-text-field
              v-model="props.item.iron"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template> -->


        </v-edit-dialog>
      </template>
    </v-data-table>

  </div>
</template>

<addEditAd></addEditAd>
<!-- <v-navigation-drawer
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
    </v-navigation-drawer> -->
    </v-sheet>
    </template>

<script>
import EditAd from './EditAd'
  export default {
    data () {
      return {
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
      }
    },
    methods: {
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open () {
        this.drawer = true
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log('Dialog closed')
      },
    },
    components: {
    addEditAd: EditAd
    }

  }
</script>
