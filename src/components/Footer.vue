<template>
  <div class="d-flex justify-center align-center container">
    <p class="text-footer" :class="`text-${color}`">
      Copyright © 2024 United Overseas Insurance Limited Co. Reg. No.
      197100152R. All Rights Reserved.
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: "black" },
});
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
}

.text-footer {
  font-family: "Noto Sans";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
