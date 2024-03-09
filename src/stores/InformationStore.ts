import { getAreaByCountry, getPricingPlan } from "@/utils/pricingMapping";
import moment from "moment";
import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export type InsuranceInfo = {
  typeOfInsuranceTrip?: "single" | "annualMulti";
  destinations: string[];
  startDate?: Date;
  endDate?: Date;
  typeOfInsurance?: "individual" | "family";
  traveller: number;
  adults: number;
  children: number;
  email: string;
  area?: "area1" | "area2" | "area3";
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
  selectedPlanPrice: number;
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
      destinations: [],
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
    selectedPlanPrice: 0,
    isTermAgreed: false,
  }),
  getters: {
    tripDuration(state): number {
      if (state.insurance?.typeOfInsuranceTrip === "annualMulti") return 365;

      return moment
        .duration(
          moment(state.insurance.endDate)?.diff(state.insurance.startDate)
        )
        .asDays();
    },
    numberOfInsureds(state): number {
      if (!state.insurance.typeOfInsurance) return 0;
      if (state.insurance.typeOfInsurance === "individual") {
        return state.insurance.traveller;
      }

      return state.insurance.adults + state.insurance.children;
    },
    planPricings(
      state
    ): { basic: number; essential: number; preferred: number } | undefined {
      if (
        !(state.insurance.destinations.length || state.insurance.area) ||
        !state.insurance.typeOfInsuranceTrip ||
        !state.insurance.typeOfInsurance
      )
        return;
      if (
        state.insurance?.typeOfInsuranceTrip === "annualMulti" &&
        !state.insurance.area
      )
        return;

      let selectedArea = "area3";

      if (state.insurance?.typeOfInsuranceTrip === "single") {
        // array
        const destinations = [...state.insurance.destinations];
        let max = 0;
        for (let index = 0; index < destinations.length; index++) {
          const country = destinations[index];

          const area =
            state.insurance?.typeOfInsuranceTrip === "single"
              ? getAreaByCountry(country)
              : state.insurance.area || "area3";

          const costPrice = getPricingPlan({
            tripType: state.insurance.typeOfInsuranceTrip,
            area,
            plan: "basic",
            duration: state.tripDuration,
            numberOfInsureds: state.numberOfInsureds,
            insuredType: state.insurance.typeOfInsurance,
          });

          if (costPrice > max) {
            max = costPrice;
            selectedArea = getAreaByCountry(country);
          }
        }
      } else {
        selectedArea = state.insurance.area || selectedArea;
      }

      return {
        basic: getPricingPlan({
          tripType: state.insurance.typeOfInsuranceTrip,
          area: selectedArea,
          plan: "basic",
          duration: state.tripDuration,
          insuredType: state.insurance.typeOfInsurance,
          numberOfInsureds: state.numberOfInsureds,
        }),
        essential: getPricingPlan({
          tripType: state.insurance.typeOfInsuranceTrip,
          area: selectedArea,
          plan: "essential",
          duration: state.tripDuration,
          insuredType: state.insurance.typeOfInsurance,
          numberOfInsureds: state.numberOfInsureds,
        }),
        preferred: getPricingPlan({
          tripType: state.insurance.typeOfInsuranceTrip,
          area: selectedArea,
          plan: "preferred",
          duration: state.tripDuration,
          insuredType: state.insurance.typeOfInsurance,
          numberOfInsureds: state.numberOfInsureds,
        }),
      };
    },
  },
});
