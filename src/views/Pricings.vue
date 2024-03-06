<template>
  <Header />
  <v-main
    class="d-flex align-center justify-center flex-column ga-10 pricing-main"
    style="min-height: 300px"
  >
    <v-container class="pa-10 w-75">
      <h3 class="text-right color-blue header">Select your plan</h3>
      <v-data-table
        :headers="headers"
        :items="items"
        item-key="name"
        class="table dashed-divider-table"
      >
        <template v-slot:item.basic="{ value }">
          <div
            v-if="typeof value === 'number' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ getPriceWithDollarSign(value) }}
          </div>
          <div
            v-else-if="typeof value === 'string' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ value }}
          </div>
          <div v-else class="valueText ml-2">
            <v-icon v-if="Boolean(value)">check</v-icon>
            <v-icon v-else>minimize</v-icon>
          </div>
        </template>
        <template v-slot:item.essential="{ value }">
          <div
            v-if="typeof value === 'number' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ getPriceWithDollarSign(value) }}
          </div>
          <div
            v-else-if="typeof value === 'string' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ value }}
          </div>
          <div v-else class="valueText ml-2">
            <v-icon v-if="Boolean(value)">check</v-icon>
            <v-icon v-else>minimize</v-icon>
          </div>
        </template>
        <template v-slot:item.preferred="{ value }">
          <div
            v-if="typeof value === 'number' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ getPriceWithDollarSign(value) }}
          </div>
          <div
            v-else-if="typeof value === 'string' && Boolean(value)"
            class="valueText ml-2"
          >
            {{ value }}
          </div>
          <div v-else class="valueText ml-2">
            <v-icon v-if="Boolean(value)">check</v-icon>
            <v-icon v-else>minimize</v-icon>
          </div>
        </template>
        <template v-slot:item.name="{ value }">
          <v-row>
            <v-tooltip :text="getToolTip(value)">
              <template v-slot:activator="{ props }">
                <v-icon color="grey-lighten-1" v-bind="props"
                  >error_outline</v-icon
                >
              </template>
            </v-tooltip>
            <p class="benefitText ml-2">{{ value }}</p>
          </v-row>
        </template>
        <template #bottom></template>
      </v-data-table>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import { useInformationStore } from "../stores/InformationStore";

const store = useInformationStore();

const headers = [
  { title: "", value: "name", width: "40%" },
  { title: "", value: "basic", width: "20%" },
  { title: "", value: "essential", width: "20%" },
  { title: "", value: "preferred", width: "20%" },
];

const items = [
  {
    name: "Personal Accidental Cover (Adult <70)",
    basic: 150000,
    essential: 25000,
    preferred: 350000,
    tooltip:
      "Provides compensation in the event of injuries, disability, or death caused solely by violent, accidental, external, and visible events during the trip.",
  },
  {
    name: "Medical Expenses Overseas (Adult <70)",
    basic: 200000,
    essential: 500000,
    preferred: 750000,
    tooltip:
      "Reimburses you for the cost of medical treatment received while you are traveling outside your home country. This coverage can include expenses for doctor visits, hospital stays, surgeries, prescriptions",
  },
  {
    name: "Hospital Day Stay (Overseas)",
    basic: "$100/day up to $15,000",
    essential: "$200/day up to $30,000",
    preferred: "$300/day up to $45,000",
    tooltip:
      "Coverage for each day you are required to stay in a hospital during your trip abroad. Offers a fixed daily allowance to help cover the cost of incidental expenses that may not be directly related to medical treatment but arise as a result of hospitalization. Such expenses can include, but are not limited to, the cost of meals, transportation for family members visiting the hospital, and personal comfort items.",
  },
  {
    name: "Emergency Medical Evacuation/Repatriation (Adult <70)",
    basic: true,
    essential: true,
    preferred: true,
    tooltip: "Emergency Medical Evacuation/Repatriation (Adult <70)",
  },
  {
    name: "COVID-19 coverage",
    basic: true,
    essential: true,
    preferred: true,
    tooltip:
      "Protection against various unforeseen events related to COVID-19 that could affect your travel plans or health.",
  },
  {
    name: "Pregnancy related medical expenses",
    basic: "",
    essential: "",
    preferred: 10000,
    tooltip:
      "Coverage for unforeseen medical emergencies and complications arising from pregnancy during the covered trip.",
  },
  {
    name: "Personal Liability",
    basic: 500000,
    essential: 1000000,
    preferred: 1000000,
    tooltip:
      "Protects you if you're legally responsible for accidentally injuring someone or damaging their property while you're traveling. If, for example, you accidentally cause harm to a person or their belongings, the insurance can cover the legal expenses and damages up to the policy limit.",
  },
  {
    name: "Baggage and Personal Effects",
    basic: 20000,
    essential: 50000,
    preferred: 75000,
    tooltip:
      "Coverage for the loss, theft, damage, or destruction of your personal belongings while you are traveling",
  },
  {
    name: "Home Protection	",
    basic: 30000,
    essential: 50000,
    preferred: 75000,
    tooltip:
      "Financial compensation for damages or losses that occur to your home while you are away on your trip. This includes burglary, fire, natural disasters, and other unforeseen events that could cause damage or loss to your property and its contents.",
  },
  {
    name: "Trip cancellation",
    basic: 30000,
    essential: 50000,
    preferred: 75000,
    tooltip:
      "Reimbursement for prepaid, non-refundable travel expenses if you have to cancel your trip for a covered reason before departure. Covered reasons can include medical reasons, sever weather, employment changes and legal obligations.",
  },
  {
    name: "Credit Card Indemnity for UOB Cardholders",
    basic: 250,
    essential: 500,
    preferred: 750,
    tooltip:
      "Protects UOB cardholders against unauthorized transactions on their UOB credit card if it is lost or stolen while they are traveling.",
  },
  {
    name: "Rental Vehicle Excess",
    basic: undefined,
    essential: 750,
    preferred: 150000,
    tooltip:
      "Covers for the excess or deductible charged  by a rental car company in the event of damage to or theft of a rental vehicle during the covered trip.",
  },
];

const getToolTip = (value: string) => {
  return items.find((item) => item.name === value)?.tooltip || "";
};

const getPriceWithDollarSign = (amount?: number): string => {
  if (!amount) return "-";
  return Number(amount)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace(".00", "");
};

// import BuilderContent from "../components/BuilderContent.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pricing-main {
  background-color: #f4f4f6;
}
.table {
  background-color: #f4f4f6;
}

.dashed-divider-table .v-data-table__wrapper table {
  border-collapse: separate;
  border-spacing: 0;
}

.dashed-divider-table .v-data-table__wrapper td,
.dashed-divider-table .v-data-table__wrapper th {
  border-bottom: 1px dashed #000; /* Customize the color as needed */
}

.dashed-divider-table .v-data-table__wrapper th {
  border-top: 1px dashed #000; /* Top border for header */
}

.benefitText {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  width: 274px;
}
.valueText {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
}

.firstRow {
  width: 312px;
}

.card-box {
  position: absolute;
  top: 200px;
  width: "100%";
  height: 700px;
}

.empty-card {
  width: 40%;
}

.card {
  min-width: 205px !important;
}

.temp {
  position: "absolute";
}
</style>

<!-- { title: "", value: "personalAccidentalCoverLess70" },
  { title: "", value: "medicalExpensesOverseasLess70" },
  { title: "", value: "hospitalDayStayOverseas" },
  { title: "", value: "emergencyMedicalEvacuationLess70" },
  { title: "", value: "covid19Coverage" },
  { title: "", value: "pregnancyRelatedMedicalExpenses" },
  { title: "", value: "personalLiability" },
  { title: "", value: "baggageAndPersonalEffects" },
  { title: "", value: "tripCancellation" },
  { title: "", value: "creditCardIndemnityForUOBCardholders" },
  { title: "", value: "rentalVehicleExcess" }, -->
