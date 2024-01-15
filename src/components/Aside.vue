<template>
    <aside class="aside" >
        <div :data-gloss="$t('data-gloss-filtre')" class="btn-filter tags" :class="{open : this.$route.path.includes('articles') && !filtersState}" @click="this.$store.dispatch('setFiltersState',true)">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
            </svg>
        </div>
        <nav class="navigation" :class="{ open : menuState }">
            <ul>
                <li class="tags" :data-gloss="$t('link-articles')">
                    <router-link :to="!!lang ? `/${lang}/articles` : '/articles'">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                        <span>{{ $t('link-articles') }}</span>
                    </router-link>
                </li>
                <li class="tags" :data-gloss="$t('link-brochure')" @click="this.closeMenu()">
                    <router-link :to="!!lang ? `/${lang}/brochure` : '/brochure'">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                        </svg>
                        <span>{{ $t('link-brochure') }}</span>
                    </router-link>
                </li>
                <li class="tags" :data-gloss="$t('link-apropos')" @click="this.closeMenu()">
                    <router-link :to="!!lang ? `/${lang}/a-propos` : '/a-propos'">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                        </svg>
                        <span>{{ $t('link-apropos') }}</span>
                    </router-link>
                </li>
                <li class="lang tags" :data-gloss="$t('data-gloss-langue')" @click="this.switchLanguage()">
                    <div>
                        <span ref="current" class="current">FR</span> / <span ref="notCurrent" class="not-current">EN</span>
                    </div>
                </li>
            </ul>
        </nav>
        <section class="filters" :class="{ open : filtersState, openSmartphone : filtersStateSmartphone}">
            <div>
                <h2>{{ $t('aside-title-filtre') }}</h2>
                <div @click="setFiltersState(false)">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </div>
            </div>
            <div class="axis">
                <h3>{{ $t('aside-filtre-axes') }}</h3>
                <template v-for="(axe,index) in axis" :key="index">
                    <label>
                        <input
                        type="radio"
                        :value="axe.id"
                        name="axis"
                        v-model="this.currentfilters.axis"
                        :checked="filters.axis === axe.id"
                        @change="updateFilters()"
                        >
                        {{ axe.name }}
                    </label>
                </template>
            </div>
            <div class="status">
                <h3>{{ $t('aside-filtre-status') }}</h3>
                <label>
                    <input 
                    type="checkbox"
                    id="Non commencé"
                    value="state-1"
                    v-model="this.currentfilters.state"
                    @change="updateFilters()"
                    >
                    {{ $t('aside-filtre-non-commence') }}
                </label>
                <label>
                    <input 
                    type="checkbox"
                    id="En cours"
                    value="state-2" 
                    v-model="this.currentfilters.state"
                    @change="updateFilters()"
                    >
                    {{ $t('aside-filtre-en-cours') }}
                </label>
                <label>
                    <input 
                    type="checkbox"
                    id="Terminé"
                    value="state-3"
                    v-model="this.currentfilters.state"
                    @change="updateFilters()"
                    >
                    {{ $t('aside-filtre-termine') }}
                </label>
            </div>
            <div class="parties">
                <h3>{{ $t('aside-filtre-parties') }}</h3>
                <template v-for="(part,index) in parts" :key="index">
                    <label>
                        <input
                        type="checkbox"
                        :value="'part-' + part.id"
                        v-model="this.currentfilters.parts"
                        @change="updateFilters()"
                        >
                        {{ part.name }}
                    </label>
                </template>

            </div>
            <button class="btn" @click="setFiltersState(false)">
                <span>{{ $t('aside-btn-valider') }}</span>
            </button>
        </section>
    </aside>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
    name: 'AsideComponent',
    data(){
        return{
            currentfilters:{
                axis: 1,
                state:[],
                parts:[]
            }
        }
    },
    computed:mapState([
      'menuState',
      'filtersState',
      'filtersStateSmartphone',
      'axis',
      'parts',
      'filters',
      'lang'
    ]),
    mounted(){
        if(window.innerWidth > 900) this.$store.dispatch('setFiltersState',true);
    },
    methods:{
        setFiltersState(bool){
            this.$store.dispatch("setFiltersState",bool);
            this.$store.dispatch("setFiltersStateSmartphone",bool);
        },
        updateFilters(){
            const search = {...this.currentfilters};
            this.$store.dispatch("setFilters",search);
        },
        closeMenu(){
            this.$store.dispatch("setMenuState",false);
        },
        switchLanguage() {
            const currentLang = this.$i18n.locale;
            const newLang = currentLang === 'fr' ? 'en' : 'fr';

            this.$i18n.locale = newLang;
            this.$store.dispatch("setLang",currentLang === 'fr' ? 'en' : '');

            const currentRoute = this.$router.currentRoute.value;
            let newRoute = null;   

            if(newLang != 'fr'){
                newRoute = { ...currentRoute, params: { lang: newLang } };
                if(this.$refs.current != null) this.$refs.current.innerText = "en";
                if(this.$refs.notCurrent != null) this.$refs.notCurrent.innerText = "fr";
            }else{
                newRoute = { ...currentRoute, params: { lang: "" } };
                if(this.$refs.current != null) this.$refs.current.innerText = "fr";
                if(this.$refs.notCurrent != null) this.$refs.notCurrent.innerText = "en";
            }
            this.$router.push(newRoute);
        },
        },
    watch:{
        $route: {
            handler($route){
                if($route.path === '/articles' && window.innerWidth > 900){
                    this.setFiltersState(true);
                }else{
                    this.setFiltersState(false);
                }
            }
        },
    }
    }
</script>

<style scoped lang="scss">
@import "../styles/includes.scss";

.aside{
    position: absolute;
    top: 0;
    left: 0;
    grid-column: 1/2;
    grid-row: 2/3;
    min-width: 100vw;
    box-sizing: border-box;
    z-index: 9;
    @include tablet{
        position: relative;
        min-width: inherit;
        min-height: inherit;
        transform: inherit;
    }
}

.btn-filter{
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(-100%);
        height: 87px;
        width: 100%;
        background-color: $white;
        border-bottom-right-radius: $big-border;
        border-top-right-radius: $big-border;
        box-shadow: $shadow;
        z-index: 8;
        transition: all 0.4s cubic-bezier(.47,1.64,.41,.8);
        cursor: pointer;
        @include tablet{
            display:flex;
            justify-content:center;
            align-items:center;
            &.open{
                transform: translateX(80%);
                &:hover{
                    transform: translateX(100%);
                    transition: all 0.4s cubic-bezier(.47,1.64,.41,.8);
                }
            }
        }
        & svg{
            fill: $blue;
            width: 30px;
            height: 30px;
        }
}

.navigation{
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    width: 100%;
    padding: 6rem 0;
    background-color: $blue;
    z-index: 9;
    transition: all 0.5s ease-in-out;
    @include tablet{
        position: relative;
        transform: inherit;
        max-width: 100px;
    }
    &.open{
        transform: translateY(0%);
        transition: all 0.5s ease-in-out;
    }
    &>ul{
        display:grid;
        height: calc(100vh - 6rem - var(--header-height));
        grid-template-rows: repeat(7, 1fr);
        @include smartphone-landscape{
            height: calc(100vh - 3rem - var(--header-height));
        }
        @include tablet{
            height: calc(100vh - 12rem - var(--header-height));
        }
    }
    & li{
        grid-column: 1/2;
        &.lang{
            grid-row: 6/7;
            & span{
                margin: 0 0.5rem;
            }
            &   .current{
                font-weight: bold;
            }
        }
        &>a,&>div{
            position: relative;
            display:flex;
            justify-content:center;
            align-items:center;
            width: 100%;
            height: 100%;
            text-transform: uppercase;
            color: $white;
            cursor: pointer;
            @include tablet{
                &::before{
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 80%;
                    background-color: $white;
                    border-top-left-radius: $big-border;
                    border-bottom-left-radius: $big-border;
                    z-index: -1;
                }
                &:hover{
                    color: $blue;
                    & svg{
                        fill: $blue;
                    }
                    & span{
                        z-index: 10;
                        color: $blue;
                    }
                    &::before{
                        width: 90%;
                    }
                }
            }
        }
        & span:not(.lang span){
            @include tablet{
                display:none;
            }
        }
        & svg{
            display: none;
            fill:$white;
            height: 30px;
            width: 30px;
            z-index: 10;
            @include tablet{
                display:block;
            }
        }
    }
}

.filters{
    position: fixed;
    top: 75px;
    left: 0;
    transform: translateY(-100%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: calc(100vh - 75px);
    padding: 1rem 2rem;
    background-color: $white;
    box-shadow: $shadow;
    box-sizing: border-box;
    line-height: 1.5;
    transition: all 0.5s ease-in-out;
    z-index: 8;
    overflow-y: scroll;
    @include tablet{
        position: absolute;
        $translate : calc(-100px - 3rem);
        top: inherit;
        height: 100%;
        gap: 2rem;
        transform: translateY(-0%) translateX($translate);
        border-bottom-right-radius: $big-border;
        padding: 2rem 2rem 2rem 132px;
        &.open{
            transform: translateY(0) translateX(0);
            transition: all 0.5s ease-in-out;
        }
    }
    &.openSmartphone{
        transform: translateY(0);
        transition: all 0.5s ease-in-out;
    }
    &>div:nth-child(1){
        width: 100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        height: 50px;
        & h2{
            color: $blue;
            font-weight: 500;
        }
        &>div{
            display:flex;
            justify-content:center;
            align-items:center;
            height: 50px;
            width: 50px;
            border-radius: 150px;
            cursor: pointer;
            &:hover{
                background-color: $blue;
                & svg{
                    fill: $white;
                }
            }
        }
        & svg{
            display: block;
            fill: $blue;
            height: 25px;
        }
    }
    & label{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    & h3{
        margin-bottom: 0.5rem;
    }
    & .axis,.status,.parties{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 310px;
        gap: 0.5rem;
    }
    & button{
        max-width: inherit;
        @include tablet{
            display: none;
        }
    }
}

</style>