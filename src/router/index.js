import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contents from "../views/Contents.vue";
import TestList from "../views/Tests.vue";

import TestOverview from "../components/TestOverview.vue";
import TestQuiz from "../components/TestQuiz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contents",
    name: "Contents",
    component: Contents,
    children: [
      {
        path: "tests",
        component: TestList,
      },
      {
        path: "tests/:id",
        name: "test-show",
        component: TestOverview,
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          store
            .dispatch("test/fetchTest", routeTo.params.id)
            .then((test) => {
              routeTo.params.test = test;
              next();
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ],
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: TestQuiz,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
