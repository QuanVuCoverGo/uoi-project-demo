<template>
  <div class="groups mb-2">
    <v-item-group
      class="d-flex justify-space-between flex-row"
      v-model="typeOfInsurance"
    >
      <v-item v-slot="{ isSelected, toggle }">
        <v-card
          :class="[
            'd-flex align-center pa-4 card-no-shadow w-100 justify-center mr-4',
            isSelected ? 'blue-border' : '',
          ]"
          height="191"
          :color="isSelected ? 'white' : 'grey-lighten-3'"
          dark
          @click="!isSelected && toggle?.()"
        >
          <v-icon
            v-if="isSelected"
            class="absolute-button"
            color="info"
            size="small"
          >
            check_circle
          </v-icon>
          <div class="absolute-left">
            <v-tooltip
              max-width="300"
              text="For you and/or your travel companion(s) travelling together for the entire trip."
            >
              <template v-slot:activator="{ props }">
                <v-icon color="grey-lighten-1" v-bind="props"
                  >error_outline</v-icon
                >
              </template>
            </v-tooltip>
          </div>
          <div class="d-flex flex-column align-center justify-center w-100">
            <v-icon :color="isSelected ? 'info' : 'none'" size="64"
              >emoji_people</v-icon
            >
            <div class="tripText">Individual</div>
          </div>
        </v-card>
      </v-item>
      <v-item v-slot="{ isSelected, toggle }">
        <v-card
          :class="[
            'd-flex align-center pa-4 card-no-shadow w-100 justify-center ml-4',
            isSelected ? 'blue-border' : '',
          ]"
          height="191"
          :color="isSelected ? 'white' : 'grey-lighten-3'"
          dark
          @click="!isSelected && toggle?.()"
        >
          <v-icon
            v-if="isSelected"
            class="absolute-button"
            color="info"
            size="small"
          >
            check_circle
          </v-icon>
          <div class="absolute-left">
            <v-tooltip
              max-width="300"
              text="For you and/or your legal spouse and child(ren) travelling together for the entire trip."
            >
              <template v-slot:activator="{ props }">
                <v-icon color="grey-lighten-1" v-bind="props"
                  >error_outline</v-icon
                >
              </template>
            </v-tooltip>
          </div>
          <div
            class="d-flex flex-column align-center justify-center ga-2 w-100"
          >
            <v-icon :color="isSelected ? 'info' : 'none'" size="64"
              >family_restroom</v-icon
            >
            <div class="tripText">Family</div>
          </div>
        </v-card>
      </v-item>
    </v-item-group>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useVModel } from "@/composables/useVModel";

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: Number },
  showLabel: { type: Boolean, default: false },
});

const emits = defineEmits(["update:modelValue"]);

const typeOfInsurance = useVModel(props, "modelValue", emits);
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

.absolute-left {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
