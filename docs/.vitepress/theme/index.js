import DefaultTheme from 'vitepress/theme'

import Card from 'my_el_ui/components/lib/card'  // /src/main.vue'
import 'my_el_ui/dist/css/card.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
    app.use(Card)
  }
}