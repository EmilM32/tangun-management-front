<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app permanent
      :mini-variant='drawer'
    >
      <v-list dense>

        <v-list-item 
          v-for='(item, i) in sideBarItems' :key='i'
          :to='item.name === mainComponent ? "/" : item.name'
          link>
          <v-list-item-action>
            <v-icon :color='item.name === $route.name ? "accent" : ""'>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(`${item.i18n}`) }}
            </v-list-item-title>
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
      <v-toolbar-title>
        {{ $t(`sidebar.${$route.name ? $route.name : mainComponent}`)}}
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              icon fab
              color='primary'
              v-on="on"
            >
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in langItems"
              :key="index"
              dense
              :disabled='!item.active'
              @click='switchLang(item.code)'
            >
              <v-list-item-title class='text-center'>
                {{ $t(`${item.i18n}`) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

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
        class='ma-5'
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
  readonly mainComponent: string = 'Home'
  drawer: boolean = false

  get isDark () {
    // @ts-ignore
    return this.$vuetify.theme.dark
  }

  set isDark (value) {
    // @ts-ignore
    this.$vuetify.theme.dark = value
  }

  get sideBarItems (): Array<object> {
    return [
      {
        icon: 'mdi-home',
        i18n: 'sidebar.Home',
        name: 'Home'
      },
      {
        icon: 'mdi-clipboard-list-outline',
        i18n: 'sidebar.List',
        name: 'List'
      }
    ]
  }

  get langItems (): Array<object> {
    return [
      {
        i18n: 'lang.pl',
        code: 'pl',
        active: true
      },
      {
        i18n: 'lang.en',
        code: 'en',
        active: false
      }
    ]
  }

  switchTheme (): void {
    this.isDark = !this.isDark
  }

  switchLang (lang: string): void {
    this.$i18n.locale = lang
  }
}
</script>
<style lang="stylus">
@import '/themes/style.styl'
</style>
