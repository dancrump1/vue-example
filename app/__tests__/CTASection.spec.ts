import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CTASection from '../components/CTASection.vue'

describe('CTASection', () => {
    it('renders CTA section with correct content', () => {
        const wrapper = mount(CTASection)

        expect(wrapper.find('.cta-section').exists()).toBe(true)
        expect(wrapper.find('.cta-title').exists()).toBe(true)
        expect(wrapper.find('.cta-description').exists()).toBe(true)
    })

    it('displays correct title and description', () => {
        const wrapper = mount(CTASection)

        expect(wrapper.find('.cta-title').text()).toBe('Ready to Visit?')
        expect(wrapper.find('.cta-description').text()).toBe('Join our community of happy dogs and their owners')
    })

    it('renders feature list with icons', () => {
        const wrapper = mount(CTASection)

        const features = wrapper.findAll('.feature')
        expect(features).toHaveLength(3)

        // Check feature content
        expect(wrapper.text()).toContain('No Registration Required')
        expect(wrapper.text()).toContain('Free Entry')
        expect(wrapper.text()).toContain('Open Daily 6AM-10PM')
    })

    it('displays feature icons correctly', () => {
        const wrapper = mount(CTASection)

        const featureIcons = wrapper.findAll('.feature-icon')
        expect(featureIcons).toHaveLength(3)

        expect(featureIcons[0].text()).toBe('🎯')
        expect(featureIcons[1].text()).toBe('🆓')
        expect(featureIcons[2].text()).toBe('🕒')
    })

    it('renders CTA buttons', () => {
        const wrapper = mount(CTASection)

        const buttons = wrapper.findAll('.cta-btn')
        expect(buttons).toHaveLength(2)

        expect(buttons[0].text()).toBe('Book Your Visit')
        expect(buttons[1].text()).toBe('View Park Rules')
    })

    it('renders schedule card with correct content', () => {
        const wrapper = mount(CTASection)

        const scheduleCard = wrapper.find('.cta-card')
        expect(scheduleCard.exists()).toBe(true)

        expect(wrapper.text()).toContain("Today's Schedule")
        expect(wrapper.text()).toContain('6:00 AM')
        expect(wrapper.text()).toContain('10:00 PM')
        expect(wrapper.text()).toContain('Park Opens')
        expect(wrapper.text()).toContain('Park Closes')
    })

    it('displays schedule items correctly', () => {
        const wrapper = mount(CTASection)

        const scheduleItems = wrapper.findAll('.schedule-item')
        expect(scheduleItems).toHaveLength(4)

        // Check if all schedule times are present
        const times = ['6:00 AM', '9:00 AM', '5:00 PM', '10:00 PM']
        times.forEach(time => {
            expect(wrapper.text()).toContain(time)
        })
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(CTASection)

        expect(wrapper.find('.cta-section').classes()).toContain('cta-section')
        expect(wrapper.find('.cta-container').exists()).toBe(true)
        expect(wrapper.find('.cta-content').exists()).toBe(true)
        expect(wrapper.find('.cta-visual').exists()).toBe(true)
    })

    it('handles button clicks without errors', async () => {
        const wrapper = mount(CTASection)

        const primaryButton = wrapper.find('.cta-btn-primary')
        const secondaryButton = wrapper.find('.cta-btn-secondary')

        await primaryButton.trigger('click')
        await secondaryButton.trigger('click')

        expect(primaryButton.exists()).toBe(true)
        expect(secondaryButton.exists()).toBe(true)
    })
})
