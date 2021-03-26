import { createRouter, createWebHistory } from "vue-router";
import Participating from "@/views/Participating";
import MyMeetings from "@/views/MyMeetings";
import Favorites from "@/views/Favorites";
import Create from "@/views/Create";
import Settings from "@/views/Settings";
import Support from "@/views/Support";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    // meta: { layout: "empty" }, // для определения, какой layout подгружать
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    // meta: { layout: "empty" },
    component: Registration,
  },
  {
    path: "/",
    name: "patricipating",
    component: Participating,
  },
  {
    path: "/myMeetings",
    name: "myMeetings",
    component: MyMeetings,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/support",
    name: "support",
    component: Support,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
