<template>
  <v-row justify='space-around'>
    <v-col
      v-for="(item, i) in dashboardItem"
      :key='i'
      cols='3'>
      <t-card
        :title='item.title'
        :subtitle='item.subtitle'
        :color='item.color'
        :icon='item.icon'
        size='300'
      >
        {{ $t('message') }}
      </t-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  test: string = 'test2'

  get dashboardItem (): Array<object> {
    return [
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'success',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'success',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'success',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'success',
        icon: 'mdi-currency-usd'
      }
    ]
  }
}
</script>
