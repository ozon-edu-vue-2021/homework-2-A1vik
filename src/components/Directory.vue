<template>
  <div class="directory">
    <div class="directory__wrap" @click="toggleIsFolderOpen">
      {{ isFolderOpen ? '-' : '+' }}
      <img src="../assets/folder.svg" alt="directory" class="icon">
      {{ name }}
    </div>
    <keep-alive>
      <ul class="directory__content" v-if="isFolderOpen">
        <li
          class="directory__item"
          v-for="(item, index) in contents"
          :key="index"
        >
          <div v-if="item.type === 'file'">
            <file
              :name="item.name"
              :path="getPath"
              :activeFile="activeFile"
              v-on="$listeners"
            />
          </div>
          <div v-else-if="item.type === 'link'">
            <link-node
              :name="item.name"
              :target="item.target"
              :path="getPath"
              :activeFile="activeFile"
              v-on="$listeners"
            />
          </div>
          <div v-else-if="item.type === 'directory'">
            <directory
              :name="item.name"
              :type="item.type"
              :contents="item.contents"
              :path="getPath"
              :activeFile="activeFile"
              v-on="$listeners"
            />
          </div>
        </li>
      </ul>
    </keep-alive>
  </div>
</template>

<script>
import File from './File.vue';
import LinkNode from './Link.vue';

export default {
  name: 'Directory',
  props: {
    name: { type: String, required: true },
    type: { type: String, required: true },
    contents: { type: Array, required: false },
    path: { type: String, required: true },
    activeFile: { type: String, required: true }
  },
  data: () => ({
    isFolderOpen: false,
  }),
  components: {
    File,
    LinkNode
  },
  methods: {
    toggleIsFolderOpen() {
      this.isFolderOpen = !this.isFolderOpen;
    }
  },
  computed: {
    getPath() {
      return this.path + '/' + this.name;
    }
  }
}
</script>

<style scoped>
.directory__wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
}
.icon {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
.directory__content {
  list-style: none;
  margin-top: 5px;
}
</style>