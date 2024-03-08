<template>
  <v-menu v-model="isMenuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
        :label="label"
        :model-value="formattedDate"
        readonly
        v-bind="props"
        variant="outlined"
        :disabled="disabled"
        :rules="rules"
        class="w-100"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="selectedDate"
      hide-actions
      title=""
      :color="color"
      :min="minDate"
    >
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { useVModel } from "@/composables/useVModel";
import { ref, computed, watch, defineProps, defineEmits } from "vue";

const props = defineProps([
  "label",
  "color",
  "modelValue",
  "minDate",
  "maxDate",
  "disabled",
  "rules",
]);
const emit = defineEmits("update:modelValue");

const isMenuOpen = ref(false);
const selectedDate = useVModel(props, "modelValue", emit);

const formattedDate = computed(() => {
  return selectedDate.value ? selectedDate.value.toLocaleDateString("en") : "";
});
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
