<template>
  <div class="home">
    {{ test }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  test: string = 'test'
}
</script>
