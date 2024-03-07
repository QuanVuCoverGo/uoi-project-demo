<template>
  <v-container class="m3-4">
    <v-row class="ga-4 w-75 p-2">
      <v-col>
        <div class="label mr-10">{{ label }}</div>
      </v-col>
      <v-col>
        <v-row class="ga-4">
          <v-btn
            variant="outlined"
            :disabled="count === (min || 1)"
            @click="descrease()"
            >-</v-btn
          >
          <p class="label pt-2">{{ count }}</p>
          <v-btn
            variant="outlined"
            :disabled="count === (max || 8)"
            @click="increase()"
            >+</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";
import { useVModel } from "@/composables/useVModel";

const props = defineProps(["label", "color", "modelValue", "min", "max"]);
const { label, color, modelValue, min, max } = props;
const emit = defineEmits("update:modelValue");
const count = useVModel(props, "modelValue", emit);

const increase = () => {
  count.value = count.value + 1;
};
const descrease = () => {
  count.value = count.value - 1;
};
</script>
<style>
.v-overlay__content:has(> .v-date-picker) {
  min-width: auto !important;
}
.v-picker-title {
  padding: 0 !important;
}
</style>
`
