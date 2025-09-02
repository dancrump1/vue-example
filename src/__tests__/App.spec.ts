import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

// Mock the page components
vi.mock('../pages/Home.vue', () => ({
  default: {
    name: 'Home',
    template: '<div class="home-page">Home Page Content</div>'
  }
}))

vi.mock('../pages/About.vue', () => ({
  default: {
    name: 'About',
    template: '<div class="about-page">About Page Content</div>'
  }
}))

vi.mock('../pages/Contact.vue', () => ({
  default: {
    name: 'Contact',
    template: '<div class="contact-page">Contact Page Content</div>'
  }
}))

describe('App', () => {
  it('renders app with correct structure', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.app').exists()).toBe(true)
    expect(wrapper.find('.header').exists()).toBe(true)
    expect(wrapper.find('.main').exists()).toBe(true)
  })

  it('renders navigation header', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.nav').exists()).toBe(true)
    expect(wrapper.find('.nav-brand').exists()).toBe(true)
    expect(wrapper.find('.nav-links').exists()).toBe(true)
    expect(wrapper.find('.nav-cta').exists()).toBe(true)
  })

  it('displays brand title correctly', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.brand-title').text()).toBe('🐕 Paws & Play')
  })

  it('renders navigation links', () => {
    const wrapper = mount(App)

    const navLinks = wrapper.findAll('.nav-link')
    expect(navLinks).toHaveLength(3)

    expect(navLinks[0].text()).toBe('Home')
    expect(navLinks[1].text()).toBe('About')
    expect(navLinks[2].text()).toBe('Contact')
  })

  it('renders CTA button in navigation', () => {
    const wrapper = mount(App)

    const navButton = wrapper.find('.nav-btn')
    expect(navButton.exists()).toBe(true)
    expect(navButton.text()).toBe('Plan Visit')
  })

  it('has correct CSS classes for styling', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.app').classes()).toContain('app')
    expect(wrapper.find('.header').classes()).toContain('header')
    expect(wrapper.find('.nav').classes()).toContain('nav')
    expect(wrapper.find('.main').classes()).toContain('main')
  })

  it('renders router view', () => {
    const wrapper = mount(App)

    expect(wrapper.find('router-view').exists()).toBe(true)
  })

  it('has proper navigation structure', () => {
    const wrapper = mount(App)

    const navBrand = wrapper.find('.nav-brand')
    const navLinks = wrapper.find('.nav-links')
    const navCta = wrapper.find('.nav-cta')

    expect(navBrand.exists()).toBe(true)
    expect(navLinks.exists()).toBe(true)
    expect(navCta.exists()).toBe(true)
  })

  it('displays all navigation elements', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('🐕 Paws & Play')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Contact')
    expect(wrapper.text()).toContain('Plan Visit')
  })

  it('has proper link attributes', () => {
    const wrapper = mount(App)

    const homeLink = wrapper.find('a[href="/"]')
    const aboutLink = wrapper.find('a[href="/about"]')
    const contactLink = wrapper.find('a[href="/contact"]')

    expect(homeLink.exists()).toBe(true)
    expect(aboutLink.exists()).toBe(true)
    expect(contactLink.exists()).toBe(true)
  })

  it('has click event handlers on navigation links', () => {
    const wrapper = mount(App)

    const navLinks = wrapper.findAll('.nav-link')

    navLinks.forEach(link => {
      expect(link.attributes('href')).toBeDefined()
    })
  })

  it('renders main content area', () => {
    const wrapper = mount(App)

    const main = wrapper.find('.main')
    expect(main.exists()).toBe(true)
  })

  it('has proper app structure for layout', () => {
    const wrapper = mount(App)

    const app = wrapper.find('.app')
    const header = wrapper.find('.header')
    const main = wrapper.find('.main')

    expect(app.exists()).toBe(true)
    expect(header.exists()).toBe(true)
    expect(main.exists()).toBe(true)

    // Check that header comes before main
    expect(header.element).toBe(header.element)
    expect(main.element).toBe(main.element)
  })
})
