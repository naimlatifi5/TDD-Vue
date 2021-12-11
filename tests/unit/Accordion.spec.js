import { shallowMount } from '@vue/test-utils'
import Accordion from '@/components/Accordion.vue'
import { nextTick } from 'vue'

describe('Template....', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
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

  it('Should display Accordion heading title', () => {
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

  it('On button click it should call method onToggle() and toggle isExpanded === true', async () => {
    const onToggle = jest.spyOn(Accordion.methods, 'onToggle')
    const wrapper = shallowMount(Accordion, {
      propsData: {
        heading: 'accordion heading',
      },
    })
    const button = wrapper.find('[data-test="button"]')
    button.trigger('click')
    expect(onToggle).toHaveBeenCalled()
    expect(wrapper.vm.isExpanded).toBe(true)
    await nextTick() // if removing next tick content should not pass the test as there is async call
    expect(wrapper.find('[data-test="content"]').exists()).toBe(true)
  })
  it(`It should add class expanded when isExpanded === true`, () => {
    const wrapper = shallowMount(Accordion, {
      data() {
        return {
          isExpanded: true,
        }
      },
    })
    let content = wrapper.find('[data-test="content"]')
    expect(content.exists()).toBe(true)
    expect(content.classes()).toContain('expanded')
  })

  it(`It should add inline style with border when isExpanded === true`, () => {
    const wrapper = shallowMount(Accordion, {
      data() {
        return {
          isExpanded: true,
        }
      },
    })
    let content = wrapper.find('[data-test="content"]')
    expect(content.exists()).toBe(true)
    expect(content.attributes().style).toBe('border: 3px solid green;')
  })

  it(`It should emit isExpanded when onToggle method is called`, async () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        heading: 'Accordion heading',
      },
    })
    wrapper.vm.onToggle()
    expect(wrapper.emitted('isExpanded')).toBeTruthy()
  })
})
