<template>
  <div class="grid grid-cols-4 gap-4 text-center">
    <ProductsList v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script setup>
//Specificy which layout to be used
definePageMeta({
  layout: "product",
});

//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products/");

//Meta Details
useHead({
  title: "Nuxt | Products List",
  meta: [
    {
      name: "description",
      content: "List of products page",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
