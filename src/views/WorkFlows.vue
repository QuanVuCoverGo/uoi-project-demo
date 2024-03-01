<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px">
    <TravelForms />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TravelForms from "../components/TravelForms.vue";

export default defineComponent({
  name: "WorkFlows",
  props: {
    msg: String,
  },
  components: {
    TravelForms,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
