import { App } from "vue";

export default (app: App<Element>) => {
  app.directive("loading", {
    mounted: (el, binding) => {
      const { instance } = binding;
      console.log(instance, "instance");
    },
  });
};
