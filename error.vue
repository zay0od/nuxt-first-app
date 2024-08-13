<template>
  <div class="flex justify-center align-center bg- h-lvh p-10 bg-slate-300">
    <div
      class="card max-w-screen-sm mx-auto flex flex-col justify-center gap-5 p-10"
    >
      <h3 class="text-6xl text-center">{{ error?.statusCode }}</h3>
      <h5 class="text-2xl text-center">{{ error?.statusMessage }}</h5>
      <button @click="handleError">Back to Home..</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => {
  return clearError({
    redirect: "/",
  });
};
</script>

<style scoped>
button {
  background-color: bisque;
  color: black;
  width: fit-content;
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
}
.flex {
  align-items: center;
}
.card {
  height: fit-content;
}
</style>
