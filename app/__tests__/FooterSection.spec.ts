import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterSection from '../components/FooterSection.vue'

describe('FooterSection', () => {
    it('renders footer section with correct content', () => {
        const wrapper = mount(FooterSection)

        expect(wrapper.find('.footer').exists()).toBe(true)
        expect(wrapper.find('.footer-container').exists()).toBe(true)
        expect(wrapper.find('.footer-content').exists()).toBe(true)
    })

    it('displays footer title correctly', () => {
        const wrapper = mount(FooterSection)

        expect(wrapper.find('.footer-title').text()).toBe('Paws & Play Dog Park')
    })

    it('displays footer description', () => {
        const wrapper = mount(FooterSection)

        expect(wrapper.text()).toContain('A premier destination for dogs and their humans to play, socialize, and create lasting memories.')
    })

    it('renders social media links', () => {
        const wrapper = mount(FooterSection)

        const socialLinks = wrapper.findAll('.social-link')
        expect(socialLinks).toHaveLength(3)

        expect(socialLinks[0].text()).toBe('📘 Facebook')
        expect(socialLinks[1].text()).toBe('📷 Instagram')
        expect(socialLinks[2].text()).toBe('🐦 Twitter')
    })

    it('renders quick links section', () => {
        const wrapper = mount(FooterSection)

        expect(wrapper.find('.footer-subtitle').text()).toBe('Quick Links')

        const quickLinks = wrapper.findAll('.footer-link')
        expect(quickLinks).toHaveLength(4)

        const expectedLinks = ['Park Rules', 'Hours & Location', 'Events Calendar', 'Photo Gallery']
        expectedLinks.forEach(link => {
            expect(wrapper.text()).toContain(link)
        })
    })

    it('displays contact information correctly', () => {
        const wrapper = mount(FooterSection)

        const contactInfo = wrapper.find('.contact-info')
        expect(contactInfo.exists()).toBe(true)

        expect(wrapper.text()).toContain('📍 123 Bark Street, Dog City, DC 12345')
        expect(wrapper.text()).toContain('📞 (555) 123-4567')
        expect(wrapper.text()).toContain('✉️ info@pawsandplay.com')
        expect(wrapper.text()).toContain('🕒 Daily: 6:00 AM - 10:00 PM')
    })

    it('renders newsletter signup form', () => {
        const wrapper = mount(FooterSection)

        const newsletterSection = wrapper.find('.footer-section:last-child')
        expect(newsletterSection.text()).toContain('Newsletter')
        expect(newsletterSection.text()).toContain('Stay updated with park news and events!')

        const emailInput = wrapper.find('.newsletter-input')
        expect(emailInput.exists()).toBe(true)
        expect(emailInput.attributes('type')).toBe('email')
        expect(emailInput.attributes('placeholder')).toBe('Enter your email')

        const subscribeButton = wrapper.find('.newsletter-btn')
        expect(subscribeButton.exists()).toBe(true)
        expect(subscribeButton.text()).toBe('Subscribe')
    })

    it('displays current year in copyright', () => {
        const wrapper = mount(FooterSection)

        const currentYear = new Date().getFullYear()
        expect(wrapper.text()).toContain(`© ${currentYear} Paws & Play Dog Park`)
    })

    it('renders footer bottom links', () => {
        const wrapper = mount(FooterSection)

        const bottomLinks = wrapper.findAll('.footer-bottom-link')
        expect(bottomLinks).toHaveLength(3)

        const expectedBottomLinks = ['Privacy Policy', 'Terms of Service', 'Accessibility']
        expectedBottomLinks.forEach(link => {
            expect(wrapper.text()).toContain(link)
        })
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(FooterSection)

        expect(wrapper.find('.footer').classes()).toContain('footer')
        expect(wrapper.find('.footer-container').exists()).toBe(true)
        expect(wrapper.find('.footer-content').exists()).toBe(true)
        expect(wrapper.find('.footer-bottom').exists()).toBe(true)
    })

    it('renders all footer sections', () => {
        const wrapper = mount(FooterSection)

        const footerSections = wrapper.findAll('.footer-section')
        expect(footerSections).toHaveLength(4)
    })

    it('handles social link clicks without errors', async () => {
        const wrapper = mount(FooterSection)

        const socialLinks = wrapper.findAll('.social-link')

        for (const link of socialLinks) {
            await link.trigger('click')
            expect(link.exists()).toBe(true)
        }
    })

    it('handles newsletter form interaction', async () => {
        const wrapper = mount(FooterSection)

        const emailInput = wrapper.find('.newsletter-input')
        const subscribeButton = wrapper.find('.newsletter-btn')

        // Test input interaction
        await emailInput.setValue('test@example.com')
        expect((emailInput.element as HTMLInputElement).value).toBe('test@example.com')

        // Test button click
        await subscribeButton.trigger('click')
        expect(subscribeButton.exists()).toBe(true)
    })

    it('displays all required footer content', () => {
        const wrapper = mount(FooterSection)

        // Check for all major content sections
        expect(wrapper.text()).toContain('Paws & Play Dog Park')
        expect(wrapper.text()).toContain('Quick Links')
        expect(wrapper.text()).toContain('Contact Info')
        expect(wrapper.text()).toContain('Newsletter')
        expect(wrapper.text()).toContain('All rights reserved')
    })
})
