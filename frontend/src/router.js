import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index";
import Schedule from "@/pages/schedule";
import Group from "@/pages/group";
import Map from "@/pages/map";
import Attention from "@/pages/notice";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    //meta : {title: '文化祭'}
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
    meta : {title: 'スケジュール'}
  },
  {
    path: "/group",
    name: "Group",
    component: Group,
    meta : {title: '出展'}
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
    meta : {title: 'マップ'}
  },
  {
    path: "/notice",
    name: "Notice",
    component: Notice,
    meta : {title: '注意事項'}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const DEFAULT_TITLE = '文化祭'

router.afterEach((to) => {
  const title = to.meta.title
    ? ` ${DEFAULT_TITLE} | ${to.meta.title}`
    : DEFAULT_TITLE;
  document.title = title;
});

export default router;