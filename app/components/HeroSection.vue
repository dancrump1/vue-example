<script setup lang="ts">
import { ref } from 'vue'

const heroTitle = ref('Welcome to Paws & Play Dog Park')
const heroSubtitle = ref('Where tails wag and friendships grow')
const ctaText = ref('Plan Your Visit')
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">{{ heroTitle }}</h1>
        <p class="hero-subtitle">{{ heroSubtitle }}</p>
        <p class="hero-description">
          A premier destination for dogs and their humans to play, socialize, and create lasting
          memories. Our spacious park features separate areas for small and large dogs, water
          stations, and plenty of shade.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary">{{ ctaText }}</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>🐕</span>
          <p>Happy dogs playing</p>
        </div>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">5+</span>
        <span class="stat-label">Acres</span>
      </div>
      <div class="stat">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Security</span>
      </div>
      <div class="stat">
        <span class="stat-number">100+</span>
        <span class="stat-label">Happy Dogs Daily</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="paw" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23paw)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.image-placeholder span {
  font-size: 8rem;
  display: block;
  margin-bottom: 1rem;
}

.image-placeholder p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ff6b6b;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
