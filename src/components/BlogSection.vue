<script setup lang="ts">
import { ref } from 'vue'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
}

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: '10 Essential Tips for First-Time Dog Park Visitors',
    excerpt:
      'Planning your first visit to a dog park? Here are the essential tips to ensure a safe and enjoyable experience for both you and your furry friend.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Tips & Advice',
    readTime: '5 min read',
    image: '🐕',
  },
  {
    id: 2,
    title: 'The Benefits of Regular Dog Park Visits',
    excerpt:
      "Discover how regular visits to the dog park can improve your dog's physical health, mental well-being, and social skills.",
    author: 'Dr. Michael Chen',
    date: 'March 12, 2024',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: '🏃‍♂️',
  },
  {
    id: 3,
    title: 'Community Spotlight: Meet Our Regular Visitors',
    excerpt:
      'Get to know some of our most beloved regular visitors and their heartwarming stories of friendship and fun.',
    author: 'Emma Rodriguez',
    date: 'March 10, 2024',
    category: 'Community',
    readTime: '4 min read',
    image: '👥',
  },
  {
    id: 4,
    title: 'Seasonal Safety: Spring Dog Park Guidelines',
    excerpt:
      'As spring arrives, here are important safety guidelines to keep in mind when visiting the dog park during this beautiful season.',
    author: 'Lisa Thompson',
    date: 'March 8, 2024',
    category: 'Safety',
    readTime: '6 min read',
    image: '🌸',
  },
])
</script>

<template>
  <section class="blog-section">
    <div class="blog-container">
      <div class="blog-header">
        <h2 class="blog-title">Latest from Our Blog</h2>
        <p class="blog-subtitle">Tips, stories, and insights from our dog park community</p>
      </div>

      <div class="blog-grid">
        <article v-for="post in blogPosts" :key="post.id" class="blog-card">
          <div class="card-image">
            <span class="image-placeholder">{{ post.image }}</span>
          </div>
          <div class="card-content">
            <div class="card-meta">
              <span class="category">{{ post.category }}</span>
              <span class="read-time">{{ post.readTime }}</span>
            </div>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-excerpt">{{ post.excerpt }}</p>
            <div class="card-footer">
              <div class="author-info">
                <span class="author">{{ post.author }}</span>
                <span class="date">{{ post.date }}</span>
              </div>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>
        </article>
      </div>

      <div class="blog-cta">
        <button class="view-all-btn">View All Articles</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  background: #f8f9fa;
  padding: 4rem 2rem;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.blog-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-placeholder {
  font-size: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.card-content {
  padding: 1.5rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.read-time {
  color: #6c757d;
  font-size: 0.9rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.card-excerpt {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
}

.date {
  color: #6c757d;
  font-size: 0.8rem;
}

.read-more-btn {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.blog-cta {
  text-align: center;
}

.view-all-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.view-all-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-title {
    font-size: 2rem;
  }

  .card-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
