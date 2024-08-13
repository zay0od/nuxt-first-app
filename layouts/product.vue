<template>
  <div>
    <header
      class="container mx-auto py-5 flex align-middle justify-between border-b"
    >
      <h2 class="text-xl font-extrabold">Nuxt App</h2>
      <nav>
        <ul class="flex justify-end gap-10">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/products"
              :class="{ 'active-link': $route.path.startsWith('/products') }"
              >Products</NuxtLink
            >
          </li>

          <li>
            <NuxtLink to="/about">About Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!--Output the page conent-->
    <main class="h-100-vh container mx-auto py-10">
      <NuxtPage />
    </main>
    <!--Output the page conent-->

    <div class="bg-[#d8dbca]">
      <footer class="container mx-auto">
        <ul class="flex justify-between py-10">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about">About Us</NuxtLink>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
ul li {
  font-size: 0.9rem;
  font-weight: 400;
}

/* Define the active-link class for custom styling */
.active-link {
  color: rgb(6, 135, 32);
  font-weight: bold;
}

/* Keep the default active classes as well */
.router-link-exact-active,
.router-link-active {
  color: rgb(6, 135, 32);
  font-weight: bold;
}
</style>
