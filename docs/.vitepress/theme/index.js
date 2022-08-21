import DefaultTheme from 'vitepress/theme'

// import Card from 'my_el_ui/components/lib/card'  // /src/main.vue'
// import Demo from 'my_el_ui/dist/demo.umd'
// import Card from 'my_el_ui/dist/card.umd'
// import 'my_el_ui/dist/css/card.css'
import './custom.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
    // app.use(Card)
  }
}