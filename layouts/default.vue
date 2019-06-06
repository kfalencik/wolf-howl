<template>
  <main>
    <mainNav />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import MainNav from '~/components/MainNav.vue';
import Footer from '~/components/Footer.vue';

export default{
  components: {
    MainNav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  main{
    background: linear-gradient($secondary-color 0%,  #fff 40%,  #fff 100%);
  }
  .page-wrapper{
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 50px;

    @media (max-width: $breakpoint-md){
      padding-top: 130px;
    }

    @media (max-height: 567px){
      padding-top: 0;
    }
  }
</style>
