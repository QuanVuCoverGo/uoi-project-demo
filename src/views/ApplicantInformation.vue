<template>
  <v-container class="pa-10 w-75">
    <v-btn
      size="x-large"
      prepend-icon="arrow_back"
      variant="text"
      color="primary"
      class="text-none"
      @click="store.step = 2"
      >Back</v-btn
    >
    <div class="d-flex justify-center align-center">
      <h3 class="text-left color-blue header mb-10">Who will be insured</h3>
    </div>
    <v-form class="d-flex flex-column" @submit.prevent="handleNext">
      <div class="d-flex flex-column justify-center align-center ga-16">
        <v-card style="padding: 30px 70px" class="applicant-card">
          <template v-slot:title>
            <div class="card-padding">
              <p class="card-title mb-4 text-center">
                Insured Person 1(Applicant)
              </p>
            </div>
          </template>
          <template v-slot:subtitle>
            <p class="card-subtitle text-center mb-4">
              Applicant is a person who purchases the insurance
            </p>
          </template>
          <template v-slot:text>
            <div class="d-flex flex-column justify-center align-center">
              <v-text-field
                variant="outlined"
                label="Full name"
                class="w-100 mb-3"
                hint="As per NRIC/passport"
                :rules="getRequiredRules('Full name')"
                persistent-hint
                v-model="store.insureds.fullName"
              >
              </v-text-field>
              <date-picker
                class="w-100"
                color="primary"
                label="Date of birth"
                :rules="getRequiredRules('Date of birth')"
                v-model="store.insureds.dateOfBirth"
              >
              </date-picker>
              <v-text-field
                variant="outlined"
                class="w-100"
                type="password"
                label="NRIC or passport number"
                :rules="getRequiredRules('NRIC or passport number')"
                v-model="store.insureds.NRICorPassport"
              >
              </v-text-field>
              <div class="mt-4 w-100">
                <p class="section-text">Address</p>
                <v-row>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      label="Floor/Unit number"
                      :rules="getRequiredRules('Floor/Unit number')"
                      v-model="store.insureds.address.floorOrUnitNumber"
                    />
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      label="Block"
                      :rules="getRequiredRules('Block')"
                      v-model="store.insureds.address.block"
                    />
                  </v-col>
                </v-row>

                <v-text-field
                  variant="outlined"
                  label="Building"
                  :rules="getRequiredRules('Building')"
                  v-model="store.insureds.address.building"
                />

                <v-text-field
                  variant="outlined"
                  label="Street"
                  :rules="getRequiredRules('Street')"
                  v-model="store.insureds.address.street"
                />

                <v-text-field
                  variant="outlined"
                  label="PostalCode"
                  :rules="getRequiredRules('PostalCode')"
                  v-model="store.insureds.address.postalCode"
                />
              </div>
            </div>
            <div class="mt-4 w-100">
              <p class="section-text">We will send policy documents to</p>
              <v-text-field
                variant="outlined"
                label="Email"
                disabled
                v-model="store.insurance.email"
              />
            </div>
          </template>
        </v-card>
        <template v-if="isIndividualPlan">
          <div v-for="n in store.insurance.traveller - 1" :key="n">
            <InsuredForm
              v-if="store.insureds.travellers[n - 1]"
              v-model="store.insureds.travellers[n - 1]"
              :index="n + 1"
            ></InsuredForm>
          </div>
        </template>
        <template v-else>
          <div v-for="n in store.insurance.adults - 1" :key="n">
            <InsuredForm
              v-if="store.insureds.adults[n - 1]"
              :type="'Adult'"
              v-model="store.insureds.adults[n - 1]"
              :index="n + 1"
            ></InsuredForm>
          </div>
          <div v-for="n in store.insurance.children" :key="n">
            <InsuredForm
              v-if="store.insureds.children[n - 1]"
              :type="'Child'"
              v-model="store.insureds.children[n - 1]"
              :index="n + store.insureds.adults.length + 1"
            ></InsuredForm>
          </div>
        </template>
      </div>
      <div class="mt-16 d-flex justify-center">
        <div class="d-flex flex-row justify-center ga-4 w-50">
          <v-btn
            size="x-large"
            prepend-icon="arrow_back"
            variant="outlined"
            color="primary"
            class="text-none"
            @click="store.step = 2"
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
<script setup>
import { useInformationStore } from "../stores/InformationStore";
import { computed, ref, reactive, onBeforeMount } from "vue";
import { v4 as uuid } from "uuid";
import { getRequiredRules } from "@/composables/rules";

const store = useInformationStore();

const isIndividualPlan = computed(
  () => store.insurance.typeOfInsurance === "individual"
);

const checkIfIsValidObject = (object) => {
  return Object.values(object).every((value) => Boolean(value));
};

const handleNext = () => {
  if (!checkIfIsValidObject(store.insureds)) return;
  const isInvalid = store.insureds.travellers?.find(
    (item) => !checkIfIsValidObject(item)
  );
  const isInvalidAdult = store.insureds.adults?.find(
    (item) => !checkIfIsValidObject(item)
  );
  const isInvalidChild = store.insureds.children?.find(
    (item) => !checkIfIsValidObject(item)
  );

  if (isInvalid || isInvalidAdult || isInvalidChild) return;

  store.step = 4;
};

onBeforeMount(() => {
  if (isIndividualPlan.value) {
    const travellers = store.insureds.travellers?.sort() || [];
    const list = [];
    for (let index = 0; index < store.insurance?.traveller - 1; index++) {
      const existed = travellers[index];
      const traveller = {
        id: existed?.id || uuid(),
        fullName: existed?.fullName || "",
        dateOfBirth: existed?.dateOfBirth || undefined,
        NRICorPassport: existed?.NRICorPassport || "",
      };
      list.push(traveller);
    }
    store.insureds.travellers = list;
  } else {
    const adults = store.insureds.adults?.sort() || [];
    const adultList = [];
    for (let index = 0; index < store.insurance?.adults - 1; index++) {
      const existed = adults[index];
      const adult = {
        id: existed?.id || uuid(),
        fullName: existed?.fullName || "",
        dateOfBirth: existed?.dateOfBirth || undefined,
        NRICorPassport: existed?.NRICorPassport || "",
      };
      adultList.push(adult);
    }
    store.insureds.adults = adultList;

    const children = store.insureds.children?.sort() || [];
    const list = [];
    for (let index = 0; index < store.insurance?.children; index++) {
      const i = store.insurance?.adults?.length + index;
      const existed = children[i];
      const childrenItem = {
        id: existed?.id || uuid(),
        fullName: existed?.fullName || "",
        dateOfBirth: existed?.dateOfBirth || undefined,
        NRICorPassport: existed?.NRICorPassport || "",
      };
      list.push(childrenItem);
    }
    store.insureds.children = list;
  }
});

const temp = ref({});
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
</style>
