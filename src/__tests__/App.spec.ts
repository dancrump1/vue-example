import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import router from '@/router'

describe('App', () => {
  it('renders Home page by default', async () => {
    const wrapper = mount(App, {
      global: { plugins: [router] },
    })
    await router.isReady()
    expect(wrapper.text()).toContain('Welcome to Paws & Play Dog Park')
  })
})
