<template>
  <v-card>
    <v-card-title>
      <v-btn
        color='primary'
        icon large
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="tableSearch"
        append-icon="mdi-magnify"
        :label="$t('common.search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="tableItems"
      :search="tableSearch"
      :no-data-text="$t('table.noData')"
      :no-results-text="$t('table.noResult')"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { UserList } from './../types/index'

@Component
export default class List extends Vue {
  readonly USER_LIST_URL: string = '/userList.json'

  tableSearch: string = ''
  tableItems: Array<UserList> = []

  created () {
    this.$http
      .get(this.USER_LIST_URL)
      .then((response: AxiosResponse) => {
        this.tableItems = response.data
      })
  }

  get headers (): Array<object> {
    const columns: Array<string> = [
      'id', 'fullName', 'level', 'dateOfBirth', 'group'
    ]
    let tableHeaders = (columns: Array<string>): Array<object> => {
      let temp: Array<object> = []
      columns.forEach(el => {
        temp.push({
          text: this.$t(`common.${el}`),
          value: el,
          align: el !== 'id' ? 'center' : null
        })
      })
      return temp
    }
    return tableHeaders(columns)
  }
}
</script>
