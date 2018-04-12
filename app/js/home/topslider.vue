<template lang="html">
    <section>
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide class="slide-first">
                <article class="slide-first-top">
                    <p class="">手机上最好用的</p>
                    <p class="">企业智能化管理系统</p>
                </article>
                <div class="slide-first-middle">
                    <img src="//www.erplus.co/mp/h5/img/animate/make-logo.png" alt="">
                    <img class="filament-off" src="//www.erplus.co/mp/h5/img/animate/filament-off.png">
                    <img class="animate-1" style="height: 2.7rem; top: 1.5rem;" src="//www.erplus.co/mp/h5/img/animate/liquid1.png">
                    <img class="animate-2"  src="//www.erplus.co/mp/h5/img/animate/filament-on.png">
                    <img class="animate-3" style="display:block" src="//www.erplus.co/mp/h5/img/animate/light.png">
                    <img class="animate-4"  src="//www.erplus.co/mp/h5/img/animate/bubble.png">
                    <img class="animate-5" style="height: 1.76rem; top: 1.45rem;" src="//www.erplus.co/mp/h5/img/animate/liquid2.png">
                    <img class="animate-6" style="width:0.7rem" src="//www.erplus.co/mp/h5/img/animate/progress.png">
                    <!-- <div class="apple-group" style="left:1.333rem"> -->
                    <div class="apple-group" >
                        <img class="animate-7" style="display: block; top: 4rem;" src="//www.erplus.co/mp/h5/img/animate/apple.png">
                        <img class="plate" src="//www.erplus.co/mp/h5/img/animate/plate.png">
                    </div>
                    <img class="arrow" style="transform: rotate(30deg); transform-origin: 0px 50% 0px;" src="//www.erplus.co/mp/h5/img/animate/arrow.png">
                    <img class="animate-8" style="height: 2.04rem;" src="//www.erplus.co/mp/h5/img/animate/dialog.png">
                </div>
                <div class="slide-first-buttom">
                    <a class="button-big font-17" onclick="javascript:;">下载APP</a>
                    <a class="button-big font-17" onclick="javascript:;">预约演示</a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <article>
                    <h1 class="">任务目标系统 OKR</h1>
                    <p class="">员工实时状态
                        <span class="high-light">一目了然</span>
                    </p>
                    <p class="">临近截止时间
                        <span class="high-light">自动提醒</span>
                    </p>
                    <p class="">任务完成后由上司进行
                        <span class="high-light">多维度评分评级</span>
                    </p>
                    <p class="">随时随地
                        <span class="high-light">拆分任务目标</span>,并转为任务下达给团队下属</p>
                    <p class="">实时
                        <span class="high-light">跟踪项目进展</span>情况</p>
                </article>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
        </swiper>
    </section>
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper"
    export default {
        components: {
            swiper,
            swiperSlide,
        },
        props: {

            options: {
                type: Object,
                default () {
                    return {
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",
                        },
                        notNextTick: false,
                    }
                },
            },

        },
    }
</script>

<style lang="scss">
    @import "~swiper/dist/css/swiper.css"; //   article {
    //       margin-top: 97px;
    //   }
    .slide-first {
        // display: flex;
        // flex-direction: column;
        // align-items: center; // justify-content: center;
        padding: 0;
        margin-top: 96px;
        background-color: #F6F9FA;
        margin-left: 0;
        margin-right: 0;
        width: 100%;
    } // .slide-first {
    //     padding: 0; 
    //     margin-top: 96px;
    //     background-color: #F6F9FA;
    //     margin-left: 0;
    //     margin-right: 0;
    //     width: 100%;
    // }
    .slide-first-top {
        margin-top: 1.333rem;
        font-size: 52px;
        text-align: center;
    }

    .slide-first-middle {
        position: relative;
        margin-top: 2rem;
        height: 5.3rem;
    }

    // .slide-first-middle img {
    //     // position: absolute;
    //     width: 8rem; // left: 0.8rem;
    //     // top: 0.8rem;
    //     z-index: 20;
    // }

    .slide-first-buttom {
        // position: absolute;
        // top: 12.5rem;
        // left: 1.65rem;
        margin: 1.8rem 0 1rem 1.3rem;
        // margin-top: 1.8rem;
        font-size: 35px;
        // margin-bottom: 1rem;
    }

    .slide-first-buttom a:first-child {
        background: #4A90E2;
        color: #FFFFFF;
        letter-spacing: 0;
        padding: 0.2133rem 0.8rem;
        border-radius: 3px;
        text-decoration: none;
    }

    .slide-first-buttom a:last-child {
        border: 1px solid #D8D8D8;
        color: #333333;
        letter-spacing: 0;
        margin-left: 20px;
        background: #FFFFFF;
        padding: 0.2133rem 0.8rem;
        border-radius: 3px;
        text-decoration: none;
    }


    /* 动画相关 */
.slide-first-middle img:nth-child(1) {
    width: 8rem;
    left: 0.8rem;
    // top: 0.8rem;
    position: absolute;
    z-index: 20;
}

.slide-first-middle img:nth-child(2) {
    position: absolute;
    width: .4rem;
    top: 1rem;
    left: 1.43rem;
    z-index: 21;
}

.slide-first-middle .arrow {
    position: absolute;
    top: 3.5rem;
    left: 7rem;
    width: 0.35rem;
    z-index: 21;
}

.slide-first-middle .apple-group .plate{
    position: absolute;
    width: 0.9677rem;
    top: 4.65rem;
    left: 5.2rem;
    z-index: 1;
}

.slide-first-middle .animate-1{
   position: absolute;
   width: 0.16rem;
   height: 0px;
   left: 1.56rem;
   bottom: 0;
//    z-index: 1;
}

.slide-first-middle .animate-2{
    position: absolute;
    width: .4rem;
    top: 1rem;
    left: 1.43rem;
    z-index: 21;
 }

 .slide-first-middle .animate-3{
    position: absolute;
    top: .3rem;
    left: 1rem;
    width: 1.33rem;
 }

 .slide-first-middle .animate-4{
    position: absolute;
    top: 3.7rem;
    left: 2.6rem;
    width: 0.5rem;
    z-index: 21;
 }

 .slide-first-middle .animate-5{
    position: absolute;
    bottom: 0;
    width: 0.54rem;
    height: 0px;
    // top: 3rem;
    left: 3.83rem;
}

.slide-first-middle .animate-6{
    position: absolute;
    width: 0px;
    height: 0.3rem;
    left: 5.54rem;
    top: 1.3rem;
    z-index: 21;
}

.slide-first-middle .apple-group {
    position: absolute;
    width: 100px;
}

.slide-first-middle .apple-group .animate-7{
    position: absolute;
    z-index: 1;
    left: 5.35rem;
    top: 4.5rem;
    width: 0.6rem;
}

.slide-first-middle .animate-8{
    position: absolute;
    bottom: 0;
    width: 1.44rem;
    height: 0px; /*2.04rem*/
    left: 7.8rem;
    top:1rem;
}
/* 动画相关结束 */
</style>