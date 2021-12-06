<template>
  <button type="button" @click="toggleAccordion">
    <h1>Accordion heading</h1>
  </button>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {}
  },
  methods: {
    toggleAccordion() {
      console.log('clicked')
    },
  },
}
</script>

<style lang="scss" scoped></style>
