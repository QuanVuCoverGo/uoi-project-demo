<template>
  <v-card width="800" class="justify-center pa-10">
    <h1>INSURE TRAVEL</h1>
    <form @submit.prevent="submit">
      <v-container fluid="">
        <v-radio-group>
          <v-row>
            <v-radio label="Single trip" value="radio-1"></v-radio>
            <v-radio label="Annual Multi trip" value="radio-2"></v-radio>
          </v-row>
        </v-radio-group>

        <p class="mb-10">Where will you travel</p>

        <v-row class="ga-10 mb-4">
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="Start date"
          ></v-text-field>
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="End date"
          ></v-text-field>
        </v-row>

        <v-radio-group>
          <v-row>
            <v-radio label="Individual" value="radio-1"></v-radio>
            <v-radio label="Family" value="radio-2"></v-radio>
          </v-row>
        </v-radio-group>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Email"
        ></v-text-field>

        <v-btn class="me-4" type="submit"> Next </v-btn>
      </v-container>
    </form>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
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
</style>
