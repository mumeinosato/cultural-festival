import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    //meta : {title: '文化祭'}
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

const DEFAULT_TITLE = '文化祭'

router.afterEach((to) => {
  const title = to.meta.title
    ? `${to.meta.title} | ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;
  document.title = title;
});

export default router;