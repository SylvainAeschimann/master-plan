<template>
  <div class="about">
    <h1>{{ $t('about-h1') }}</h1>
     
    <p>
      {{ $t('about-paragraph-1') }}
    </p>
    
    <h2>{{ $t('about-h2-1') }}</h2>
    <p>
      {{ $t('about-paragraph-2') }}
    </p>

    <p>
      {{ $t('about-paragraph-3') }}
    </p>

    <div class="methodology">
      <div class="block">
        <h3>{{ $t('about-methodology-1') }}</h3>
        <div>
          <p>{{ $t('about-methodology-2') }}</p>
          <p>{{ $t('about-methodology-3') }}</p>
        </div>
        <div>
          <p>{{ $t('about-methodology-4') }}</p>
          <p>{{ $t('about-methodology-5') }}</p>
        </div>
      </div>
      <div class="block">
        <h3>{{ $t('about-methodology-6') }}</h3>
        <div>
          <p>{{ $t('about-methodology-7') }}</p>
          <p>{{ $t('about-methodology-8') }}</p>
        </div>
      </div>
      <div class="block">
        <h3>{{ $t('about-methodology-9') }}</h3>
        <div>
          <p>{{ $t('about-methodology-10') }}</p>
          <p>{{ $t('about-methodology-11') }}</p>
        </div>
        <div>
          <p>{{ $t('about-methodology-12') }}</p>
          <p>{{ $t('about-methodology-13') }}</p>
        </div>
      </div>
      <div class="block last">
        <h3>{{ $t('about-methodology-14') }}</h3>
        <div>
          <p>{{ $t('about-methodology-15') }}</p>
          <p>{{ $t('about-methodology-16') }}</p>
        </div>
      </div>
    </div>

    <i>{{ $t('about-paragraph-4') }}</i>

    <h2>{{ $t('about-h2-2') }}</h2>
      <p>
        {{ $t('about-paragraph-5') }}
      </p>
      <h3>{{ $t('about-h3-1') }}</h3>
      <p>
        {{ $t('about-paragraph-6') }}
      </p>
      <h3>{{ $t('about-h3-2') }}</h3>
      <p>
        {{ $t('about-paragraph-7') }}
      </p>
      <h3>{{ $t('about-h3-3') }}</h3>
      <p>
        {{ $t('about-paragraph-8') }}
      </p>
      <br>
      <br>
  </div>
</template>

<style lang="scss">
  @import "../styles/includes.scss";

  .about{
    padding: 0 5%;
    height: calc(100vh - var(--header-height));
    overflow-y: scroll;
    scroll-behavior: smooth;
    @include tablet{
      padding: 0 10%;
    }
    & h1{
      font-size: 7vw;
      @include tablet{
        font-size: 45px;
      }
    }
    & h3{
      font-weight: 500;
      text-transform: uppercase;
    }
    & i{
      display: block;
      margin: 0;
      margin-bottom: 4rem;
    }
  }

  .methodology{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    & .block{
      position: relative;
      padding: 2rem 5rem 1.5rem 5rem;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3rem;
        height: 1px;
        background-color: $blue;
      }
      &::after{
        content: "";
        position: absolute;
        top: -4px;
        left: 3rem;
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid $blue;
      }
      & h3{
        position:absolute;
        top: 0%;
        left: 0;
        transform: translateY(-50%) translateX(6rem);
        margin-bottom: 1.2rem;
      }
      & div{
        margin-bottom: 1.5rem;
        & p:first-child{
          font-weight: bold;
        }
      }
      & p{
        padding-left: 1.2rem;
        margin: 0;
      }
    }
    & .block:not(.last){
      border-left: 1px solid $blue;
    }
  }

</style>
