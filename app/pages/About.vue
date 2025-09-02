<script setup lang="ts">
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-container">
        <div class="about-content">
          <h1 class="about-title">About Our Park</h1>
          <p class="about-subtitle">
            Creating a safe and joyful environment for dogs and their humans since 2010
          </p>
          <div class="about-stats">
            <div class="stat">
              <span class="stat-number">14</span>
              <span class="stat-label">Years of Service</span>
            </div>
            <div class="stat">
              <span class="stat-number">50,000+</span>
              <span class="stat-label">Happy Visitors</span>
            </div>
            <div class="stat">
              <span class="stat-number">100+</span>
              <span class="stat-label">Events Hosted</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <span>🏞️</span>
            <p>Our beautiful park</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-story">
      <div class="story-container">
        <h2 class="story-title">Our Story</h2>
        <div class="story-content">
          <p>
            Paws & Play Dog Park was founded in 2010 by a group of passionate dog lovers who
            recognized the need for a safe, well-maintained space where dogs could socialize and
            exercise freely. What started as a small community initiative has grown into one of the
            most beloved dog parks in the region.
          </p>
          <p>
            Our mission is simple: to provide a clean, safe, and welcoming environment where dogs
            can play, socialize, and exercise while their humans build lasting friendships with
            fellow dog lovers. We believe that happy dogs make happy communities.
          </p>
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="values-container">
        <h2 class="values-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Community</h3>
            <p>Building strong bonds between dogs and their humans through shared experiences.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🛡️</div>
            <h3>Safety</h3>
            <p>Maintaining the highest standards of safety for all our four-legged visitors.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>Preserving our natural environment for future generations of dogs and humans.</p>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
}

.about-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
}

.about-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.about-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #ff6b6b;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-image {
  display: flex;
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
  font-size: 6rem;
  display: block;
  margin-bottom: 1rem;
}

.image-placeholder p {
  font-size: 1.1rem;
  opacity: 0.8;
}

.about-story {
  background: white;
  padding: 4rem 2rem;
}

.story-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.story-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.story-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6c757d;
  margin: 0;
}

.about-values {
  background: #f8f9fa;
  padding: 4rem 2rem;
}

.values-container {
  max-width: 1200px;
  margin: 0 auto;
}

.values-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.value-card p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-stats {
    justify-content: center;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
