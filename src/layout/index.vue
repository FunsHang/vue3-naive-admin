<template>
  <div>
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <app-sidebar />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <app-header />
        <app-main />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/Header/index.vue";
import AppSidebar from "./components/Sidebar/index.vue";
import AppMain from "./components/Main/index.vue";
</script>

<style scoped></style>
