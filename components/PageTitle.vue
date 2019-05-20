<template>
  <div class="container page-title">
    <div class="row">
      <div class="col-sm-12"><h2 class="h2">{{title}}</h2></div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .page-title{
    margin-top: 50px;
  }
  .h2{
    margin-bottom: 0;
  }
</style>
