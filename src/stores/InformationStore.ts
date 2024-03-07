import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export type InsuranceInfo = {
  typeOfInsuranceTrip?: number;
  destination: string;
  startDate?: Date;
  endDate?: Date;
  typeOfInsurance?: number;
  traveller: number;
  adults: number;
  children: number;
  email: string;
  area?: string;
};

export type InformationState = {
  insurance: InsuranceInfo;
};

export const useInformationStore = defineStore("informations", {
  state: (): InformationState => ({
    insurance: {
      typeOfInsuranceTrip: undefined,
      destination: "",
      startDate: undefined,
      endDate: undefined,
      typeOfInsurance: undefined,
      traveller: 0,
      adults: 0,
      children: 0,
      email: "",
      area: undefined,
    },
  }),
});
