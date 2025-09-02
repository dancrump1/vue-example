import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeaturesSection from '../components/FeaturesSection.vue'

describe('FeaturesSection', () => {
    it('renders features section with correct content', () => {
        const wrapper = mount(FeaturesSection)

        expect(wrapper.find('.features-section').exists()).toBe(true)
        expect(wrapper.find('.features-title').exists()).toBe(true)
        expect(wrapper.find('.features-subtitle').exists()).toBe(true)
    })

    it('displays correct section title and subtitle', () => {
        const wrapper = mount(FeaturesSection)

        expect(wrapper.find('.features-title').text()).toBe('Park Features')
        expect(wrapper.find('.features-subtitle').text()).toBe('Everything you need for a perfect day at the dog park')
    })

    it('renders correct number of feature cards', () => {
        const wrapper = mount(FeaturesSection)

        const featureCards = wrapper.findAll('.feature-card')
        expect(featureCards).toHaveLength(6)
    })

    it('displays feature titles correctly', () => {
        const wrapper = mount(FeaturesSection)

        const expectedTitles = [
            'Spacious Areas',
            'Water Stations',
            'Shaded Seating',
            '24/7 Security',
            'Clean Facilities',
            'Free Parking'
        ]

        expectedTitles.forEach(title => {
            expect(wrapper.text()).toContain(title)
        })
    })

    it('displays feature icons correctly', () => {
        const wrapper = mount(FeaturesSection)

        const expectedIcons = ['🏞️', '💧', '🌳', '🔒', '🧹', '🚗']

        expectedIcons.forEach(icon => {
            expect(wrapper.text()).toContain(icon)
        })
    })

    it('displays feature descriptions', () => {
        const wrapper = mount(FeaturesSection)

        // Check partial content of descriptions
        expect(wrapper.text()).toContain('Separate play areas for small and large dogs')
        expect(wrapper.text()).toContain('Multiple water stations throughout the park')
        expect(wrapper.text()).toContain('Comfortable seating areas with plenty of shade')
        expect(wrapper.text()).toContain('Round-the-clock security monitoring')
        expect(wrapper.text()).toContain('Regular maintenance and cleaning')
        expect(wrapper.text()).toContain('Convenient free parking available')
    })

    it('applies correct CSS custom properties for colors', () => {
        const wrapper = mount(FeaturesSection)

        const featureCards = wrapper.findAll('.feature-card')
        expect(featureCards).toHaveLength(6)

        // Check that each card has the style attribute for custom properties
        featureCards.forEach(card => {
            expect(card.attributes('style')).toContain('--accent-color')
        })
    })

    it('renders feature icons with correct styling', () => {
        const wrapper = mount(FeaturesSection)

        const featureIcons = wrapper.findAll('.feature-icon')
        expect(featureIcons).toHaveLength(6)

        featureIcons.forEach(icon => {
            expect(icon.classes()).toContain('feature-icon')
        })
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(FeaturesSection)

        expect(wrapper.find('.features-section').classes()).toContain('features-section')
        expect(wrapper.find('.features-container').exists()).toBe(true)
        expect(wrapper.find('.features-header').exists()).toBe(true)
        expect(wrapper.find('.features-grid').exists()).toBe(true)
    })

    it('renders feature content correctly', () => {
        const wrapper = mount(FeaturesSection)

        const featureContents = wrapper.findAll('.feature-content')
        expect(featureContents).toHaveLength(6)

        featureContents.forEach(content => {
            expect(content.find('.feature-title').exists()).toBe(true)
            expect(content.find('.feature-description').exists()).toBe(true)
        })
    })

    it('displays all feature descriptions completely', () => {
        const wrapper = mount(FeaturesSection)

        const expectedDescriptions = [
            'Separate play areas for small and large dogs with plenty of room to run and play safely.',
            'Multiple water stations throughout the park to keep your furry friends hydrated and happy.',
            'Comfortable seating areas with plenty of shade for owners to relax while watching their dogs play.',
            'Round-the-clock security monitoring to ensure a safe environment for all visitors.',
            'Regular maintenance and cleaning to keep the park clean and sanitary for everyone.',
            'Convenient free parking available for all visitors with easy access to the park entrance.'
        ]

        expectedDescriptions.forEach(description => {
            expect(wrapper.text()).toContain(description)
        })
    })

    it('has proper structure for hover effects', () => {
        const wrapper = mount(FeaturesSection)

        const featureCards = wrapper.findAll('.feature-card')

        featureCards.forEach(card => {
            // Check that cards have the necessary structure for hover effects
            expect(card.find('.feature-icon').exists()).toBe(true)
            expect(card.find('.feature-content').exists()).toBe(true)
            expect(card.find('.feature-title').exists()).toBe(true)
            expect(card.find('.feature-description').exists()).toBe(true)
        })
    })
})
