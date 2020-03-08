<template>
  <div>
    <v-row>
      <v-col cols='3'>
        <t-card>
          {{test}}
        </t-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  test: string = 'test2'
}
</script>
