<template>
  <router-view :id="id" />
</template>

<script>
export default {
  name: 'user',

  props: ['id'],

  mounted() {
    if (isNaN(this.id, 10)) return
    this.$store.dispatch('fetchUser', this.id)
  },

  watch: {
    id(id) {
      if (isNaN(id, 10)) return
      this.$store.dispatch('fetchUser', id)
    },
  },
}
</script>

<style lang="stylus">
</style>
