import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Colors } from '@/themes/colors'

const { light, dark } = Colors

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: light,
      dark: dark
    }
  },
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
})
