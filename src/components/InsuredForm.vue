<template>
  <v-card style="padding: 30px 70px" class="applicant-card">
    <template v-slot:title>
      <div class="card-padding">
        <p class="card-title mb-5 text-left">
          Insured Person {{ index }} <span v-if="type">({{ type }})</span>
        </p>
      </div>
    </template>
    <template v-slot:text>
      <div class="d-flex flex-column justify-center align-center">
        <v-text-field
          variant="outlined"
          label="Full name"
          class="w-100 mb-3"
          hint="As per NRIC/passport"
          persistent-hint
          v-model="inputValue.fullName"
        >
        </v-text-field>
        <v-text-field
          variant="outlined"
          class="w-100"
          label="Date of birth"
          v-model="inputValue.dateOfBirth"
        >
        </v-text-field>
        <v-text-field
          variant="outlined"
          class="w-100"
          label="NRIC or passport number"
          v-model="inputValue.NRICorPassport"
        >
        </v-text-field>
      </div>
    </template>
  </v-card>
</template>
<script setup>
import { useVModel } from "@/composables/useVModel";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: { type: String },
  modelValue: { type: Object },
  index: { type: Number, default: 1 },
});

const emits = defineEmits(["update:modelValue"]);

const inputValue = useVModel(props, "modelValue", emits);
</script>
<style></style>
