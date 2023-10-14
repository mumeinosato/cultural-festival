import { createRouter, createWebHistory } from "vue-router";
import Top from "@/pages/Top";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top
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