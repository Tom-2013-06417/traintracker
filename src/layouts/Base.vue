<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      enable-resize-watcher
      :mini-variant.sync="drawer"
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/img/train.svg" >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          class="py-2"
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon medium color="orange accent-3" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="black--text body-1" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="px-2" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { baseNavigation } from '@/config/navigation'

export default {
  data: () => ({
    drawer: false,
    items: baseNavigation,
    right: true,
    title: 'TrainTracker'
  }),
  props: {
    source: String
  }
}
</script>
