import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Colors } from '@/themes/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: Colors.light.primary,
        secondary: Colors.light.secondary,
        accent: Colors.light.accent,
        error: Colors.light.error,
        info: Colors.light.info,
        success: Colors.light.success,
        warning: Colors.light.warning
      },
      dark: {
        primary: Colors.dark.primary,
        secondary: Colors.dark.secondary,
        accent: Colors.dark.accent,
        error: Colors.dark.error,
        info: Colors.dark.info,
        success: Colors.dark.success,
        warning: Colors.dark.warning
      }
    }
  }
})
