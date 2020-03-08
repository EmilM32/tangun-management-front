<template>
  <v-card
    color='primary'
    outlined
    class='t-card'
  >
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  test: string = 'test'
}
</script>
<style lang="stylus" scoped>
.t-card
  border-radius 7px!important
</style>