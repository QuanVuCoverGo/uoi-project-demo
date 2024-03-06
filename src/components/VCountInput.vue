<template>
  <increase-input
    :label="label"
    v-model="startDate"
    color="primary"
  ></increase-input>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    cssClass() {
      return this.customCss;
    },
  },
  data() {
    return {
      inputValue: new Date(),
    };
  },
};
</script>

<style scoped></style>
