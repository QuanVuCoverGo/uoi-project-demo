import { createRouter, createWebHistory } from "vue-router";
import WorkFlows from "../views/WorkFlows.vue";
import Pricings from "../views/Pricings.vue";

const routes = [
  {
    path: "/",
    redirect: { path: "/workflows" },
  },
  {
    path: "/workflows",
    name: "WorkFlows",
    component: WorkFlows,
  },
  {
    path: "/workflows/example",
    name: "Pricings",
    component: Pricings,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
