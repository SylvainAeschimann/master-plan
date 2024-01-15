<template>
    <div class="articles"  @click.stop="showArticles">
        <h3 class="articles-title" :class="{open:articlesState}">
            {{ $t('link-articles') }}
            <svg :class="{open : articlesState}" fill="#005EB8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </h3>
        <div class="anchors" @click="showArticles" :class="{open:articlesState}">
            <ul>
                <li  v-for="(article,index) in axis[filters.axis-1].articles" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg>
                    <a :href="'#article' + article.id" >
                        {{ article.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <section ref="containerCard" class="container-card">
        <template v-for="(article, index) in axis[filters.axis-1].articles" :key="index">
            <h2 :id="'article' + article.id" >{{ article.name }}</h2>
            <CardComponent v-for="(measure,index) in article.measures" :measure="measure" :key="index" />
        </template>
    </section>
    <div @click="this.goUp()" class="filter-icone goUp" :class="{ show : goUpState}">
        <svg aria-label="Retour en haut" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
    </div>
    <div class="filter-icone filters" @click="setFiltersState(true)">
        <svg aria-label="Filtres" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
        </svg>
    </div>
</template>
  
  <script>
    import { mapState } from 'vuex';
    import gsap from "gsap";
    import CardComponent from  "@/components/Card.vue";

  export default {
    name: 'ArticlesView',
    components: {
        CardComponent
    },
    mounted(){
        window.addEventListener("click",this.closeArticles,true);
        window.addEventListener("scroll",this.showGoUp,true);
    },
    beforeUnmount(){
        window.removeEventListener("click",()=>this.closeArticles(),true);
    },
    data() {
      return {
        articlesState:false,
        goUpState:false
      }
    },
    computed:mapState([
      'filtersState',
      'axis',
      'filters'
    ]),
    methods:{
        setFiltersState(bool){
            this.$store.dispatch("setFiltersStateSmartphone",bool);
        },
        showArticles(){
            this.articlesState = !this.articlesState;
        },
        closeArticles(e){
            if(e.target.classList.value.includes("articles") || e.target.classList.value.includes("articles-title")){
                return;
            }else{
                this.articlesState = false
            }
        },
        showGoUp(){
            if(this.$refs.containerCard === null) return;
            if(window.scrollY>500 || this.$refs.containerCard.scrollTop > 1000 ){
                this.goUpState = true
            }else{
                this.goUpState = false
            }
        },
        goUp(){
            this.$refs.containerCard.scrollTo(0,0)
            window.scrollTo(0,0);
        }
    },
    watch:{
        filters:{
            handler(filters){
                const cards = document.querySelectorAll(`.card`);
                let unconcernedCard =[];
                let concernedCard =[];
                
                //Retrieve Card related to state
                const selectorState = filters.state.join("|");
                const stateRegex = new RegExp(`${selectorState}`, 'gm');

                cards.forEach(card => {
                    if(!card.classList.value.match(stateRegex)){
                        unconcernedCard.push(card);
                    }else{
                        concernedCard.push(card);
                    }
                });

                //Retrieve Card within already state filtered related to parts

                const selectorParts = filters.parts.join("|");
                const partsRegex = new RegExp(`${selectorParts}`, 'gm');
                
                unconcernedCard = unconcernedCard.concat(concernedCard.filter((card)=> !card.classList.value.match(partsRegex)));
                concernedCard = concernedCard.filter((card)=>card.classList.value.match(partsRegex));
                
                unconcernedCard.forEach(card=>{
                    gsap.to(card,{
                        scale:0,
                        autoAlpha:0
                    })
                    gsap.to(card,{
                        delay:0.4,
                        position:"absolute",
                    })
                });

                concernedCard.forEach(card=>{
                    gsap.to(card,{
                        position:"static",
                        scale:1,
                        autoAlpha:1
                    })
                });

            }
        }
    }
  };

  </script>
  
  <style scoped lang="scss">

  @import "../styles/includes.scss";
  

    .articles{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        margin: auto;
        padding: 1.5rem 0;
        background-color: $red;
        color: $white;
        z-index: 2;
        transition:  all 0.5s ease;
        @include tablet{
            position: absolute;
            padding: 2rem 0;
        }
        &:hover{
            background-color: $red-hover;
            transition:  all 0.5s ease;
        }
        & .anchors{
            position: absolute;
            top: 0;
            transform: translateY(-110%);
            width: calc(100% - 3rem);
            padding: 1.5rem ;
            background-color: $white;
            transition: all 0.5s ease-in-out;
            @include tablet{
                width: calc(100% - 6rem);
                padding: 3rem ;
            }
            &.open{
                transform: translateY(-0%);
                transition: all 0.5s ease-in-out;
            }
        }
        & ul{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            margin-top: 3rem;
            color: $black;
            & li{
                display: grid;
                grid-auto-flow: column;
                align-items: center;
                gap: 0.5rem;
            }
            & a{
                display: block;
                text-align: left;
                font-size: 20px;
                &:hover{
                    text-decoration: underline;
                    color: $red;
                }
            }
            & svg{
                height: 16px;
            }
        }
        & h3{
            position: relative;
            letter-spacing: 1.5px;
            z-index: 3;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            text-align: center;
            text-transform: uppercase;
            &.open{
                color: $red;
                background-color: $white;
                transition: all 0.5s ease-in-out;
            }
            & svg{
                transition: all 0.5s ease-in-out;
                fill: $white;
                &.open{
                    fill: $red;
                    transform: rotate(180deg);
                    transition: all 0.5s ease-in-out;
                }
            }
        }
    }
    .filter-icone{
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 70px;
    height: 70px;
    border-radius: 150px;
    background-color: $blue;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all 0.5s ease;
    cursor: pointer;
    @include smartphoneMini{
        width: 50px;
        height: 50px;
    }
    @include smartphone-landscape{
        width: 60px;
        height: 60px;
    }
    @include tablet{
        width: 75px;
        height: 75px;
    }
    @include tablet{
        &:hover{
            background-color: $red;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 50px, rgba(0, 0, 0, 0.22) 0px 20px 12px;
            transition: all 0.5s ease;
    }
    }
    &.goUp{
        bottom: 1rem;
        right: 1rem;
        transition: all 0.5s ease-in-out;
        @include tablet{
            bottom: 3rem;
            transform: translateX(150%);
        }
        &.show{
            bottom: 7rem;
            transition: all 0.5s ease-in-out;
            @include tablet{
                bottom: 3rem;
                transform: translateX(0);
            }
        }
    }
    &.filters{
        bottom: 1rem;
        right: 1rem;
        @include tablet{
        display: none;
        }
    }
    &:active{
        box-shadow: none;
        transition: all 0.5s ease;
    }
    & svg{
        fill: $white;
        height: 40%;
    }
    }
    .container-card{
        display: flex;
        flex-direction: column;
        height: calc(100% - 8rem);
        max-height: calc(100% - 8rem);
        padding-top: 8rem;
        background-color: $light-grey;
        overflow-y: scroll;
        scroll-behavior: smooth;
        & h2{
            width: 95%;
            margin: 0 auto;
            margin-bottom: 3rem;
            text-align: left;
            @include tablet{
                width: 80%;
            }
        }
    }
  
  </style>
  