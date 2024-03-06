<template>
  <v-card
    background-color="white"
    :width="width"
    :height="height"
    class="card"
    :class="cssClass"
  >
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    customCss: {
      type: String,
      default: "d-flex justify-center  flex-column pe-10",
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 760,
    },
  },
  computed: {
    cssClass() {
      return this.customCss;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  padding: 40px 80px 40px 80px !important;
}
</style>
