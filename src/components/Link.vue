<template>
  <a
    class="link"
    :src="target"
    :class="{'link--active': isActiveFile}"
    @click="setActive"
  >
    {{ name }}
  </a>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
  name: 'Link',
  props: {
    target: { type: String, required: true }
  },
  mixins: [mixin]
}
</script>

<style scoped>
.link {
  padding: 2px 5px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
.link--active {
  background-color: #ffc107;
}
</style>