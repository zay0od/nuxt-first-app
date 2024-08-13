<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product?.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

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

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true, //re-direct to error page even if the error was on the browser
  });

  //[1] Browser Error: it triggers, when the error is reaised from NuxtLink -> by default it does not show error page this is why we use fatal: true
  //[2] Server Error: it triggers, when accessing the URL diretly -> By default it shows the error page
}
</script>

<style lang="scss" scoped></style>
