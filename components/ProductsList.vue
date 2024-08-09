<template>
  <NuxtLink :to="`products/${product.id}`" class="text-md">
    <div class="card h-100 flex flex-col gap-3">
      <img :src="product.image" :alt="product.title" class="thumb" />
      <p class="p-2 truncate">{{ product.title }}</p>
    </div>
  </NuxtLink>
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
  max-height: 120px;
  margin: 0 auto;
}

.card a {
  padding: 1rem;
}
</style>
