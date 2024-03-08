import { createRouter, createWebHistory } from "vue-router";
import WorkFlows from "../views/WorkFlows.vue";
import Pricings from "../views/Pricings.vue";
import ApplicantInformation from "../views/ApplicantInformation.vue";
import IssueFinish from "../views/IssueFinish.vue";

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
  {
    path: "/workflows/applicant-information",
    name: "ApplicantInformation",
    component: ApplicantInformation,
  },
  {
    path: "/workflows/applicant-information",
    name: "ApplicantInformation",
    component: ApplicantInformation,
  },
  {
    path: "/workflows/finish",
    name: "IssueFinish",
    component: IssueFinish,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
