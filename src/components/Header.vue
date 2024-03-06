<template>
  <div class="d-flex justify-center container">
    <v-img
      width="151"
      height="51"
      src="../assets/logo.png"
      class="absolute-btn"
    ></v-img>
    <v-stepper class="w-75">
      <v-stepper-header>
        <v-stepper-item
          :title="titleStepOne"
          value="1"
          complete
          editable
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="titleStepTwo"
          value="2"
          complete
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="titleStepThree"
          value="3"
          editable
        ></v-stepper-item>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  props: {
    customCss: {
      type: String,
      default: "",
    },
    titleStepOne: {
      type: String,
      default: "Step One",
    },
    titleStepTwo: {
      type: String,
      default: "Step Two",
    },
    titleStepThree: {
      type: String,
      default: "Step Three",
    },
  },
  computed: {
    cssClass() {
      return this.customCss;
    },
    steps() {
      return [titleStepOne, titleStepTwo, titleStepThree];
    },
  },
};
</script>

<style scoped>
.absolute-btn {
  position: absolute !important; /* Important to override default styles */
  top: 10px; /* Adjust positioning as needed */
  left: 10px; /* Adjust positioning as needed */
}
.container {
  background-color: white;
}

.v-stepper.v-sheet {
  box-shadow: none !important;
}
</style>
