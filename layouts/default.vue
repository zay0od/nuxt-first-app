<template>
  <div>
    <h2>Default Layout</h2>
    <header>
      <nav>
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
      </nav>
    </header>

    <!--Output the page conent-->
    <main>
      <!-- <slot /> -->
      <NuxtPage />
    </main>
    <!--Output the page conent-->
  </div>
</template>

<script setup></script>

<style scoped>
header {
  border: 1px solid blue;
  background-color: rgb(243, 240, 240);
}
main {
  background-color: bisque;
  min-height: 40vh;
}
.router-link-exact-active {
  color: rgb(6, 135, 32);
  font-weight: bold;
}
</style>
