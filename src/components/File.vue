<template>
  <div
    class="file"
    :class="{'file--active': isActiveFile}"
    @click="setActive"
  >
    <img class="file__icon" src="../assets/file.svg" alt="icon file" />
    {{ name }}
    <div class="file__path"></div>
  </div>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
  name: 'File',
  mixins: [mixin]
}
</script>

<style scoped>
.file {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  padding: 2px 5px;
  margin: 5px 0;
  cursor: pointer;
}
.file__icon {
  margin-right: 2px;
  width: 20px;
  height: 18px;
}
.file--active {
  background-color: #e0cffc;
}
</style>