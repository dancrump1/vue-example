<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="/" @click.prevent="$router.push('/')">Home</a>
      <a href="/about" @click.prevent="$router.push('/about')">About</a>
      <a href="/contact" @click.prevent="$router.push('/contact')">Contact</a>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
