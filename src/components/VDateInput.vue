<template>
  <date-picker
    :label="label"
    v-model="inputValue"
    color="primary"
  ></date-picker>
</template>

<script>
export default {
  props: {
    customCss: {
      type: String,
      default: "",
    },
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
