<template>
  <div class="page-wrapper">
    <PageTitle title="Checkout" />
    <Checkout />
  </div>
</template>

<script>
import Checkout from '~/components/Checkout.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    Checkout,
    PageTitle
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  }
}
</script>
