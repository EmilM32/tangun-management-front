<template>
  <div>
    <t-card
      color='white'
    >
      test
    </t-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  test: string = 'test2'
}
</script>
