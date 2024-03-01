import { createRouter, createWebHistory } from "vue-router";
import WorkFlows from "@/views/WorkFlows.vue";

const routes = [
  {
    path: "/workflows",
    name: "WorkFlows",
    component: WorkFlows,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
