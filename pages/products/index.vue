<template>
  <div class="grid grid-cols-4 border gap-4 text-center">
    <div v-for="p in products" :key="p.id">
      <NuxtLink :to="`products/${p.id}`"> {{ p.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
//Specificy which layout to be used
definePageMeta({
  layout: "product",
});

//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products/");
</script>

<style lang="scss" scoped></style>
