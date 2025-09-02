<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Paws & Play Dog Park</h3>
          <p class="footer-description">
            A premier destination for dogs and their humans to play, socialize, and create lasting
            memories.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">📘 Facebook</a>
            <a href="#" class="social-link">📷 Instagram</a>
            <a href="#" class="social-link">🐦 Twitter</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Park Rules</a></li>
            <li><a href="#" class="footer-link">Hours & Location</a></li>
            <li><a href="#" class="footer-link">Events Calendar</a></li>
            <li><a href="#" class="footer-link">Photo Gallery</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Contact Info</h4>
          <div class="contact-info">
            <p>📍 123 Bark Street, Dog City, DC 12345</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@pawsandplay.com</p>
            <p>🕒 Daily: 6:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Newsletter</h4>
          <p>Stay updated with park news and events!</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input" />
            <button class="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} Paws & Play Dog Park. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
            <a href="#" class="footer-bottom-link">Terms of Service</a>
            <a href="#" class="footer-bottom-link">Accessibility</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #4ecdc4;
}

.footer-description {
  line-height: 1.6;
  opacity: 0.8;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.social-link:hover {
  background: #4ecdc4;
  transform: translateY(-2px);
}

.footer-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #4ecdc4;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  color: #4ecdc4;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-info p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.newsletter-input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
}

.newsletter-btn {
  padding: 0.75rem 1.5rem;
  background: #4ecdc4;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background: #45b7aa;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-content p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-bottom-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-bottom-link:hover {
  opacity: 1;
  color: #4ecdc4;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input {
    min-width: auto;
  }
}
</style>
