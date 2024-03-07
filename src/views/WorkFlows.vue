<template>
  <Header />
  <v-main
    class="d-flex align-center justify-center flex-column main ga-10"
    style="min-height: 300px"
  >
    <v-form class="d-flex flex-column">
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
                  :class="['d-flex align-center pa-4']"
                  min-height="191"
                  :color="isSelected ? 'white' : 'grey-lighten-3'"
                  dark
                  @click="toggle"
                >
                  <v-icon
                    v-if="isSelected"
                    class="absolute-button"
                    color="info"
                    size="small"
                  >
                    check_circle
                  </v-icon>
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
                    <p class="description">
                      Single trip with start and end date
                    </p>
                  </div>
                </v-card>
              </v-item>
              <v-item v-slot="{ isSelected, toggle }">
                <v-card
                  :class="['d-flex align-center pa-4']"
                  min-height="191"
                  :color="isSelected ? 'white' : 'grey-lighten-3'"
                  dark
                  @click="toggle"
                >
                  <v-icon
                    v-if="isSelected"
                    class="absolute-button"
                    color="info"
                    size="small"
                  >
                    check_circle
                  </v-icon>
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
                    <p class="description">
                      Single trip with start and end date
                    </p>
                  </div>
                </v-card>
              </v-item>
            </v-item-group>
          </VGroupItems>
          <!-- destination  -->
          <template
            v-if="
              !store.insurance.typeOfInsuranceTrip ||
              store.insurance.typeOfInsuranceTrip === 'single'
            "
          >
            <VGroupItems label="Where will you travel">
              <DestinationSelect v-model="store.insurance.destination" />
            </VGroupItems>
            <VGroupItems label="When will you travel?">
              <v-row class="w-75">
                <v-col>
                  <date-picker
                    label="Start Date"
                    v-model="store.insurance.startDate"
                    color="primary"
                    :minDate="minDate"
                  />
                </v-col>
                <v-col>
                  <date-picker
                    label="End Date"
                    v-model="store.insurance.endDate"
                    color="primary"
                    :maxDate="maxDate"
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
                <p class="insuredDays ml-2">
                  You will be insured for
                  <span class="font-weight-bold">{{ numberOfDays }} days</span>
                </p>
              </v-row>
            </VGroupItems>
          </template>
          <template v-else>
            <VGroupItems label="Select area">
              <AreaSelect v-model="store.insurance.area" />
            </VGroupItems>
            <VGroupItems label="When will your insurance start?">
              <v-row class="w-75">
                <v-col>
                  <date-picker
                    label="Start Date"
                    v-model="store.insurance.startDate"
                    color="primary"
                    :minDate="minDate"
                  />
                </v-col>
                <v-col></v-col>
              </v-row>
            </VGroupItems>
          </template>
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
        @click="handleNext"
      >
        <template v-slot:prepend>
          <v-icon>arrow_forward</v-icon>
        </template>
        Continue</v-btn
      >
    </v-form>
  </v-main>
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
  store.insurance = { ...store.insurance };
  router.push({ name: "Pricings" });
};

watch(
  () => store.insurance.startDate,
  (v) => {
    if (v) {
      store.insurance.endDate = moment(v).add(7, "day").toDate();
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
<style>
.main {
  background-image: url(../assets/background.png);
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: top;
  height: 100%;
  background-attachment: fixed;
}

.header {
  font-family: "Noto Sans";
  font-size: 40px;
  font-weight: 300;
  line-height: 54px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #275cb2;
}

.insuredDays {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.fit-content {
  width: fit-content !important;
  border-radius: 4px;
}

.absolute-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.v-btn--block {
  min-width: 0 !important;
}
</style>
