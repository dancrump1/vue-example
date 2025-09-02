<script setup lang="ts">
import { ref } from 'vue'

interface Feature {
  id: number
  icon: string
  title: string
  description: string
  color: string
}

const features = ref<Feature[]>([
  {
    id: 1,
    icon: '🏞️',
    title: 'Spacious Areas',
    description:
      'Separate play areas for small and large dogs with plenty of room to run and play safely.',
    color: '#4ecdc4',
  },
  {
    id: 2,
    icon: '💧',
    title: 'Water Stations',
    description:
      'Multiple water stations throughout the park to keep your furry friends hydrated and happy.',
    color: '#45b7aa',
  },
  {
    id: 3,
    icon: '🌳',
    title: 'Shaded Seating',
    description:
      'Comfortable seating areas with plenty of shade for owners to relax while watching their dogs play.',
    color: '#667eea',
  },
  {
    id: 4,
    icon: '🔒',
    title: '24/7 Security',
    description:
      'Round-the-clock security monitoring to ensure a safe environment for all visitors.',
    color: '#764ba2',
  },
  {
    id: 5,
    icon: '🧹',
    title: 'Clean Facilities',
    description:
      'Regular maintenance and cleaning to keep the park clean and sanitary for everyone.',
    color: '#f093fb',
  },
  {
    id: 6,
    icon: '🚗',
    title: 'Free Parking',
    description:
      'Convenient free parking available for all visitors with easy access to the park entrance.',
    color: '#f5576c',
  },
])
</script>

<template>
  <section class="features-section">
    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">Park Features</h2>
        <p class="features-subtitle">Everything you need for a perfect day at the dog park</p>
      </div>

      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="feature-card"
          :style="{ '--accent-color': feature.color }"
        >
          <div class="feature-icon">
            <span>{{ feature.icon }}</span>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  background: white;
  padding: 4rem 2rem;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.features-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .features-title {
    font-size: 2rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
}
</style>
