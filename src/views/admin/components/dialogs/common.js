export const mixinsCommonDialogMethods = {
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
