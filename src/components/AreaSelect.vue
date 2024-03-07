<template>
  <v-autocomplete
    v-model="area"
    :items="areas"
    color="blue-grey-lighten-2"
    item-title="name"
    item-value="name"
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

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: Object },
  showLabel: { type: Boolean, default: false },
});

const areas = [
  {
    name: "Area 1",
    description:
      "Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Thailand and Vietnam",
  },
  {
    name: "Area 2",
    description:
      "Asia countries excluding Middle East countries, Central Asia countries and Russian Federation. ",
  },
  {
    name: "Area 3",
    description: "Anywhere in the world",
  },
  {
    name: "Area 4",
    description:
      "ASEAN, Asia countries excluding Middle East countries, Central Asia countries and Russian Federation.",
  },
  {
    name: "Area 5",
    description: "Anywhere in the world",
  },
];

const emits = defineEmits(["update:modelValue"]);

const area = useVModel(props, "modelValue", emits);
</script>
<style></style>
