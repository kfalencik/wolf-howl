<template>
    <div class="hero">
        <video src="~/assets/video/shop.mp4" autoplay playsinline loop muted />
        <img src="https://images.pexels.com/photos/2351800/pexels-photo-2351800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

        <div class="hero__title">
            <img height="200" src="~/assets/img/logo.png" alt="Wolf Howl" />
            <h1 class="h1">Wolf Howl</h1>
            <p>Quality traditional tattoo apparel that lasts</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero{
        height: calc(100vh - 80px);
        overflow: hidden;
        margin-bottom: 50px;
        position: relative;
        min-height: 568px;

        @media (max-width: $breakpoint-md){
          height: calc(100vh - 160px);

        }

        &::after{
          content: '';
          display: block;
          position: absolute;
          left: 0 ;
          right: 0;
          top: 0;
          bottom: 0;
          background: url(~assets/img/overlay.png) rgba(0,0,0,0.5);
          z-index: 5;
        }

        video{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &__title{
            width: 500px;
            max-width: 96%;
            height: 250px;
            background: #fff;
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column nowrap;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 10;
            transform: translate(-50%, -50%);
            border: 25px solid #000;

            @media (max-width: $breakpoint-md){
              border: 15px solid #000;
            }

            img{
              position: absolute;
              top: -140px;

              @media (max-width: $breakpoint-md){
                height: 100px;
                top: -40px;
              }
            }

            h1{
              margin-bottom: 0;
            }
        }
    }
</style>
