import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import RafflePage from "@/views/RafflePage.vue";
import SalesHistory from "@/views/SalesHistory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/configuracoes",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "Register",
    component: Register,
  },
  {
    path: "/recuperar-senha",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/resetar-senha",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/minha-rifa",
    name: "RafflePage",
    component: RafflePage,
  },
  {
    path: "/historico",
    name: "SalesHistory",
    component: SalesHistory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;