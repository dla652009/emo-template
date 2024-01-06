import { App } from "vue";

export default (app: App<Element>) => {
  app.directive("focus", {
    mounted: (el) => {
      const input = el.querySelector("input");
      input.focus();
    },
  });
};
