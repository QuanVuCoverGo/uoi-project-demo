<template>
  <div class="d-flex flex-column display-card">
    <v-btn
      @click="handleEdit"
      variant="text"
      class="absolute-left-btn text-none text-blue-darken-3"
      ><v-icon color="blue-darken-3 mr-2">edit</v-icon> Edit</v-btn
    >
    <div class="d-flex flex-column justify-center align-left ga-10 card-detail">
      <div class="d-flex flex-column justify-center align-left ga-2">
        <p class="display-label">
          Insured Person {{ index }} <span v-if="type">({{ type }})</span>
        </p>
        <p class="display-bold-value">
          {{ insuredInfo.fullName }}
        </p>
      </div>
      <v-container class="pa-0">
        <v-row v-for="item in Object.entries(insured)" :key="item">
          <v-col cols="5">
            <p class="display-label">{{ getFieldName(item[0]) }}</p>
          </v-col>
          <v-col cols="5">
            <p
              class="display-value"
              :class="item[0] === 'NRICorPassport' ? 'text-lowercase' : ''"
            >
              {{ item[1] }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { pick } from "lodash";
import moment from "moment";
import { getFieldName } from "@/utils/common";
import { useInformationStore } from "@/stores/InformationStore";

const props = defineProps({
  type: { type: String },
  insuredInfo: { type: Object, required: true },
  index: { type: Number, default: 1 },
});

const emit = defineEmits(["onEdit"]);
const handleEdit = () => {
  emit("onEdit");
};
const insured = computed(() => {
  const mappedInfo = {
    fullName: props.insuredInfo?.fullName,
    dateOfBirth: moment(props.insuredInfo?.dateOfBirth).format("DD MMMM YYYY"),
    NRICorPassport: props.insuredInfo?.NRICorPassport?.toString().replace(
      /./g,
      "x"
    ),
  };
  return props.type === "applicant"
    ? {
        ...mappedInfo,
        email: props.insuredInfo?.email,
        address: getAddress(props.insuredInfo?.address),
      }
    : mappedInfo;
});

const getAddress = (addressObj) => {
  return Object.entries(addressObj)
    ?.reduce((result, item) => {
      let value = item[1];
      if (item[0] === "floorOrUnitNumber") value = `floor ${value}`;
      if (item[0] === "block") value = `block ${value}`;
      if (item[0] === "building") value = `building ${value}`;
      if (value) return (result += value + ", ");
      else return result;
    }, "")
    ?.slice(0, -2);
};
</script>
<style></style>
