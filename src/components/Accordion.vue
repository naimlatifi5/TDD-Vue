<template>
  <div>
    <button
      data-test="button"
      v-if="heading"
      type="button"
      @click="toggleAccordion"
    >
      <h1 data-test="heading">{{ heading }}</h1>
    </button>
    <div data-test="content" v-if="isExpanded" class="content">
      Hej here is content
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      isExpanded: false,
    }
  },
  props: {
    heading: String,
  },
  methods: {
    toggleAccordion() {
      console.log('clicked')
    },
  },
}
</script>

<style lang="scss" scoped></style>
