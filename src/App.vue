<template>
  <div>测试{{ x }}-{{ y }}}}</div>
</template>

<script setup lang="ts">
import UseMousePosition from "@/hooks/useMousePosition";
const { x, y } = UseMousePosition();
</script>

<style scoped></style>
