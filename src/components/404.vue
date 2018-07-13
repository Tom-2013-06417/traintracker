<template>
  <v-container fluid grid-list-xs text-xs-center pa-0>
    <v-layout column fill-height>
      <v-flex xs12>
        <v-layout
          grey darken-4
          align-center
          column
          fill-height
          justify-center
          wrap
        >
          <v-icon color="white" size="100px">help_outline</v-icon>
          <h1 class="white--text display-1">Page not found</h1>
          <h1 class="white--text display-1"> :(</h1>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
