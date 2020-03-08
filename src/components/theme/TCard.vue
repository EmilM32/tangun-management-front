<template>
  <v-card
    :color='color'
    outlined
    class='t-card'
    elevation='4'
  >
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  @Prop() color!: string
  test: string = 'test'
}
</script>

<style lang="stylus" scoped>
.t-card
  border-radius 7px!important
</style>