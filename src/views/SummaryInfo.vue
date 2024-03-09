<template>
  <v-container class="pa-10 w-75">
    <v-btn
      size="x-large"
      prepend-icon="arrow_back"
      variant="text"
      color="primary"
      class="text-none"
      @click="store.step = 3"
      >Back</v-btn
    >

    <div class="d-flex justify-center align-center">
      <h3 class="text-left color-blue header mb-10">Summary</h3>
    </div>
    <v-form class="d-flex flex-column" @submit.prevent="handleNext">
      <div class="d-flex flex-column justify-center align-center ga-16">
        <div class="d-flex flex-column display-card">
          <v-btn
            variant="text"
            @click="store.step = 3"
            class="absolute-left-btn text-none text-blue-darken-3"
            ><v-icon color="blue-darken-3 mr-2">edit</v-icon> Edit</v-btn
          >
          <div
            class="d-flex flex-column justify-center align-left ga-10 card-detail"
          >
            <div
              v-if="isSingleTrip"
              class="d-flex flex-column justify-center align-left ga-2"
            >
              <p class="display-label">Destination</p>
              <p
                v-for="destination in basicInformation.destinations"
                :key="destination"
                class="display-bold-value mb-2"
              >
                {{ destination }}
              </p>
            </div>
            <div
              v-else
              class="d-flex flex-column justify-center align-left ga-2"
            >
              <p class="display-label">Area</p>
              <p class="display-bold-value">
                {{ basicInformation.area }}
              </p>
              <p class="display-bold-value">
                {{ getAreaDescription(basicInformation.area) }}
              </p>
            </div>
            <div class="d-flex flex-column justify-center align-left ga-2">
              <p class="display-label">Duration of insurance</p>
              <p class="display-bold-value">
                {{
                  formatDate(basicInformation?.startDate?.toString() || "") +
                  " - " +
                  formatDate(basicInformation?.endDate?.toString() || "")
                }}
              </p>
            </div>
            <div class="d-flex flex-column justify-center align-left ga-2">
              <p class="display-label">Insurance plan</p>
              <p class="display-bold-value">
                {{ store.selectedPlan }}
              </p>
            </div>
          </div>
        </div>
        <InsuredDisplay
          v-if="store.insureds"
          @onEdit="store.step = 3"
          :insuredInfo="{ ...store.insureds, email: store.insurance.email }"
          :index="1"
          :type="'applicant'"
        ></InsuredDisplay>
        <template v-if="isIndividualPlan">
          <div v-for="n in store.insurance.traveller - 1" :key="n">
            <InsuredDisplay
              v-if="store.insureds.travellers[n - 1]"
              @onEdit="store.step = 3"
              :insuredInfo="store.insureds.travellers[n - 1]"
              :index="n + 1"
            ></InsuredDisplay>
          </div>
        </template>
        <template v-else>
          <div v-for="n in store.insurance.adults - 1" :key="n">
            <InsuredDisplay
              v-if="store.insureds.adults[n - 1]"
              @onEdit="store.step = 3"
              :type="'Adult'"
              :insuredInfo="store.insureds.adults[n - 1]"
              :index="n + 1"
            ></InsuredDisplay>
          </div>
          <div v-for="n in store.insurance.children" :key="n">
            <InsuredDisplay
              v-if="store.insureds.children[n - 1]"
              @onEdit="store.step = 3"
              :type="'Child'"
              :insuredInfo="store.insureds.children[n - 1]"
              :index="n + store.insureds.adults.length + 1"
            ></InsuredDisplay>
          </div>
        </template>
      </div>
      <div class="mt-4 d-flex justify-center">
        <div class="d-flex flex-row justify-center align-center ga-4 w-50">
          <p class="total-price">Total premium:</p>
          <p class="total-value">
            SGD {{ formatPrice(store.selectedPlanPrice) }}
          </p>
        </div>
      </div>
      <div class="mt-4 d-flex justify-center">
        <div
          class="d-flex flex-column justify-center align-center ga-2 term-box"
        >
          <p class="term-label w-100">Acknowledgement and Confirmation</p>
          <p class="term-text">
            I/We declare that the statements and particulars in this electronic
            proposal are true and that I/We have not misstated or suppressed any
            material facts.  I/We agree that this electronic proposal, together
            with any other information supplied by me/us form the basis of any
            contract of insurance effected thereon. I/We undertake to inform UOI
            of any material alteration to these facts whether occurring before
            or after completion of the contract of insurance.<br /><br />
            I/We acknowledge and agree that UOI may collect, use, disclose,
            transfer my/our personal data for the Purposes stated in UOI’s
            Privacy Notice which can be found at www.uoi.com.sg. <br /><br />
            I/We also acknowledge by providing personal data relating to a third
            party (eg. Information of my/our directors, shareholders and
            employees), I/We represent and warrant that the consent of that
            third party has been obtained for the collection, use and disclosure
            of the personal data for the Purposes stated in UOI’s Privacy
            Notice. UOI may disclose personal data to its third party service
            providers (including lawyers/law firms), which may be sited outside
            of Singapore, for one or more of the above Purposes, as such third
            party service providers or agents, if engaged by UOI, would be
            processing such personal data for UOI for one or more Location of
            Insured Premise (if different from address stated above): of the
            above Purposes. This may include disclosure to industry
            association.<br /><br />
            I/We further acknowledge and agree to the disclosure of my personal
            data to United Overseas Bank Limited and its related corporations
            for the collection, use and disclosure of my personal data for
            marketing and analytics purposes. I further acknowledge that by
            providing personal data relating to a third party (eg. Information
            of my dependent, spouse, children, parents and/or employees), I
            represent and warrant that the consent of that third party has been
            obtained for the collection, use and disclosure of the personal data
            for marketing and analytics purposes
          </p>
          <v-checkbox
            :rules="getRequiredRules('This action')"
            v-model="store.isTermAgreed"
            class="confirm-box"
          >
            <template v-slot:label>
              <p class="term-text">
                I/We agree to the above Acknowledgement and Confirmation
              </p>
            </template>
          </v-checkbox>
        </div>
      </div>
      <div class="mt-16 d-flex justify-center">
        <div class="d-flex flex-row justify-center ga-4 w-50">
          <v-btn
            size="x-large"
            prepend-icon="arrow_back"
            variant="outlined"
            color="primary"
            class="text-none"
            @click="store.step = 3"
            >Back</v-btn
          >
          <v-btn
            class="text-none"
            size="x-large"
            prepend-icon="arrow_forward"
            color="primary"
            type="submit"
            >Continue</v-btn
          >
        </div>
      </div>
    </v-form>
    <!-- applicant card  -->
  </v-container>
</template>
<script setup lang="ts">
import { useInformationStore } from "../stores/InformationStore";
import { computed, ref, reactive, onBeforeMount } from "vue";
import moment from "moment";
import InsuredDisplay from "@/components/InsuredDisplay.vue";
import { getRequiredRules } from "@/composables/rules";
import { getAreaDescription } from "@/utils/common";

const store = useInformationStore();

const basicInformation = computed(() => store.insurance);

const isIndividualPlan = computed(
  () => store.insurance.typeOfInsurance === "individual"
);
const isSingleTrip = computed(
  () => store.insurance.typeOfInsuranceTrip === "single"
);

const handleNext = () => {
  if (!store.isTermAgreed) return;
  store.step = 5;
};

const formatDate = (date: string) => {
  return moment(date).format("DD MMMM YYYY");
};

const formatPrice = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
</script>
<style>
.a-main {
  background-color: #f4f4f6;
  min-height: 100vh;
}

.applicant-card {
  width: 580px;
  border-radius: 8px;
  gap: 40px;
  background-color: "red";
}

.card-title {
  font-family: "Noto Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 1px;
  text-align: left;
}

.card-subtitle {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.card-content {
  width: 580px;

  border-radius: 8px;
  gap: 40px;
}

.section-text {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 10px;
}

.display-label {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
}

.display-bold-value {
  font-family: "Noto Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
}

.display-value {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
  color: #000000;
}
.absolute-left-btn {
  position: absolute;
  align-self: flex-end;
  text-transform: capitalize;
  margin-top: 10px;
  margin-right: 10px;
}

.display-card {
  width: 580px;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px #0000001f;
  background-color: white;
}

.card-detail {
  padding: 40px 80px;
}

.total-price {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.total-value {
  font-family: "Noto Sans";
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: left;
}

.term-text {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
}

.term-label {
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
}

.term-box {
  width: 580px;
  padding: 20px 30px;
  border-radius: 8px;
  gap: 12px;
  background-color: #0000000f;
}

.confirm-box {
  width: 520px;
  height: 64px;
  padding: 20px;
  border-radius: 8px;
  gap: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
