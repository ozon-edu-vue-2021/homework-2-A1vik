export default {
  props: {
    name: { type: String, required: true },
    activeFile: { type: String, required: true },
    path: { type: String, required: true }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    setActive() {
      this.$emit('setActiveFile', this.getCurrentPath);
    }
  },
  computed: {
    getCurrentPath() {
      return `${this.path}/${this.name}`;
    },
    isActiveFile() {
      return this.getCurrentPath === this.activeFile;
    }
  }
}