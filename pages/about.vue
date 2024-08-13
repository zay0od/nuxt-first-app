<template>
  <section class="about-us-page">
    <!-- About Us Header -->
    <header class="about-us-header">
      <h1>About Us</h1>
    </header>

    <!-- User Message Section -->
    <section class="user-message-section">
      <h2>User Message</h2>
      <p v-if="user?.message">Message: {{ user.message }}</p>
      <p v-else>No message available.</p>
    </section>

    <!-- Currency Information Section -->
    <section class="currency-section">
      <h2>Currency Information</h2>
      <p>Currency: {{ currency || "Loading..." }}</p>
    </section>
  </section>
</template>

<script setup>
const { data: user } = await useFetch("/api/ninja?name=Zayed", {
  method: "post",
  body: {
    age: 25,
    favColor: "black",
  },
});

const { data: currency } = await useFetch("/api/currency/AED");
</script>

<style lang="scss" scoped>
.about-us-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
}

.about-us-header {
  margin-bottom: 2rem;
}

.user-message-section,
.currency-section {
  margin-bottom: 1.5rem;
}

h1,
h2 {
  color: #1ba988;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

p:empty::before {
  content: "Loading...";
  color: #888;
}
</style>
