<template>
  <button type="button" :class="['button', classes]" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
// Dependencies
import { defineComponent, reactive, computed } from 'vue';

const types: Array<string> = ['primary', 'secondary', 'danger'];
const sizes: Array<string> = ['s', 'm', 'l'];

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: (value: string) => types.includes(value)
    },
    size: {
      type: String,
      default: 'm',
      validator: (value: string) => sizes.includes(value.toLowerCase())
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`button__${props.type || 'primary'}`]: true,
        [`button__size-${props.size}`]: true
      })),
      onClick() {
        emit('click');
      }
    };
  }
});
</script>

<style lang="sass" scoped>
  @import "./style"
</style>