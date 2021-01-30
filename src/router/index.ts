import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//使用路由懒加载
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/articles.vue")
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/project.vue")
  },
  {
    path: "/support",
    name: "support",
    component: () => import("@/views/support.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
