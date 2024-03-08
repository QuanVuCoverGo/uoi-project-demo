<template>
  <v-form class="d-flex flex-column" @submit.prevent="handleNext">
    <v-card
      width="800"
      class="d-flex flex-column justify-center self-center pa-10 mb-10"
    >
      <h3 class="text-center color-blue header">Where and when</h3>
      <v-container fluid>
        <VGroupItems label="Select type of insurance">
          <v-item-group
            class="d-flex justify-space-around flex-row"
            v-model="tripType"
          >
            <v-item v-slot="{ isSelected, toggle }">
              <v-card
                :class="['d-flex align-center pa-4 card-no-shadow']"
                min-height="191"
                :color="isSelected ? 'white' : 'grey-lighten-3'"
                dark
                @click="!isSelected && toggle?.()"
              >
                <v-icon
                  v-if="isSelected"
                  class="absolute-button"
                  color="info"
                  size="small"
                >
                  check_circle
                </v-icon>
                <div class="absolute-left">
                  <v-tooltip
                    max-width="300"
                    text="Single Trip Policy means a Certificate of Insurance and/or Policy where premium is charged according to the selected plan, duration and destination(s) of each Trip undertaken during the Period of Insurance."
                  >
                    <template v-slot:activator="{ props }">
                      <v-icon color="grey-lighten-1" v-bind="props"
                        >error_outline</v-icon
                      >
                    </template>
                  </v-tooltip>
                </div>
                <div class="d-flex align-center flex-column ga-2">
                  <v-icon :color="isSelected ? 'info' : 'none'" size="64">
                    luggage
                  </v-icon>
                  <div
                    :class="isSelected ? 'text-blue-darken-2' : ''"
                    class="tripText"
                  >
                    Single strip
                  </div>
                  <p class="description">Single trip with start and end date</p>
                </div>
              </v-card>
            </v-item>
            <v-item v-slot="{ isSelected, toggle }">
              <v-card
                :class="['d-flex align-center pa-4 card-no-shadow']"
                min-height="191"
                :color="isSelected ? 'white' : 'grey-lighten-3'"
                dark
                @click="!isSelected && toggle?.()"
              >
                <v-icon
                  v-if="isSelected"
                  class="absolute-button"
                  color="info"
                  size="small"
                >
                  check_circle
                </v-icon>
                <div class="absolute-left">
                  <v-tooltip
                    max-width="300"
                    text="Annual Multi-Trip Policy means a Certificate of Insurance and/or Policy issued for the selected Plan where you can make unlimited number of Trips to the selected region of travel but each Trip should not exceed ninety (90) days."
                  >
                    <template v-slot:activator="{ props }">
                      <v-icon color="grey-lighten-1" v-bind="props"
                        >error_outline</v-icon
                      >
                    </template>
                  </v-tooltip>
                </div>

                <div
                  class="d-flex flex-column align-center justify-center ga-2"
                >
                  <v-icon :color="isSelected ? 'info' : 'none'" size="64"
                    >public</v-icon
                  >
                  <div
                    :class="isSelected ? 'text-blue-darken-2' : ''"
                    class="tripText"
                  >
                    Annual multi strip
                  </div>
                  <p class="description">Single trip with start and end date</p>
                </div>
              </v-card>
            </v-item>
          </v-item-group>
        </VGroupItems>
        <!-- destination  -->
        <VGroupItems
          v-if="store.insurance.typeOfInsuranceTrip === 'single'"
          label="Where will you travel"
        >
          <DestinationSelect
            :rules="getRequiredRules('Destination')"
            v-model="store.insurance.destination"
          />
        </VGroupItems>
        <VGroupItems v-else label="Select area">
          <AreaSelect
            :rules="getRequiredRules('Area')"
            v-model="store.insurance.area"
          />
        </VGroupItems>
        <VGroupItems
          :label="
            store.insurance.typeOfInsuranceTrip === 'single'
              ? 'When will you travel?'
              : 'When will your insurance start?'
          "
        >
          <v-row class="w-75">
            <v-col>
              <date-picker
                label="Start Date"
                v-model="store.insurance.startDate"
                color="primary"
                :minDate="minDate"
                :rules="getRequiredRules('Start date')"
              />
            </v-col>
            <v-col>
              <date-picker
                :disabled="
                  store.insurance.typeOfInsuranceTrip === 'annualMulti'
                "
                label="End Date"
                v-model="store.insurance.endDate"
                color="primary"
                :maxDate="maxDate"
                :rules="getRequiredRules('End Date')"
            /></v-col>
          </v-row>
          <v-row
            v-if="
              Boolean(store.insurance.startDate) &&
              Boolean(store.insurance.endDate)
            "
            class="bg-grey-lighten-3 w-auto pa-2 fit-content"
          >
            <v-icon size="small"> check_circle_outline </v-icon>
            <p
              v-if="store.insurance.typeOfInsuranceTrip === 'single'"
              class="insuredDays ml-2"
            >
              You will be insured for
              <span class="font-weight-bold"
                >{{ Math.floor(numberOfDays) }} days</span
              >
            </p>
            <p v-else class="insuredDays ml-2">
              Includes unlimited trips in 365 days not longer than 90 days
            </p>
          </v-row>
        </VGroupItems>

        <!-- end of destination  -->
      </v-container>
    </v-card>
    <v-card
      width="800"
      class="d-flex flex-column justify-center self-center pa-10 mb-10"
    >
      <h3 class="text-center color-blue header">Who will travel?</h3>
      <v-container fluid>
        <VGroupItems label="Select type of insurance">
          <TypeInsurance v-model="insuredsType" />
        </VGroupItems>
        <InsuredCountInput
          v-if="store.insurance.typeOfInsurance === 'individual'"
          label="Traveller"
          v-model="store.insurance.traveller"
        />
        <template v-if="store.insurance.typeOfInsurance === 'family'">
          <InsuredCountInput
            label="Adults"
            v-model="store.insurance.adults"
            :max="2"
          />
          <InsuredCountInput
            label="Children (0 -18)"
            v-model="store.insurance.children"
            :max="7"
          />
        </template>
        <VGroupItems label="Email address">
          <v-text-field
            type="email"
            :rules="emailRules"
            v-model="store.insurance.email"
            variant="outlined"
          />
        </VGroupItems>
      </v-container>
    </v-card>

    <v-btn
      variant="elevated"
      size="x-large"
      class="mt-2 align-self-center bg-blue-darken-2"
      type="submit"
    >
      <template v-slot:prepend>
        <v-icon>arrow_forward</v-icon>
      </template>
      Continue</v-btn
    >
  </v-form>
  <Footer />
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onBeforeMount } from "vue";
import Header from "../components/Header.vue";
import DestinationSelect from "@/components/DestinationSelect.vue";
import moment from "moment";
import TypeInsurance from "@/components/TypeInsurance.vue";
import InsuredCountInput from "@/components/InsuredCountInput.vue";
import VTextInput from "@/components/VTextInput.vue";
import {
  useInformationStore,
  TripType,
  InsuredType,
} from "../stores/InformationStore";
import { useRouter } from "vue-router";
import AreaSelect from "@/components/AreaSelect.vue";
import { set } from "lodash";
import { emailRules, getRequiredRules } from "@/composables/rules";

const store = useInformationStore();
const router = useRouter();

const tripType = ref();
const insuredsType = ref();

const minDate = moment().toDate();
const maxDate = moment(store.insurance.startDate).add(185, "day").toDate();

const numberOfDays = computed(() =>
  moment
    .duration(moment(store.insurance.endDate)?.diff(store.insurance.startDate))
    .asDays()
);

const handleNext = () => {
  if (!store.insurance.email || !/.+@.+\..+/.test(store.insurance.email))
    return;
  store.insurance = { ...store.insurance };
  store.step = 2;
};

watch(
  () => store.insurance.startDate,
  (v) => {
    if (v) {
      if (store.insurance.typeOfInsuranceTrip === "single")
        store.insurance.endDate = moment(v).add(7, "day").toDate();
      else store.insurance.endDate = moment(v).add(365, "day").toDate();
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  () => tripType.value,
  (v) => {
    if (v === undefined || v === null)
      set(store.insurance, "typeOfInsuranceTrip", undefined);
    set(store.insurance, "typeOfInsuranceTrip", TripType[v]);
  }
);

watch(
  () => insuredsType.value,
  (v) => {
    if (v === undefined || v === null)
      set(store.insurance, "typeOfInsurance", undefined);
    else set(store.insurance, "typeOfInsurance", InsuredType[v]);
  }
);

onBeforeMount(() => {
  if (store.insurance?.typeOfInsuranceTrip !== undefined) {
    if (store.insurance?.typeOfInsuranceTrip === "single") tripType.value = 0;
    else tripType.value = 1;
  }
  if (store.insurance?.typeOfInsurance !== undefined) {
    {
      if (store.insurance?.typeOfInsurance === "individual")
        insuredsType.value = 0;
      else insuredsType.value = 1;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
