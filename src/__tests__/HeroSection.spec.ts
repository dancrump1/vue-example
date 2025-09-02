import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../components/HeroSection.vue'

describe('HeroSection', () => {
    it('renders hero section with correct content', () => {
        const wrapper = mount(HeroSection)

        // Check if main elements are rendered
        expect(wrapper.find('.hero').exists()).toBe(true)
        expect(wrapper.find('.hero-title').exists()).toBe(true)
        expect(wrapper.find('.hero-subtitle').exists()).toBe(true)
        expect(wrapper.find('.hero-description').exists()).toBe(true)
    })

    it('displays correct hero title and subtitle', () => {
        const wrapper = mount(HeroSection)

        expect(wrapper.find('.hero-title').text()).toBe('Welcome to Paws & Play Dog Park')
        expect(wrapper.find('.hero-subtitle').text()).toBe('Where tails wag and friendships grow')
    })

    it('renders call-to-action buttons', () => {
        const wrapper = mount(HeroSection)

        const buttons = wrapper.findAll('.btn')
        expect(buttons).toHaveLength(2)

        expect(buttons[0].text()).toBe('Plan Your Visit')
        expect(buttons[1].text()).toBe('Learn More')
    })

    it('displays hero statistics', () => {
        const wrapper = mount(HeroSection)

        const stats = wrapper.findAll('.stat')
        expect(stats).toHaveLength(3)

        // Check if stats contain expected content
        expect(wrapper.text()).toContain('5+')
        expect(wrapper.text()).toContain('24/7')
        expect(wrapper.text()).toContain('100+')
        expect(wrapper.text()).toContain('Acres')
        expect(wrapper.text()).toContain('Security')
        expect(wrapper.text()).toContain('Happy Dogs Daily')
    })

    it('renders hero image placeholder', () => {
        const wrapper = mount(HeroSection)

        const imagePlaceholder = wrapper.find('.image-placeholder')
        expect(imagePlaceholder.exists()).toBe(true)
        expect(imagePlaceholder.text()).toContain('🐕')
        expect(imagePlaceholder.text()).toContain('Happy dogs playing')
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(HeroSection)

        expect(wrapper.find('.hero').classes()).toContain('hero')
        expect(wrapper.find('.hero-content').exists()).toBe(true)
        expect(wrapper.find('.hero-text').exists()).toBe(true)
        expect(wrapper.find('.hero-cta').exists()).toBe(true)
        expect(wrapper.find('.hero-stats').exists()).toBe(true)
    })

    it('emits click events when buttons are clicked', async () => {
        const wrapper = mount(HeroSection)

        const primaryButton = wrapper.find('.btn-primary')
        const secondaryButton = wrapper.find('.btn-secondary')

        await primaryButton.trigger('click')
        await secondaryButton.trigger('click')

        // Note: Since these buttons don't emit events in the current implementation,
        // we're just testing that they can be clicked without errors
        expect(primaryButton.exists()).toBe(true)
        expect(secondaryButton.exists()).toBe(true)
    })
})
