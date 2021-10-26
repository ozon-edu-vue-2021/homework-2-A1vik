<template>
  <div>
    <div>Path is: {{ activeFile }}</div>
    <directory
      :name="data.name"
      :type="data.type"
      :contents="data.contents"
      :activeFile="activeFile"
      @setActiveFile="setActiveFile"
      path=""
    />
  </div>
</template>

<script>
import Directory from './Directory.vue';

export default {
  name: 'Tree',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Directory
  },
  data: () => ({
    activeFile: '/'
  }),
  methods: {
    setActiveFile(path) {
      this.activeFile = path;
    }
  }
}
</script>

<style>

</style>
