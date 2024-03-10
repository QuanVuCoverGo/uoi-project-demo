<template>
  <v-autocomplete
    v-model="destinations"
    :items="COUNTRIES_WITH_FLAG"
    color="blue-grey-lighten-2"
    item-title="name"
    item-value="name"
    variant="outlined"
    outline
    chips
    closable-chips
    hint="If you visit more than one country, select the furthest country"
    persistent-hint
    v-bind="props"
    multiple
  >
    <template v-slot:chip="{ props, item }">
      <v-chip
        v-bind="props"
        :prepend-avatar="item.raw.imageSrc"
        :text="item.raw.name"
      ></v-chip>
    </template>

    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :prepend-avatar="item.raw.imageSrc"
        :title="item.raw.name"
      >
      </v-list-item>
    </template>
  </v-autocomplete>
</template>
<script setup>
import { getRequiredRules } from "@/composables/rules";
import { useVModel } from "@/composables/useVModel";
import { COUNTRIES_WITH_FLAG } from "@/constants";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: { type: String, default: "Destination" },
  modelValue: { type: Object },
  showLabel: { type: Boolean, default: false },
});

const emits = defineEmits(["update:modelValue"]);

const destinations = useVModel(props, "modelValue", emits);
</script>
<style></style>
