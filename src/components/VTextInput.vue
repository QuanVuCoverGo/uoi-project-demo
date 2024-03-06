<template>
  <div class="label">{{ label }}</div>
  <v-text-field
    :label="showLabel ? label : ''"
    v-model="inputValue"
    variant="outlined"
  >
  </v-text-field>
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

// export default {
//   props: {
//     customCss: {
//       type: String,
//       default: "",
//     },
//     label: {
//       type: String,
//       default: "",
//     },
//   },
//   computed: {
//     cssClass() {
//       return this.customCss;
//     },
//   },
//   data() {
//     return {
//       inputValue: "",
//     };
//   },
// };
</script>

<style scoped></style>
