<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app permanent
      :mini-variant='drawer'
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color='transparent'>
      <v-btn
        @click.stop="drawer = !drawer"
        icon
      >
        <v-icon v-show='!drawer'>mdi-dots-vertical</v-icon>
        <v-icon v-show='drawer'>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon fab
        @click='switchTheme'
        color='primary'
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  drawer: boolean = false
  get isDark () {
    return this.$vuetify.theme.dark
  }

  set isDark (value) {
    this.$vuetify.theme.dark = value
  }

  switchTheme (): void {
    this.isDark = !this.isDark
  }
}
</script>
<style lang="stylus">
@import '/themes/style.styl'
</style>
