<template>
    <div class="brochure">
        <h1>{{ $t('brochure-h1') }}</h1>
        <ul>
            <li>
                <a href="./pdf/Verbier_DocGénéral_MPSM_WEB.pdf" download="">
                    Brochure master plan
                </a>
            </li>
            <li>
                <a href="./pdf/VdBMag_04_6bat.pdf" download="">
                    Article VdB Le Mag
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @import "../styles/includes.scss";

    .brochure{
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
        & ul{
            list-style: disc;
            color: $blue;
        }
        & a{
            display: block;
            font-size: 18px;
            margin-bottom: 1rem;
            @include tablet{
                font-size: 20px;
            }
            &:hover{
                text-decoration: underline;
            }
            &:visited{
                color: $red;
            }
        }
    }
</style>