<template>
  <Header />

  <v-main
    class="d-flex align-center justify-center flex-column ga-10 pb-12"
    :class="store.step === 1 ? 'main' : 'brown-main'"
    style="min-height: 300px"
  >
    <template v-if="store.step === 1">
      <TripInformation />
    </template>
    <template v-if="store.step === 2">
      <Pricings />
    </template>
    <template v-if="store.step === 3">
      <ApplicantInformation />
    </template>
    <template v-if="store.step === 4">
      <SummaryInfo />
    </template>
    <template v-if="store.step === 5"> <Payment /> </template>
  </v-main>
  <Footer :color="store.step === 1 ? 'white' : 'black'" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";
import { useInformationStore } from "../stores/InformationStore";
import ApplicantInformation from "./ApplicantInformation.vue";
import Pricings from "./Pricings.vue";
import TripInformation from "./TripInformation.vue";
import SummaryInfo from "./SummaryInfo.vue";
import Payment from "./Payment.vue";
import { computed } from "vue";

const store = useInformationStore();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  background-image: url(../assets/background.png);
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: top;
  background-attachment: fixed;
  padding-top: 50px !important;
  padding-bottom: 50px !important;
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

.card-no-shadow {
  box-shadow: none;
  border: 1px solid #0000002e;
}

.brown-main {
  background-color: #f4f4f6;
}
</style>
