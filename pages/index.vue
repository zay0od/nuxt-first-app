<template>
  <div class="home-page">
    <!-- Header Section -->
    <div class="home-header">
      <h1 class="home-title">Welcome to My Nuxt 3 Learning App</h1>
      <p class="home-subtitle">A demo app for mastering Nuxt 3</p>
    </div>

    <!-- Main Content Section -->
    <div class="home-main">
      <!-- Introduction Section -->
      <section class="intro-section">
        <h2>About This App</h2>
        <p>
          This application is designed to help you get hands-on experience with
          Nuxt 3. Explore the features, learn best practices, and build your
          next project with confidence.
        </p>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Key Features</h2>
        <ul class="features-list">
          <li>Dynamic Routing</li>
          <li>Server-Side Rendering (SSR)</li>
          <li>API Integration</li>
          <li>Environment Variables</li>
          <li>Server Routes</li>
        </ul>
      </section>
    </div>

    <!-- Footer Section -->
    <div class="home-footer">
      <p>Created by Zayed Al Raeesi. © 2024 My Nuxt 3 Learning App.</p>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  color: #333;
}

.home-header {
  background-color: #1ba988;
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
}

.home-title {
  font-size: 2.5rem;
  margin: 0;
}

.home-subtitle {
  font-size: 1.25rem;
  margin: 0;
}

.home-main {
  flex: 1;
  padding: 2rem;
}

.intro-section,
.features-section,
.getting-started-section {
  margin-bottom: 2rem;
}

.features-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.home-footer {
  background-color: #bff6dd;
  padding: 1rem;
  text-align: center;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  color: #007bff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
