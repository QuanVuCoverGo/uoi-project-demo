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
          class="w-100 mb-2"
          hint="As per NRIC/passport"
          :rules="fullNameRules"
          persistent-hint
          v-model="inputValue.fullName"
        >
        </v-text-field>
        <date-picker
          class="w-100 mb-2"
          color="primary"
          label="Date of birth"
          :rules="getRequiredRules('Date of birth')"
          v-model="inputValue.dateOfBirth"
        >
        </date-picker>

        <v-text-field
          variant="outlined"
          class="w-100 mb-2"
          label="NRIC or passport number"
          type="password"
          :rules="getRequiredRules('NRIC or passport number')"
          v-model="inputValue.NRICorPassport"
        >
        </v-text-field>
      </div>
    </template>
  </v-card>
</template>
<script setup>
import { getRequiredRules, fullNameRules } from "@/composables/rules";
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
