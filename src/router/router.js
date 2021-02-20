import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import MyProfile from "../views/Profile.vue";
const history = createWebHistory();
const routes = [
  { path: "/", component: Home },
  { path: "/my-profile", component: MyProfile },
];
const router = createRouter({ history, routes });
export default router;