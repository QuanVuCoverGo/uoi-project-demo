<template>
  <div class="groups mb-3">
    <div class="label mb-2">{{ label }}</div>
    <slot />
  </div>
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
      toggle: null,
    };
  },
};
</script>

<style>
.tripText {
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 1px;
  text-align: center;
}

.description {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1px;
  text-align: center;
}

.v-card {
  min-width: 292px;
}

.label {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}
</style>
