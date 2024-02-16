<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

  const firstName = ref('');
  const firstNameRules = ref([
        value => {
          if (/^[a-zA-Z]*$/.test(value) && value?.length > 3) return true

          else return '영문자로 3글자 이상.'
        },
      ]);
  const lastName = ref('') ;
  const lastNameRules = ref([
        value => {
          if (/^[a-zA-Z0-9]*$/.test(value) && (value?.length > 8)) return true

          else return '영문자 혹은 숫자로 8글자 이상.'
        },
  ]);

</script>