<template>
  <div class="home">
    <hgroup>
      <h1>
        {{ $t("titrePrincipal") }}
      </h1>
      <p>
        <span>{{ $t("etat-mesure") }}</span> &nbsp;
         <span>{{ $t("date-etat-mesure") }}</span>
      </p>
      <p>
        <span>{{ $t("prochaine-maj") }}</span> &nbsp;
        <span>{{ $t("date-prochaine-maj") }}</span>
      </p>
    </hgroup>
    <router-link :to="!!lang ? `/${lang}/articles` : '/articles'" class="btn">
      <span>{{ $t("btn-découvrir") }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  computed:mapState([
      'lang'
  ]),
}
</script>

<style scoped lang="scss">

@import "../styles/includes.scss";

.home{
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 5%;
  @include tablet{
    margin-left: 15%;
  }
  & hgroup{
    color: $white;
    text-align: left;
    & h1{
      font-size: 50px;
      @include smartphoneMini{
        font-size: 32px;
      }
      @include smartphone-landscape{
        font-size: 32px;
      }
      @include tablet{
        font-size: 70px;
      }
    }
    & p{
      font-size: 20px;
      font-weight: 400;
      @include smartphoneMini{
        font-size: 16px;
      }
      @include smartphone-landscape{
        font-size: 16px;
      }
      @include tablet{
        font-size: 30px;
      }
      & span:last-child{
        font-weight: 100;
      }
    }
  }
}

</style>
