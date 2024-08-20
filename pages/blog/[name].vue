<script setup lang="ts">
  const route = useRoute();
</script>

<template>
  <div>blog post: {{ route.params.name }}</div>
</template>

<style scoped></style>
