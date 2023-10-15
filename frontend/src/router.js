import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;