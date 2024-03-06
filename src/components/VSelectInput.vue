<template>
  <div class="groups">
    <div class="label">{{ label }}</div>
    <v-select
      label=""
      type="select"
      :hint="helper"
      persistent-hint
      variant="outlined"
      v-model="inputValue"
      :items="['Japan']"
      :class="cssClass"
    ></v-select>
  </div>
</template>

<script setup>
import { useVModel } from "@/composables/useVModel";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: { type: String },
  label: { type: String },
  modelValue: { type: Object },
  showLabel: { type: Boolean, default: false },
});

const emits = defineEmits(["update:modelValue"]);

const inputValue = useVModel(props, "modelValue", emits);
</script>

<style>
.label {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}
.groups {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
}
</style>
