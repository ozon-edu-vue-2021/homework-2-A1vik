<template>
  <div id="app">
    <Tree :data="treeData" />
  </div>
</template>

<script>
import treeData from '../public/static/node_modules.json';
import Tree from '@/components/Tree.vue';



export default {
  name: 'App',
  data: () => ({
    treeData
  }),
  components: {
    Tree
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  padding: 0 30px;
}
</style>
