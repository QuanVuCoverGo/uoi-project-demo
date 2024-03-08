import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export type InsuranceInfo = {
  typeOfInsuranceTrip?: string;
  destination?: string;
  startDate?: Date;
  endDate?: Date;
  typeOfInsurance?: string;
  traveller: number;
  adults: number;
  children: number;
  email: string;
  area?: string;
};
export type BasicInfo = {
  fullName: string;
  dateOfBirth?: Date;
  NRICorPassport: string;
};

export type InsuredAddress = {
  floorOrUnitNumber: string;
  block: string;
  building: string;
  street: string;
  postalCode: string;
};

export type InsuredInfo = BasicInfo & {
  address: InsuredAddress;
  travellers: BasicInfo[];
  adults: BasicInfo[];
  children: BasicInfo[];
};

export type InformationState = {
  insurance: InsuranceInfo;
  insureds: InsuredInfo;
  step: number;
  selectedPlan: string;
  payment: {
    cardNumber: string;
    cardName: string;
    validDate: string;
    cvvOrCvc: string;
  };
  isTermAgreed: boolean;
};

export enum TripType {
  "single",
  "annualMulti",
}

export enum InsuredType {
  "individual",
  "family",
}

export const useInformationStore = defineStore("informations", {
  state: (): InformationState => ({
    insurance: {
      typeOfInsuranceTrip: "single",
      destination: undefined,
      startDate: undefined,
      endDate: undefined,
      typeOfInsurance: "individual",
      traveller: 1,
      adults: 1,
      children: 1,
      email: "",
      area: undefined,
    },
    insureds: {
      fullName: "",
      dateOfBirth: undefined,
      NRICorPassport: "",
      address: {
        floorOrUnitNumber: "",
        block: "",
        building: "",
        street: "",
        postalCode: "",
      },
      travellers: [],
      adults: [],
      children: [],
    },
    payment: {
      cardNumber: "",
      cardName: "",
      validDate: "",
      cvvOrCvc: "",
    },
    step: 1,
    selectedPlan: "essential",
    isTermAgreed: false,
  }),
});
