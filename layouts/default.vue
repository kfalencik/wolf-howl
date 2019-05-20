<template>
  <main>
    <mainNav />
    <nuxt />
  </main>
</template>

<script>
import MainNav from '~/components/MainNav.vue';

export default{
  components: {
    MainNav
  }
}
</script>

<style lang="scss" scoped>
  main{
    background: linear-gradient($secondary-color 0%,  #fff 40%,  #fff 100%);
  }
</style>
