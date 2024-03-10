<template>
  <Header :showHeader="false" />
  <v-main
    class="d-flex align-center justify-center flex-column ga-10 brown-main"
    style="min-height: 300px"
  >
    <v-container class="pa-10 w-75">
      <div class="d-flex flex-column justify-center align-center ga-16">
        <v-card style="padding: 30px 70px" class="applicant-card">
          <template v-slot:title>
            <div class="d-flex flex-column justify-center align-center ga-4">
              <v-icon size="x-large" color="#4CAF50"
                >check_circle_outlined</v-icon
              >
              <p class="card-title mb-4 text-center">Your policy is issued</p>
            </div>
          </template>
          <template v-slot:text>
            <div class="d-flex flex-column justify-center align-center ga-4">
              <p class="card-subtitle text-center">
                Policy number:
                <span class="font-weight-bold">302394390023</span>
              </p>
              <p class="card-subtitle text-center">
                Your insurance will be active from
                {{
                  moment(store.insurance.startDate).format("DD MMMM YYYY")
                }}
                to {{ moment(store.insurance.endDate).format("DD MMMM YYYY") }}.
              </p>
              <v-btn href="https://drive.google.com/drive/u/0/home" target="_blank" class="text-none text-purple-darken-2" variant="outlined"
                >View policy</v-btn
              >
            </div>
          </template>
        </v-card>
      </div>
      <div class="d-flex flex-column justify-center align-center ga-16 mt-8">
        <div class="w-50 d-flex justify-center flex-column ga-4">
          <p class="card-subtitle">
            Please take note of the following important points:
          </p>
          <ul class="ml-6">
            <li v-for="n in notes" class="card-subtitle">{{ n }}</li>
          </ul>
          <p class="card-subtitle font-weight-bold">
            We wish you a safe and enjoyable trip!
          </p>
        </div>
      </div>

      <!-- applicant card  -->
    </v-container>
  </v-main>
  <Footer />
</template>
<script setup>
import { useInformationStore } from "../stores/InformationStore";
import { computed, ref, reactive, onBeforeMount } from "vue";
import moment from "moment";

const store = useInformationStore();

const notes = [
  "If you need any medical assistance while overseas, please call UOI 24-hour Emergency Assist hotline at +65 6222 7737. You may want to save this phone number in your mobile phone for emergency use.",
  "Do make a police report for any loss of property or money at the country of loss.",
  "Keep all receipts, medical bills, official documentations and report for claims purposes.",
  "If initial treatment for any injury or illness is not sought overseas, you need to seek medical treatment within three (3) days upon return to Singapore.",
  "To make a claim upon your return to Singapore, please call Broadspire by Crawford & Company at 6632 8639 during its business hours.",
];
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
