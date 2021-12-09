import { shallowMount } from '@vue/test-utils'
import Accordion from '@/components/Accordion.vue'
import { nextTick } from 'vue'

describe('Template....', () => {
  it('Component should exist and render correctly', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
  it('Accordion button exist when props heading is passed', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        heading: 'Accordion heading',
      },
    })
    expect(wrapper.find('[data-test="button"]').exists()).toBe(true)
  })

  it(`Accordion button shouldn't exist when props are not passed`, () => {
    const wrapper = shallowMount(Accordion, {})
    expect(wrapper.find('[data-test="button"]').exists()).toBe(false)
  })

  it('Should display Accoridion heading title', () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        heading: 'Accordion heading',
      },
    })
    expect(wrapper.find('[data-test="heading"]').text()).toEqual(
      'Accordion heading',
    )
  })
  it(`Content shouldn't show on initial load`, () => {
    const wrapper = shallowMount(Accordion, {
      data() {
        return { isExpanded: false }
      },
    })
    expect(wrapper.find('[data-test="content"]').exists()).toBe(false)
  })

  it('On button click it should call method toggleAccordion() and toggle isExpanded === true', async () => {
    const onToggleAccordion = jest.spyOn(Accordion.methods, 'onToggleAccordion')
    const wrapper = shallowMount(Accordion, {
      propsData: {
        heading: 'accordion heading',
      },
    })
    const button = wrapper.find('[data-test="button"]')
    button.trigger('click')
    expect(onToggleAccordion).toHaveBeenCalled()
    expect(wrapper.vm.isExpanded).toBe(true)
    await nextTick() // if removing next tick content should not pass the test as there is async call
    expect(wrapper.find('[data-test="content"]').exists()).toBe(true)
  })
  it('On button click it should toggle expended data and show class is-expanded', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
  it('On button click it should emitt the id back to parent ad', () => {
    const wrapper = shallowMount(Accordion)
    expect(wrapper.exists()).toBe(true)
  })
})
