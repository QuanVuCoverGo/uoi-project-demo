<template>
  <div class="d-flex justify-center align-center container">
    <v-img
      width="151"
      height="51"
      src="../assets/logo.png"
      class="absolute-btn"
    ></v-img>
    <v-stepper v-if="showHeader" v-model="store.step" class="w-75">
      <v-stepper-header>
        <template v-for="{ name, index } in steps" :key="index">
          <v-stepper-item
            :title="name"
            :value="index"
            :complete="index < store.step"
            :disabled="index > store.step"
          ></v-stepper-item>

          <v-divider v-if="index !== steps.length"></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script setup>
import { useInformationStore } from "@/stores/InformationStore";

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: String },
  showLabel: { type: Boolean, default: false },
  showHeader: { type: Boolean, default: true },
});

const store = useInformationStore();

const steps = [
  { index: 1, name: "Trip" },
  { index: 2, name: "Plan" },
  { index: 3, name: "Insured" },
  { index: 4, name: "Summary" },
  { index: 5, name: "Payment" },
];
</script>

<style scoped>
.absolute-btn {
  position: absolute !important; /* Important to override default styles */
  top: 10px; /* Adjust positioning as needed */
  left: 10px; /* Adjust positioning as needed */
}
.container {
  background-color: white;
  width: 100%;
  height: 66px;
}

.v-stepper.v-sheet {
  box-shadow: none !important;
}

:deep(.v-stepper-item--selected .v-stepper-item__avatar.v-avatar) {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
:deep(.v-stepper-item--complete .v-stepper-item__avatar.v-avatar) {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
</style>
