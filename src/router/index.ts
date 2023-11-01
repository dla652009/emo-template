// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
const routes: any = [
  {
    path: "/login",
    name: "login",
    component: () => import("@v/login/index.vue"),
  },
  {
    path: "/", // 重定向
    redirect: (_: any) => {
      return { path: "/login" };
    },
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: (_: any) => {
      return { path: "/404" };
    },
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
