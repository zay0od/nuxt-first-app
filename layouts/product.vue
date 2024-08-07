<template>
  <div>
    <h2>Product Layout</h2>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
      </nav>
    </header>

    <!--Output the page conent-->
    <main>
      <!-- <slot /> -->
      <NuxtPage />
    </main>
    <!--Output the page conent-->

    <footer>
      <ul>
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
</template>

<script setup></script>

<style scoped>
header {
  border: 1px solid blue;
  background-color: rgb(243, 240, 240);
}
main {
  background-color: rgb(137, 198, 211);
  min-height: 40vh;
}
.router-link-exact-active {
  color: rgb(6, 135, 32);
  font-weight: bold;
}
</style>
