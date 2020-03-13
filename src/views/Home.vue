<template>
  <v-row justify='center'>
    <v-col
      v-for="(item, i) in dashboardItem"
      :key='i'
      cols='3'>
      <t-card
        :title='item.title'
        :subtitle='item.subtitle'
        :opts='cardOptions(
          item.color,
          item.icon
        )'
        size='300'
      >
        {{ $t('message') }}
      </t-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CardOpts } from './../types/index'
@Component
export default class App extends Vue {
  cardOptions (color?: string, icon?: string): CardOpts {
    const _return: CardOpts = {
      color: color,
      icon: icon
    }
    return _return
  }

  get dashboardItem (): Array<object> {
    return [
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'success',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'dashboard.calendar',
        subtitle: '22.03.2020',
        color: 'primary',
        icon: 'mdi-calendar-month'
      },
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'secondary',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'dashboard.gain',
        subtitle: 'subtitle',
        color: 'newColor',
        icon: 'mdi-currency-usd'
      }
    ]
  }
}
</script>
