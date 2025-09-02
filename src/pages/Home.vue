<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import CTASection from '../components/CTASection.vue'
import BlogSection from '../components/BlogSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <FeaturesSection />
    <CTASection />
    <BlogSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
