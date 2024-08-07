<template>
  <div>Product Id: {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "product",
});
</script>

<style lang="scss" scoped></style>
