<template>
  <div class="flex flex-col gap-5">
    <div>
      <NuxtLink to="/products" class="underline text-md text-black"
        >< Back</NuxtLink
      >
    </div>
    <div class="card rounded-lg p-10 grid grid-cols-2 gap-5">
      <div class="m-auto">
        <img :src="product.image" :alt="product.title" class="thumb" />
      </div>
      <div class="flex flex-col gap-10">
        <h1 class="text-3xl font-semibold">{{ product.title }}</h1>
        <p class="text-md font-normal">
          <span class="font-semibold">Description:</span>
          {{ product.description }}
        </p>
        <p class="text-md font-normal">
          <span class="font-semibold">Category:</span>
          {{ product.category }}
        </p>

        <div class="flex justify-start gap-10">
          <h6>
            <span class="font-semibold">Price:</span>
            {{ product.price }} AED
          </h6>
          <h6>
            <span class="font-semibold">Inventory:</span>
            {{ product.rating.count }} AED
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
img.thumb {
  max-width: 70%;
  max-height: 500px;
  margin: 0 auto;
}
</style>
