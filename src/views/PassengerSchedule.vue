<template>
  <v-container fluid grid-list-xs pa-0>
    <v-layout row wrap>
      <v-flex xs12>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-list-tile
              class="py-2"
              :key="item.title"
              to="/"
              avatar
            >
              <v-list-tile-avatar>
                <img src="@/assets/img/train--blue.svg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <div class="caption">{{ item.minutes }}</div>
                <v-list-tile-sub-title>

                  <div class="body-1">{{ item.status }}</div>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider
              :inset="true"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const state = {
  items: [
    {
      avatar: '',
      title: 'Train A',
      minutes: '9 min. away',
      status: 'Stopped at Central'
    },
    {
      avatar: '',
      title: 'Train B',
      minutes: '8 min. away',
      status: 'Skip train to Gil Puyat'
    },
    {
      avatar: '',
      title: 'Train C',
      minutes: '7 min. away',
      status: 'En route to Central'
    },
    {
      avatar: '',
      title: 'Train D',
      minutes: '6 min. away',
      status: 'En route to Bambang'
    },
    {
      avatar: '',
      title: 'Train E',
      minutes: '6 min. away',
      status: 'Stopped at Roosevelt'
    }
  ],
  statusTypes: [
    'En route to',
    'Stopped at',
    'Skip train to'
  ]
}
export default {
  data: () => (state),
  methods: {
    setTrainStatus (train, statusIndex, location) {
      train.status = `${this.statusTypes[statusIndex]} ${location}`
    }
  }
}
</script>
