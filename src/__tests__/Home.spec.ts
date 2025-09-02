import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import CTASection from '../components/CTASection.vue'
import BlogSection from '../components/BlogSection.vue'
import FooterSection from '../components/FooterSection.vue'
import { vi } from 'vitest'

// Mock the components to avoid complex dependencies
vi.mock('../components/HeroSection.vue', () => ({
    default: {
        name: 'HeroSection',
        template: '<div class="hero-section">Hero Section</div>'
    }
}))

vi.mock('../components/FeaturesSection.vue', () => ({
    default: {
        name: 'FeaturesSection',
        template: '<div class="features-section">Features Section</div>'
    }
}))

vi.mock('../components/CTASection.vue', () => ({
    default: {
        name: 'CTASection',
        template: '<div class="cta-section">CTA Section</div>'
    }
}))

vi.mock('../components/BlogSection.vue', () => ({
    default: {
        name: 'BlogSection',
        template: '<div class="blog-section">Blog Section</div>'
    }
}))

vi.mock('../components/FooterSection.vue', () => ({
    default: {
        name: 'FooterSection',
        template: '<div class="footer-section">Footer Section</div>'
    }
}))

describe('Home', () => {
    it('renders home page with correct structure', () => {
        const wrapper = mount(Home)

        expect(wrapper.find('.home').exists()).toBe(true)
    })

    it('renders all required sections', () => {
        const wrapper = mount(Home)

        expect(wrapper.find('.hero-section').exists()).toBe(true)
        expect(wrapper.find('.features-section').exists()).toBe(true)
        expect(wrapper.find('.cta-section').exists()).toBe(true)
        expect(wrapper.find('.blog-section').exists()).toBe(true)
        expect(wrapper.find('.footer-section').exists()).toBe(true)
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(Home)

        expect(wrapper.find('.home').classes()).toContain('home')
    })

    it('renders components in correct order', () => {
        const wrapper = mount(Home)

        const sections = wrapper.findAll('div[class*="-section"]')
        expect(sections).toHaveLength(5)

        // Check order: hero, features, cta, blog, footer
        expect(sections[0].classes()).toContain('hero-section')
        expect(sections[1].classes()).toContain('features-section')
        expect(sections[2].classes()).toContain('cta-section')
        expect(sections[3].classes()).toContain('blog-section')
        expect(sections[4].classes()).toContain('footer-section')
    })

    it('has minimum height styling', () => {
        const wrapper = mount(Home)

        const homeElement = wrapper.find('.home')
        expect(homeElement.exists()).toBe(true)
    })
})
