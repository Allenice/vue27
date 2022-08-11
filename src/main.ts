import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

declare module "vue" {
  interface ComponentCustomProps {
    [key: string]: any;
  }
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
