import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '../pages/Contact.vue'

// Mock the FooterSection component
vi.mock('../components/FooterSection.vue', () => ({
    default: {
        name: 'FooterSection',
        template: '<div class="footer-section">Footer Section</div>'
    }
}))

// Mock window.alert
global.alert = vi.fn()

describe('Contact', () => {
    it('renders contact page with correct structure', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-page').exists()).toBe(true)
    })

    it('renders hero section with correct content', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-hero').exists()).toBe(true)
        expect(wrapper.find('.contact-title').exists()).toBe(true)
        expect(wrapper.find('.contact-subtitle').exists()).toBe(true)
    })

    it('displays correct title and subtitle', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-title').text()).toBe('Contact Us')
        expect(wrapper.find('.contact-subtitle').text()).toBe("Get in touch with our team. We'd love to hear from you!")
    })

    it('renders contact content section', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-content').exists()).toBe(true)
        expect(wrapper.find('.contact-grid').exists()).toBe(true)
    })

    it('renders contact info section', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-info').exists()).toBe(true)
        expect(wrapper.find('.info-title').exists()).toBe(true)
        expect(wrapper.find('.info-description').exists()).toBe(true)
    })

    it('displays info title and description', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.info-title').text()).toBe('Get In Touch')
        expect(wrapper.find('.info-description').text()).toContain('Have questions about our dog park?')
    })

    it('renders contact methods correctly', () => {
        const wrapper = mount(Contact)

        const contactMethods = wrapper.findAll('.contact-method')
        expect(contactMethods).toHaveLength(3)
    })

    it('displays contact method icons', () => {
        const wrapper = mount(Contact)

        const methodIcons = wrapper.findAll('.method-icon')
        expect(methodIcons).toHaveLength(3)

        expect(methodIcons[0].text()).toBe('📍')
        expect(methodIcons[1].text()).toBe('📞')
        expect(methodIcons[2].text()).toBe('✉️')
    })

    it('displays contact method content', () => {
        const wrapper = mount(Contact)

        expect(wrapper.text()).toContain('Visit Us')
        expect(wrapper.text()).toContain('Call Us')
        expect(wrapper.text()).toContain('Email Us')

        expect(wrapper.text()).toContain('123 Bark Street')
        expect(wrapper.text()).toContain('(555) 123-4567')
        expect(wrapper.text()).toContain('info@pawsandplay.com')
    })

    it('renders contact form', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-form').exists()).toBe(true)
        expect(wrapper.find('.form-title').exists()).toBe(true)
        expect(wrapper.find('.form').exists()).toBe(true)
    })

    it('displays form title', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.form-title').text()).toBe('Send Us a Message')
    })

    it('renders all form fields', () => {
        const wrapper = mount(Contact)

        const formGroups = wrapper.findAll('.form-group')
        expect(formGroups).toHaveLength(4)

        expect(wrapper.find('input[id="name"]').exists()).toBe(true)
        expect(wrapper.find('input[id="email"]').exists()).toBe(true)
        expect(wrapper.find('input[id="subject"]').exists()).toBe(true)
        expect(wrapper.find('textarea[id="message"]').exists()).toBe(true)
    })

    it('displays correct form labels', () => {
        const wrapper = mount(Contact)

        const labels = wrapper.findAll('label')
        expect(labels).toHaveLength(4)

        expect(labels[0].text()).toBe('Name')
        expect(labels[1].text()).toBe('Email')
        expect(labels[2].text()).toBe('Subject')
        expect(labels[3].text()).toBe('Message')
    })

    it('displays correct form placeholders', () => {
        const wrapper = mount(Contact)

        const nameInput = wrapper.find('input[id="name"]')
        const emailInput = wrapper.find('input[id="email"]')
        const subjectInput = wrapper.find('input[id="subject"]')
        const messageTextarea = wrapper.find('textarea[id="message"]')

        expect(nameInput.attributes('placeholder')).toBe('Your name')
        expect(emailInput.attributes('placeholder')).toBe('your.email@example.com')
        expect(subjectInput.attributes('placeholder')).toBe("What's this about?")
        expect(messageTextarea.attributes('placeholder')).toBe('Tell us more...')
    })

    it('renders submit button', () => {
        const wrapper = mount(Contact)

        const submitButton = wrapper.find('.submit-btn')
        expect(submitButton.exists()).toBe(true)
        expect(submitButton.text()).toBe('Send Message')
    })

    it('handles form submission correctly', async () => {
        const wrapper = mount(Contact)

        // Fill out the form
        await wrapper.find('input[id="name"]').setValue('John Doe')
        await wrapper.find('input[id="email"]').setValue('john@example.com')
        await wrapper.find('input[id="subject"]').setValue('Test Subject')
        await wrapper.find('textarea[id="message"]').setValue('Test message')

        // Submit the form
        await wrapper.find('.form').trigger('submit')

        // Check that alert was called
        expect(global.alert).toHaveBeenCalledWith("Thank you for your message! We'll get back to you soon.")
    })

    it('renders map section', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.map-section').exists()).toBe(true)
        expect(wrapper.find('.map-title').exists()).toBe(true)
        expect(wrapper.find('.map-placeholder').exists()).toBe(true)
    })

    it('displays map title and content', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.map-title').text()).toBe('Find Us')
        expect(wrapper.text()).toContain('🗺️')
        expect(wrapper.text()).toContain('Interactive Map Coming Soon')
        expect(wrapper.text()).toContain('123 Bark Street, Dog City, DC 12345')
    })

    it('renders footer section', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.footer-section').exists()).toBe(true)
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(Contact)

        expect(wrapper.find('.contact-page').classes()).toContain('contact-page')
        expect(wrapper.find('.contact-hero').exists()).toBe(true)
        expect(wrapper.find('.contact-content').exists()).toBe(true)
        expect(wrapper.find('.map-section').exists()).toBe(true)
    })

    it('displays all required content sections', () => {
        const wrapper = mount(Contact)

        // Check for all major content sections
        expect(wrapper.text()).toContain('Contact Us')
        expect(wrapper.text()).toContain('Get In Touch')
        expect(wrapper.text()).toContain('Send Us a Message')
        expect(wrapper.text()).toContain('Find Us')
    })
})
