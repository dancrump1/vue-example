import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import About from '../pages/About.vue'
import { vi } from 'vitest'

// Mock the FooterSection component
vi.mock('../components/FooterSection.vue', () => ({
    default: {
        name: 'FooterSection',
        template: '<div class="footer-section">Footer Section</div>'
    }
}))

describe('About', () => {
    it('renders about page with correct structure', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-page').exists()).toBe(true)
    })

    it('renders hero section with correct content', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-hero').exists()).toBe(true)
        expect(wrapper.find('.about-title').exists()).toBe(true)
        expect(wrapper.find('.about-subtitle').exists()).toBe(true)
    })

    it('displays correct title and subtitle', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-title').text()).toBe('About Our Park')
        expect(wrapper.find('.about-subtitle').text()).toContain('Creating a safe and joyful environment')
    })

    it('displays statistics correctly', () => {
        const wrapper = mount(About)

        const stats = wrapper.findAll('.stat')
        expect(stats).toHaveLength(3)

        expect(wrapper.text()).toContain('14')
        expect(wrapper.text()).toContain('50,000+')
        expect(wrapper.text()).toContain('100+')
        expect(wrapper.text()).toContain('Years of Service')
        expect(wrapper.text()).toContain('Happy Visitors')
        expect(wrapper.text()).toContain('Events Hosted')
    })

    it('renders story section', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-story').exists()).toBe(true)
        expect(wrapper.find('.story-title').exists()).toBe(true)
        expect(wrapper.find('.story-content').exists()).toBe(true)
    })

    it('displays story title correctly', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.story-title').text()).toBe('Our Story')
    })

    it('displays story content', () => {
        const wrapper = mount(About)

        expect(wrapper.text()).toContain('Paws & Play Dog Park was founded in 2010')
        expect(wrapper.text()).toContain('Our mission is simple: to provide a clean, safe, and welcoming environment')
    })

    it('renders values section', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-values').exists()).toBe(true)
        expect(wrapper.find('.values-title').exists()).toBe(true)
        expect(wrapper.find('.values-grid').exists()).toBe(true)
    })

    it('displays values title correctly', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.values-title').text()).toBe('Our Values')
    })

    it('renders correct number of value cards', () => {
        const wrapper = mount(About)

        const valueCards = wrapper.findAll('.value-card')
        expect(valueCards).toHaveLength(3)
    })

    it('displays value card content correctly', () => {
        const wrapper = mount(About)

        expect(wrapper.text()).toContain('Community')
        expect(wrapper.text()).toContain('Safety')
        expect(wrapper.text()).toContain('Sustainability')

        expect(wrapper.text()).toContain('🤝')
        expect(wrapper.text()).toContain('🛡️')
        expect(wrapper.text()).toContain('🌱')
    })

    it('displays value descriptions', () => {
        const wrapper = mount(About)

        expect(wrapper.text()).toContain('Building strong bonds between dogs and their humans')
        expect(wrapper.text()).toContain('Maintaining the highest standards of safety')
        expect(wrapper.text()).toContain('Preserving our natural environment')
    })

    it('renders footer section', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.footer-section').exists()).toBe(true)
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(About)

        expect(wrapper.find('.about-page').classes()).toContain('about-page')
        expect(wrapper.find('.about-hero').exists()).toBe(true)
        expect(wrapper.find('.about-story').exists()).toBe(true)
        expect(wrapper.find('.about-values').exists()).toBe(true)
    })

    it('renders image placeholder', () => {
        const wrapper = mount(About)

        const imagePlaceholder = wrapper.find('.image-placeholder')
        expect(imagePlaceholder.exists()).toBe(true)
        expect(imagePlaceholder.text()).toContain('🏞️')
        expect(imagePlaceholder.text()).toContain('Our beautiful park')
    })

    it('displays all required content sections', () => {
        const wrapper = mount(About)

        // Check for all major content sections
        expect(wrapper.text()).toContain('About Our Park')
        expect(wrapper.text()).toContain('Our Story')
        expect(wrapper.text()).toContain('Our Values')
        expect(wrapper.text()).toContain('Community')
        expect(wrapper.text()).toContain('Safety')
        expect(wrapper.text()).toContain('Sustainability')
    })
})
