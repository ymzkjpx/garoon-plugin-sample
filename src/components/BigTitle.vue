<script>
export default {
  name: 'BigTitle',
  props: {
    message: {
      type: String,
      default: 'Default Value',
      required: false
    }
  }
}
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>