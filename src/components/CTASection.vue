<script setup lang="ts">
import { ref } from 'vue'

const ctaTitle = ref('Ready to Visit?')
const ctaDescription = ref('Join our community of happy dogs and their owners')
const ctaButtonText = ref('Book Your Visit')
</script>

<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">{{ ctaTitle }}</h2>
        <p class="cta-description">{{ ctaDescription }}</p>
        <div class="cta-features">
          <div class="feature">
            <span class="feature-icon">🎯</span>
            <span class="feature-text">No Registration Required</span>
          </div>
          <div class="feature">
            <span class="feature-icon">🆓</span>
            <span class="feature-text">Free Entry</span>
          </div>
          <div class="feature">
            <span class="feature-icon">🕒</span>
            <span class="feature-text">Open Daily 6AM-10PM</span>
          </div>
        </div>
        <div class="cta-actions">
          <button class="cta-btn cta-btn-primary">{{ ctaButtonText }}</button>
          <button class="cta-btn cta-btn-secondary">View Park Rules</button>
        </div>
      </div>
      <div class="cta-visual">
        <div class="cta-card">
          <div class="card-header">
            <span class="card-icon">📅</span>
            <h3>Today's Schedule</h3>
          </div>
          <div class="card-content">
            <div class="schedule-item">
              <span class="time">6:00 AM</span>
              <span class="event">Park Opens</span>
            </div>
            <div class="schedule-item">
              <span class="time">9:00 AM</span>
              <span class="event">Morning Social Hour</span>
            </div>
            <div class="schedule-item">
              <span class="time">5:00 PM</span>
              <span class="event">Evening Playtime</span>
            </div>
            <div class="schedule-item">
              <span class="time">10:00 PM</span>
              <span class="event">Park Closes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 4rem 2rem;
  color: white;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
}

.cta-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

.feature-icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-btn {
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

.cta-btn-primary {
  background: #4ecdc4;
  color: white;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);
}

.cta-btn-primary:hover {
  background: #45b7aa;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(78, 205, 196, 0.6);
}

.cta-btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn-secondary:hover {
  background: white;
  color: #f5576c;
  transform: translateY(-2px);
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 300px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card-icon {
  font-size: 2rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.time {
  font-weight: 600;
  color: #4ecdc4;
}

.event {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .cta-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-actions {
    justify-content: center;
  }

  .feature {
    justify-content: center;
  }
}
</style>
