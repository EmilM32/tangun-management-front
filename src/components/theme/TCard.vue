<template>
  <div class='t-card'>
    <div class="top">
      <v-avatar tile :color='color' size='70'>
        <v-icon dark large>{{ icon }}</v-icon>
      </v-avatar>
    </div>
    <div class="bottom">
      <v-card ripple :width='size'>
        <div class="title">
          <span class='overline d-block'>
            {{ $t(`${title}`) }}
          </span>
          <span>{{ subtitle }}</span>
        </div>
        <slot></slot>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Card extends Vue {
  @Prop() color!: string
  @Prop() title!: string
  @Prop() subtitle!: string
  @Prop() icon!: string
  @Prop() size!: string
}
</script>

<style lang="stylus" scoped>
.t-card
  position relative
  width 100%
  .top
    position absolute
    left 1rem
    z-index 1
  .bottom
    position absolute
    top 20px
    z-index 0
    .title
      text-align right
      padding 5px 5px 1rem 0
</style>