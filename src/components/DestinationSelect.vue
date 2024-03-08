<template>
  <v-autocomplete
    v-model="destination"
    :items="destinations"
    color="blue-grey-lighten-2"
    item-title="name"
    item-value="name"
    variant="outlined"
    outline
    chips
    closable-chips
    hint="If you visit more than one country, select the furthest country"
    persistent-hint
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
import { useVModel } from "@/composables/useVModel";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: String },
  showLabel: { type: Boolean, default: false },
});

const destinations = [
  {
    name: "France",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
  },
  {
    name: "Japan",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
  {
    name: "Brazil",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
  },
  {
    name: "Canada",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    name: "Australia",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
  },
  {
    name: "Vietnam",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
  },
];

const emits = defineEmits(["update:modelValue"]);

const destination = useVModel(props, "modelValue", emits);
</script>
<style></style>
