<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>
    <v-navigation-drawer>
      <v-list-item v-for='(item, i) in items' :key='i' :to='items[i].to'>{{ items[i].title }}</v-list-item>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: 'Home',
    value: 1,
    to: '/'

  },
  {
    title: 'Create',
    value: 2,
    to: '/create'
  },
  {
    title: 'Item #3',
    value: 3,
  },
])


</script>
