<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product",
});

const { id } = useRoute().params;
const url = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(url);
</script>

<style lang="scss" scoped></style>
