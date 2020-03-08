<template>
  <div>
    <v-card>
      test
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class List extends Vue {
  test: string = 'test2'
}
</script>
