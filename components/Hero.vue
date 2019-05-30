<template>
    <div class="hero">
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

        &__title{
            width: 500px;
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
            transform: translate(-50%, -50%);
            border: 25px solid #000;

            img{
              position: absolute;
              top: -140px;
            }

            h1{
              margin-bottom: 0;
            }
        }
    }
</style>
