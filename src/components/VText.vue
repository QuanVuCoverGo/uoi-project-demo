<template>
  <div class="label">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "This is the custom text...",
    },
  },
  computed: {
    cssClass() {
      return this.customCss;
    },
  },
};
</script>

<style scoped></style>
