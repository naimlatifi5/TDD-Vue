<template>
  <div>
    <button data-test="button" v-if="heading" type="button" @click="onToggle">
      <h1 data-test="heading">{{ heading }}</h1>
    </button>
    <div
      data-test="content"
      :class="{ expanded: isExpanded }"
      v-if="isExpanded"
      class="content"
      :style="setInlineStyleBorder"
    >
      Accordion content
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
    heading: {
      type: String,
      default: '',
    },
  },
  computed: {
    setInlineStyleBorder() {
      return this.isExpanded ? 'border: 3px solid green;' : null
    },
  },
  methods: {
    onToggle() {
      this.isExpanded = !this.isExpanded
      this.$emit('isExpanded', true)
    },
  },
}
</script>

<style>
.content.expanded {
  color: red;

  padding: 20px;
}
</style>
