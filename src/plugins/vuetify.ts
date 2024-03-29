/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});
