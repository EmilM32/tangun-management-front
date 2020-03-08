<template>
  <v-app>
    <v-content>
      <v-card color="primary">
        <v-btn
          color="secondary"
          @click='changeTheme'
          fab icon
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-card>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  get isDark () {
    return this.$vuetify.theme.dark
  }

  set isDark (value) {
    this.$vuetify.theme.dark = value
  }

  changeTheme (): void {
    this.isDark = !this.isDark
  }
}
</script>
<style lang="stylus">
@import '/themes/style.styl'
</style>
