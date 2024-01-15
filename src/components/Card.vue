<template>
    <article class="card" :class="[`state-${measure.state.id}`, displayPartsClass(measure.parts)]">
        <div class="card-header">
            <h4>
                {{ measure.name }}
            </h4>
            <span>
                {{ measure.start }} - {{ measure.end }}
            </span>
        </div>
        <div class="card-chip">
            <div class="chip" :class="{done : measure.state.name === 'Terminé', inProgress : measure.state.name === 'En cours', notStarted : measure.state.name === 'Non commencé'}">
                {{ measure.state.name }}
            </div>
            <div class="chip part" v-for="(part,index) in measure.parts" :key="index">
                {{ part.name }}
            </div>
        </div>
        <div class="card-steps">
            <div class="step" v-for="(step,index) in measure.steps" :key="index">
                <h5>{{ step.title }}</h5>
                <p>{{ step.description }}</p>
            </div>
        </div>
    </article>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
    name: 'CardComponent',
    props:{
        measure: {
            id:String,
            name:String,
            end:Number,
            start:Number,
            state:Object,
            parts:Object,
            steps:Object
        },
    },
    computed:mapState([
      'axis',
      'filters'
    ]),
    methods: {
        displayPartsClass(parts){
            return parts.map(part => {
                return `part-${part.id}`;
            });
        },
    },
    }
</script>

<style scoped lang="scss">
@import "../styles/includes.scss";

.card{
    width: 95%;
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 3rem;
    background-color: $white;
    border-radius: $big-border;
    box-shadow: $shadow;
    padding-bottom: 3rem;
    @include tablet{
        width: 80%;
    }
    & .card-header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: clamp(16px, 1.7vw, 22px);
        background-color: $blue;
        color: $white;
        border-top-right-radius: $big-border;
        border-top-left-radius: $big-border;
        overflow: hidden;
        @include tablet{
            flex-direction: row;
            padding-left: 3rem;
            height: 70px;
        }
        & h4{
            padding: 1rem 2.2rem;
            text-align: left;
            @include tablet{
                padding: 1rem 0;
            }
        }
        & span{
            display:flex;
            justify-content:center;
            align-items:center;
            width: 100%;
            height: 100%;
            background-color: $red;
            padding: 1rem 1rem;
            @include tablet{
                padding: 0;
                width: 38%;
                min-width: 160px;
                border-top-left-radius: $big-border;
            }
            @include computer{
                width: auto;
                min-width: 250px;
            }
        }
    }
    & .card-chip{
        display: flex;
        flex-flow: row wrap;       
        gap: 1rem;
        padding: 1.5rem 1rem;
        @include tablet{
            padding: 1.5rem;
        }
        @include computer{
            padding: 1.5rem 3rem;
        }
        & .chip{
            padding: 0.5rem 1rem;
            border-radius: 11px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            width: fit-content;
            @include tablet{
                font-size: 11px;
                padding: 0.6rem 1rem;
            }
            @include computer{
                font-size: 12px;
                padding: 0.8rem 1rem;
            }
            &.part{
                border: 1px solid $blue;
                color: $blue;
            }
            &.done{
                border: 1px solid $green;
                color: $green;
            }
            &.notStarted{
                border: 1px solid $red;
                color: $red;
            }
            &.inProgress{
                border: 1px solid $orange;
                color: $orange;
            }
        }
    }
    & .card-steps{
        display: flex;
        flex-direction: column;
        min-height: 50px;
        margin: 0 1rem;
        border-left: 1px solid $blue;
        @include tablet{
            margin: 0 1.5rem;
        }
        @include computer{
            margin: 0 3rem;
        }
        & .step{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0 1rem;
            @include tablet{
                padding: 0 2rem;
            }
            & p{
                text-align: left;
            }
            & h5{
                position: relative;
                &::before{
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: -1rem;
                    transform: translateY(-50%);
                    height: 1px;
                    width: 0.5rem;
                    background-color: $blue;
                    @include tablet{
                        left: -2rem;
                        width: 1rem;
                    }
                }
            }
        }
    }
}

</style>