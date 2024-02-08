<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer class="bg-deep-purple" theme="dark" permanent>
      <v-list color="transparent">
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>

            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Admin"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in admins" :key="i" :title="title" :prepend-icon="icon"
                :value="title"></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Actions"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                :prepend-icon="icon"></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
    </v-main>
  </v-layout>
</template>

<script>
import { ref } from 'vue';


export default {


  setup() {
    const open = ref('Users');
    const admins = ref([['Management', 'mdi-account-multiple-outline'],
    ['Settings', 'mdi-cog-outline']]);
    const cruds = ref([
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ])

    return { open, admins, cruds }
  }
}
</script>
