<script setup lang="ts">
import { ref } from 'vue'
import FooterSection from '../components/FooterSection.vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
  alert("Thank you for your message! We'll get back to you soon.")
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="contact-container">
        <h1 class="contact-title">Contact Us</h1>
        <p class="contact-subtitle">Get in touch with our team. We'd love to hear from you!</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="info-title">Get In Touch</h2>
          <p class="info-description">
            Have questions about our dog park? Want to plan a special event? We're here to help!
            Reach out to us through any of the methods below.
          </p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-content">
                <h3>Visit Us</h3>
                <p>123 Bark Street<br />Dog City, DC 12345</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">📞</div>
              <div class="method-content">
                <h3>Call Us</h3>
                <p>(555) 123-4567<br />Daily 6:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">✉️</div>
              <div class="method-content">
                <h3>Email Us</h3>
                <p>info@pawsandplay.com<br />We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2 class="form-title">Send Us a Message</h2>
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                class="form-textarea"
                placeholder="Tell us more..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-container">
        <h2 class="map-title">Find Us</h2>
        <div class="map-placeholder">
          <span>🗺️</span>
          <p>Interactive Map Coming Soon</p>
          <p class="map-address">123 Bark Street, Dog City, DC 12345</p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.contact-content {
  background: white;
  padding: 4rem 2rem;
}

.contact-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.info-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-2px);
}

.method-icon {
  font-size: 2rem;
  background: #667eea;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.method-content p {
  color: #6c757d;
  margin: 0;
  line-height: 1.5;
}

.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.map-section {
  background: #f8f9fa;
  padding: 4rem 2rem;
}

.map-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.map-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.map-placeholder {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-placeholder span {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.map-placeholder p {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0.5rem 0;
}

.map-address {
  font-weight: 600;
  color: #2c3e50 !important;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
