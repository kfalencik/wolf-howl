<template>
  <div class="loading">
    <img width="50" src="~assets/img/loading.svg" alt="Loading" />
  </div>
</template>

<style lang="scss" scoped>
  .loading{
      position: fixed;
      background: $secondary-color;
      z-index: 50;
      left: 0;
      width: 100%;
      top: 80px;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: $breakpoint-md){
        top: 130px;
      }
    }
</style>
