import { App } from "vue";

export default (app: App<Element>) => {
  app.directive("focus", {
    mounted: (el) => {
      const input = el.querySelector("input");
      input.focus();
    },
  });
  app.directive("loading", {
    mounted: (el, binding, vnode) => {
      // 更改改组件的loading
      console.log(vnode);
    },
  });
};
