import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    meta: { layout: "main" },
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" }, // для определения, какой layoyt подгружать
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    meta: { layout: "empty" },
    component: Registration,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
