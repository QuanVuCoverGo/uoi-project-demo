<template>
  <Header />
  <v-main
    class="d-flex align-center justify-center flex-column ga-10 pricing-main"
    style="min-height: 300px"
  >
    <v-container class="pa-10 w-75">
      <v-btn
        size="x-large"
        prepend-icon="arrow_back"
        variant="outlined"
        color="primary"
        class="text-none"
        @click="$router.back()"
        >Back</v-btn
      >
      <v-row>
        <v-col cols="4"></v-col>
        <v-col>
          <h3 class="text-left color-blue header mb-10">Select your plan</h3>
        </v-col>
      </v-row>
      <div>
        <!-- header -->
        <v-row class="header-row">
          <v-col cols="4" class="pa-0 h-100"></v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'basic' ? 'selectedHeader' : ''"
              class="header-cell"
              @click="selectedPlan = 'basic'"
            >
              <div class="tag"></div>
              <p class="text-title">Basic</p>
              <p class="text-description">
                Basic coverage with affordable premiums
              </p>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'essential' ? 'selectedHeader' : ''"
              class="header-cell"
              @click="selectedPlan = 'essential'"
            >
              <div class="tag bg-blue-darken-2">
                <span class="polular-text">Most popular</span>
              </div>
              <p class="text-title">Essential</p>
              <p class="text-description">
                Coverage for additional peace of mind
              </p>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'preferred' ? 'selectedHeader' : ''"
              class="header-cell"
              @click="selectedPlan = 'preferred'"
            >
              <div class="tag"></div>
              <p class="text-title">Preferred</p>
              <p class="text-description">
                The most comprehensive coverage for maximum protection
              </p></v-sheet
            >
          </v-col>
        </v-row>
        <!-- end of header -->
        <!-- body -->
        <v-row v-for="item in items" :key="item.name" class="border-row">
          <v-col cols="4" class="pa-0 h-100">
            <v-sheet class="benefitText name-cell pricing-main">
              <v-row class="w-100">
                <v-tooltip max-width="300" :text="getToolTip(item.name)">
                  <template v-slot:activator="{ props }">
                    <v-icon color="grey-lighten-1" v-bind="props"
                      >error_outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <div class="w-75">
                  <p class="benefitText ml-2">{{ item.name }}</p>
                </div>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'basic' ? 'selectedBody' : ''"
              class="price-cell valueText"
            >
              <p
                v-if="typeof item.basic === 'number' && Boolean(item.basic)"
                class="valueText ml-2"
              >
                {{ getPriceWithDollarSign(item.basic) }}
              </p>
              <p
                v-else-if="
                  typeof item.basic === 'string' && Boolean(item.basic)
                "
                class="valueText ml-2"
              >
                {{ item.basic }}
              </p>

              <div v-else class="valueText ml-2">
                <v-icon color="grey-lighten-1" v-if="Boolean(item.basic)"
                  >check</v-icon
                >
                <v-icon color="grey-lighten-1" v-else>minimize</v-icon>
              </div>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'essential' ? 'selectedBody' : ''"
              class="price-cell valueText"
            >
              <p
                v-if="
                  typeof item.essential === 'number' && Boolean(item.essential)
                "
                class="valueText ml-2"
              >
                {{ getPriceWithDollarSign(item.essential) }}
              </p>
              <p
                v-else-if="
                  typeof item.essential === 'string' && Boolean(item.essential)
                "
                class="valueText ml-2"
              >
                {{ item.essential }}
              </p>

              <div v-else class="valueText ml-2">
                <v-icon color="grey-lighten-1" v-if="Boolean(item.essential)"
                  >check</v-icon
                >
                <v-icon color="grey-lighten-1" v-else>minimize</v-icon>
              </div>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'preferred' ? 'selectedBody' : ''"
              class="price-cell valueText"
            >
              <p
                v-if="
                  typeof item.preferred === 'number' && Boolean(item.preferred)
                "
                class="valueText ml-2"
              >
                {{ getPriceWithDollarSign(item.preferred) }}
              </p>
              <p
                v-else-if="
                  typeof item.preferred === 'string' && Boolean(item.preferred)
                "
                class="valueText ml-2"
              >
                {{ item.preferred }}
              </p>
              <div v-else class="valueText ml-2">
                <v-icon color="grey-lighten-1" v-if="Boolean(item.essential)"
                  >check</v-icon
                >
                <v-icon color="grey-lighten-1" v-else>minimize</v-icon>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- end of body  -->
        <!-- footer  -->
        <v-row class="footer-row">
          <v-col cols="4" class="pa-0 h-100"></v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'basic' ? 'selectedFooter' : ''"
              class="footer-cell"
            >
              <v-btn
                href="https://drive.google.com/file/d/15sCw15SfDA80dQsluFFWKcuySk8DZQi4/view"
                target="_blank"
                variant="text"
              >
                <v-icon color="#1976d2" size="small">description</v-icon>
                <p class="link-text">Full details</p>
              </v-btn>
              <div class="d-flex justify-center align-center ga-2">
                <p :class="isApplied ? 'costPrice' : 'discounted-price'">
                  SGD {{ formatPrice(planPrice.basic) }}
                </p>
                <div v-if="isApplied" class="discounted-box">
                  <p class="discounted-value">{{ discountValue }} %</p>
                </div>
              </div>
              <p v-if="discountPlanPrice.basic" class="discounted-price">
                SGD {{ formatPrice(discountPlanPrice.basic) }}
              </p>
              <v-btn
                class="w-100 mt-2"
                variant="outlined"
                :class="
                  selectedPlan === 'basic'
                    ? 'text-white bg-blue-darken-2'
                    : 'text-blue-darken-2'
                "
                @click="selectedPlan = 'basic'"
              >
                <v-icon
                  v-if="selectedPlan === 'basic'"
                  color="white"
                  size="small"
                  >check_circle_outline</v-icon
                >
                <p class="select-button">
                  {{ selectedPlan === "basic" ? "Selected" : "Select" }}
                </p>
              </v-btn>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'essential' ? 'selectedFooter' : ''"
              class="footer-cell"
            >
              <v-btn
                variant="text"
                href="https://drive.google.com/file/d/15sCw15SfDA80dQsluFFWKcuySk8DZQi4/view"
                target="_blank"
              >
                <v-icon color="#1976d2" size="small">description</v-icon>
                <p class="link-text">Full details</p>
              </v-btn>
              <div class="d-flex justify-center align-center ga-2">
                <p :class="isApplied ? 'costPrice' : 'discounted-price'">
                  SGD {{ formatPrice(planPrice.essential) }}
                </p>
                <div v-if="isApplied" class="discounted-box">
                  <p class="discounted-value">{{ discountValue }} %</p>
                </div>
              </div>
              <p v-if="discountPlanPrice.essential" class="discounted-price">
                SGD {{ formatPrice(discountPlanPrice.essential) }}
              </p>
              <v-btn
                class="w-100 mt-2"
                variant="outlined"
                :class="
                  selectedPlan === 'essential'
                    ? 'text-white bg-blue-darken-2'
                    : 'text-blue-darken-2'
                "
                @click="selectedPlan = 'essential'"
              >
                <v-icon
                  v-if="selectedPlan === 'essential'"
                  color="white"
                  size="small"
                  >check_circle_outline</v-icon
                >
                <p class="select-button">
                  {{ selectedPlan === "essential" ? "Selected" : "Select" }}
                </p>
              </v-btn>
            </v-sheet>
          </v-col>
          <v-col class="pa-0 h-100">
            <v-sheet
              :class="selectedPlan === 'preferred' ? 'selectedFooter' : ''"
              class="footer-cell"
            >
              <v-btn
                variant="text"
                href="https://drive.google.com/file/d/15sCw15SfDA80dQsluFFWKcuySk8DZQi4/view"
                target="_blank"
              >
                <v-icon color="#1976d2" size="small">check_circle</v-icon>
                <p class="link-text">Full details</p>
              </v-btn>
              <div class="d-flex justify-center align-center ga-2">
                <p :class="isApplied ? 'costPrice' : 'discounted-price'">
                  SGD {{ formatPrice(planPrice.preferred) }}
                </p>
                <div v-if="isApplied" class="discounted-box">
                  <p class="discounted-value">{{ discountValue }} %</p>
                </div>
              </div>

              <p v-if="discountPlanPrice.preferred" class="discounted-price">
                SGD {{ formatPrice(discountPlanPrice.preferred) }}
              </p>

              <v-btn
                class="w-100 mt-2"
                variant="outlined"
                :class="
                  selectedPlan === 'preferred'
                    ? 'text-white bg-blue-darken-2'
                    : 'text-blue-darken-2'
                "
                @click="selectedPlan = 'preferred'"
              >
                <v-icon
                  v-if="selectedPlan === 'preferred'"
                  color="white"
                  size="small"
                  >check_circle_outline</v-icon
                >
                <p class="select-button">
                  {{ selectedPlan === "preferred" ? "Selected" : "Select" }}
                </p>
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- end of footer  -->
      </div>
      <!-- promo code box  -->
      <div class="mt-16 d-flex justify-center">
        <div class="d-flex flex-column ga-4 w-50">
          <div v-if="isApplied" class="discount-tag bg-green-lighten-4">
            <v-icon color="#4CAF50" size="small"> check_circle_outline </v-icon>
            <span class="discount-text ml-2"
              >Most We applied ABCDEF for
              <span class="font-weight-bold"
                >{{ discountValue }}% off</span
              ></span
            >
          </div>
          <v-text-field
            v-model="promodeCode"
            variant="outlined"
            label="Enter promo code"
          >
            <template v-slot:append-inner>
              <v-btn
                :disabled="!promodeCode"
                @click="handleRedeem"
                class="text-none"
                variant="outlined"
                color="primary"
              >
                Redeem
              </v-btn>
            </template>
          </v-text-field>
        </div>
      </div>
      <!-- end of promo code box  -->
      <div class="mt-16 d-flex justify-center">
        <div class="d-flex flex-row justify-center ga-4 w-50">
          <v-btn
            size="x-large"
            prepend-icon="arrow_back"
            variant="outlined"
            color="primary"
            class="text-none"
            @click="$router.back()"
            >Back</v-btn
          >
          <v-btn
            class="text-none"
            size="x-large"
            prepend-icon="arrow_forward"
            color="primary"
            >Continue</v-btn
          >
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import Header from "../components/Header.vue";
import { useInformationStore } from "../stores/InformationStore";

const insuranceStore = useInformationStore();

const promodeCode = ref();

const isApplied = ref(false);

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

const discountValue = computed(() => {
  if (!promodeCode.value) return 0;
  const isSingle = insuranceStore.insurance?.typeOfInsuranceTrip === 0;
  return isSingle ? 40 : 25;
});

const planPrice = {
  basic: 63,
  essential: 82,
  preferred: 103,
};

const discountPlanPrice = reactive({
  basic: 0,
  essential: 0,
  preferred: 0,
});

const handleRedeem = () => {
  if (!discountValue.value) return;
  // TODO: check code
  isApplied.value = true;
  discountPlanPrice.basic =
    planPrice.basic - (planPrice.basic * discountValue.value) / 100;
  discountPlanPrice.essential =
    planPrice.essential - (planPrice.essential * discountValue.value) / 100;
  discountPlanPrice.preferred =
    planPrice.preferred - (planPrice.preferred * discountValue.value) / 100;
};

const selectedPlan = ref();

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

const formatPrice = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
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
  min-width: 100px !important;
}

.temp {
  position: "absolute";
}

.border-row {
  border-bottom: #dbdbdb solid 1px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  padding: 0 !important;
  border-style: dashed;
  height: 60px;
}

.header-row {
  border-bottom: #dbdbdb solid 1px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  height: 200px;
}

.footer-row {
  padding: 0 !important;
  height: 200px;
}

.price-cell {
  padding: 8px;
  margin-left: 16px;
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 0px #0000001f;
  padding: 10px 50px 10px 50px;
}

.header-cell {
  padding: 8px;
  margin-left: 16px;
  height: 100% !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 1px 5px 0px #0000001f;
  padding: 10px 20px 10px 20px;
}

.footer-cell {
  padding: 8px;
  margin-left: 16px;
  height: 100% !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 1px 5px 0px #0000001f;
  gap: 4px;
}

.name-cell {
  padding: 8px;
  margin-left: 16px;
  height: 100% !important;
  display: flex;
  align-items: center;
}

.text-title {
  font-family: "Noto Sans";
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: left;
}

.text-description {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
}

.selectedHeader {
  background-color: #e5f2ff;
  border: 2px solid #1976d2;
  border-bottom: 0;
}

.selectedFooter {
  background-color: #e5f2ff;
  border: 2px solid #1976d2;
  border-top: 0;
}

.selectedBody {
  background-color: #e5f2ff;
  border: 2px solid #1976d2;
  border-bottom: 0;
  border-top: 0;
}

.link-text {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #1976d2;
  text-transform: lowercase;
}

.costPrice {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
}

.select-button {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  text-transform: capitalize;
  margin-left: 4px;
}

.tag {
  width: 101px;
  height: 20px;
  top: 240px;
  left: 857px;
  padding: 0px, 12px, 0px, 12px;
  border-radius: 10px;
  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.polular-text {
  font-family: "Noto Sans";
  font-size: 10px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  text-transform: uppercase;
}

.discount-tag {
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.discount-text {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.discounted-box {
  min-width: 50px;
  height: 20px;
  padding: 0px, 12px, 0px, 12px;
  border-radius: 10px;
  gap: 6px;
  background-color: #ff5252;
}

.discounted-value {
  font-family: "Noto Sans";
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
}
.discounted-price {
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  color: #377e22;
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
