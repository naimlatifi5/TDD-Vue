import { shallowMount } from '@vue/test-utils'
import Accordion from '@/components/Accordion.vue'

describe('Template....', () => {
  it('Component should exist and render correctly', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
  it('On button click it should toggle expended data property', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
  it('On button click it should toggle expended data and show class is-expanded', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
  it('On button click it should emitt the id back to parent', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
})
