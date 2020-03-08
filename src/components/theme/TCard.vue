<template>
  <v-card color='primary'>
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