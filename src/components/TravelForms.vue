<template>
  <div class="d-flex justify-center self-center">
    <v-card
      width="800"
      class="d-flex flex-column justify-center self-center pa-10"
    >
      <slot name="form"></slot>
      <h3 class="text-center color-blue header">Where and when</h3>
      <v-container fluid>
        <VGroupItems label="Select type of insurance"></VGroupItems>
        <VSelectInput label="Where will you travel"></VSelectInput>
        <div class="label mb-8">Where will you travel</div>
        <v-row class="w-50 ga-2">
          <VDateInput label="Start Date"></VDateInput>
          <VDateInput label="End Date"></VDateInput>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VSelectInput from "./VSelectInput.vue";
import VGroupItems from "./VGroupItems.vue";
import VDateInput from "./VDateInput.vue";
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header {
  font-family: "Noto Sans";
  font-size: 40px;
  font-weight: 300;
  line-height: 54px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #275cb2;
}
</style>
