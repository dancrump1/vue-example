import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogSection from '../components/BlogSection.vue'

describe('BlogSection', () => {
    it('renders blog section with correct content', () => {
        const wrapper = mount(BlogSection)

        expect(wrapper.find('.blog-section').exists()).toBe(true)
        expect(wrapper.find('.blog-title').exists()).toBe(true)
        expect(wrapper.find('.blog-subtitle').exists()).toBe(true)
    })

    it('displays correct section title and subtitle', () => {
        const wrapper = mount(BlogSection)

        expect(wrapper.find('.blog-title').text()).toBe('Latest from Our Blog')
        expect(wrapper.find('.blog-subtitle').text()).toBe('Tips, stories, and insights from our dog park community')
    })

    it('renders correct number of blog posts', () => {
        const wrapper = mount(BlogSection)

        const blogCards = wrapper.findAll('.blog-card')
        expect(blogCards).toHaveLength(4)
    })

    it('displays blog post titles correctly', () => {
        const wrapper = mount(BlogSection)

        const expectedTitles = [
            '10 Essential Tips for First-Time Dog Park Visitors',
            'The Benefits of Regular Dog Park Visits',
            'Community Spotlight: Meet Our Regular Visitors',
            'Seasonal Safety: Spring Dog Park Guidelines'
        ]

        expectedTitles.forEach(title => {
            expect(wrapper.text()).toContain(title)
        })
    })

    it('displays blog post categories correctly', () => {
        const wrapper = mount(BlogSection)

        const expectedCategories = ['Tips & Advice', 'Health & Wellness', 'Community', 'Safety']

        expectedCategories.forEach(category => {
            expect(wrapper.text()).toContain(category)
        })
    })

    it('displays blog post authors correctly', () => {
        const wrapper = mount(BlogSection)

        const expectedAuthors = ['Sarah Johnson', 'Dr. Michael Chen', 'Emma Rodriguez', 'Lisa Thompson']

        expectedAuthors.forEach(author => {
            expect(wrapper.text()).toContain(author)
        })
    })

    it('displays blog post dates correctly', () => {
        const wrapper = mount(BlogSection)

        const expectedDates = ['March 15, 2024', 'March 12, 2024', 'March 10, 2024', 'March 8, 2024']

        expectedDates.forEach(date => {
            expect(wrapper.text()).toContain(date)
        })
    })

    it('displays read time information', () => {
        const wrapper = mount(BlogSection)

        const expectedReadTimes = ['5 min read', '7 min read', '4 min read', '6 min read']

        expectedReadTimes.forEach(readTime => {
            expect(wrapper.text()).toContain(readTime)
        })
    })

    it('renders blog post images/emojis correctly', () => {
        const wrapper = mount(BlogSection)

        const expectedImages = ['🐕', '🏃‍♂️', '👥', '🌸']

        expectedImages.forEach(image => {
            expect(wrapper.text()).toContain(image)
        })
    })

    it('renders "Read More" buttons for each post', () => {
        const wrapper = mount(BlogSection)

        const readMoreButtons = wrapper.findAll('.read-more-btn')
        expect(readMoreButtons).toHaveLength(4)

        readMoreButtons.forEach(button => {
            expect(button.text()).toBe('Read More')
        })
    })

    it('renders "View All Articles" button', () => {
        const wrapper = mount(BlogSection)

        const viewAllButton = wrapper.find('.view-all-btn')
        expect(viewAllButton.exists()).toBe(true)
        expect(viewAllButton.text()).toBe('View All Articles')
    })

    it('has correct CSS classes for styling', () => {
        const wrapper = mount(BlogSection)

        expect(wrapper.find('.blog-section').classes()).toContain('blog-section')
        expect(wrapper.find('.blog-container').exists()).toBe(true)
        expect(wrapper.find('.blog-header').exists()).toBe(true)
        expect(wrapper.find('.blog-grid').exists()).toBe(true)
        expect(wrapper.find('.blog-cta').exists()).toBe(true)
    })

    it('handles button clicks without errors', async () => {
        const wrapper = mount(BlogSection)

        const readMoreButtons = wrapper.findAll('.read-more-btn')
        const viewAllButton = wrapper.find('.view-all-btn')

        // Click first read more button
        await readMoreButtons[0].trigger('click')

        // Click view all button
        await viewAllButton.trigger('click')

        expect(readMoreButtons[0].exists()).toBe(true)
        expect(viewAllButton.exists()).toBe(true)
    })

    it('displays blog post excerpts', () => {
        const wrapper = mount(BlogSection)

        // Check if excerpts are present (partial content check)
        expect(wrapper.text()).toContain('Planning your first visit to a dog park?')
        expect(wrapper.text()).toContain("Discover how regular visits to the dog park can improve your dog's physical health")
        expect(wrapper.text()).toContain('Get to know some of our most beloved regular visitors')
        expect(wrapper.text()).toContain('As spring arrives, here are important safety guidelines')
    })
})
