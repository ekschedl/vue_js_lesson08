// router/index.js

import Vue from "vue";
import VueRouter from "vue-router";
import HomePageView from "@/views/HomePageView.vue";
import SinglePageView from "@/views/SinglePageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePageView, // Главная страница с турами
  },
  {
    path: "/tour/:slug", // Динамический маршрут для страницы тура
    name: "tour",
    component: SinglePageView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
