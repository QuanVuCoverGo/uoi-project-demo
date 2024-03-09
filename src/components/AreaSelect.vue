<template>
  <v-autocomplete
    v-model="area"
    :items="AREAS_LIST"
    color="blue-grey-lighten-2"
    item-title="name"
    item-value="value"
    variant="outlined"
    outline
    chips
    closable-chips
    persistent-hint
  >
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :title="item.raw.name"
        :subtitle="item.raw.description"
      >
      </v-list-item>
    </template>
  </v-autocomplete>
</template>
<script setup>
import { useVModel } from "@/composables/useVModel";
import { defineProps, defineEmits } from "vue";
import { AREAS_LIST } from "@/constants";

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: String },
  showLabel: { type: Boolean, default: false },
});

const emits = defineEmits(["update:modelValue"]);

const area = useVModel(props, "modelValue", emits);
</script>
<style></style>
