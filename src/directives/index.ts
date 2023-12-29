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
      // 获取按钮元素
      el.disabled = true;
    },
  });
};
