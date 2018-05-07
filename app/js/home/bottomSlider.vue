<template lang="html">
    <section class="section-fourth">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide class="slide-first">
                <div class="top">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/36kr.png">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                    </div>
                    <p class="font-14">加号科技用3年时间打磨一款产品，用OKR管理方法提升中小企业运转效率。</p>
                </div>
                <div class="bottom">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                        <img src="//www.erplus.co/mp/h5/img/chuangtou.png">
                    </div>
                    <p class="font-14">大管加将多个系统融合在一个系统当中，实现了用一个系统完成了整个公司的事情。</p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-second">
                <div class="top">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/chuangke.png">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                    </div>
                    <p class="font-14">大管加把企业主和高管们从琐事中解放出来，让他们有时间专注于人、战略和资本。</p>
                </div>
                <div class="bottom">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                        <img src="//www.erplus.co/mp/h5/img/yuntou.png">
                    </div>
                    <p class="font-14">大管加的强势切入，对早日迎来真正的企业移动工作时代意义极大。</p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-third">
                <div class="top">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/dongdian.png">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                    </div>
                    <p class="font-14">和一些既会打鸣又会下蛋，但核心功能并不好用的SaaS平台相比，大管加更加专注，同时也有自己的独到理念和设计。</p>
                </div>
                <div class="bottom">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                        <img src="//www.erplus.co/mp/h5/img/pinwan.png">
                    </div>
                    <p class="font-14">对于一个企业管理软件来说，大管加显得过于“剑走偏锋”，但是“颠覆都是始于剑走偏锋”。</p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-fourth">
                <div class="top">
                    <div class="img-wrap">
                        <img  src="//www.erplus.co/mp/h5/img/xianfeng.png">
                         <img src="//www.erplus.co/mp/h5/img/quotes.png">
                    </div>
                    <p class="font-14">大管加在保证企业层级有序的情况下，让领导充分了解下属，从而更好的做出决策。</p>
                </div>
                <div class="bottom">
                    <div class="img-wrap">
                        <img src="//www.erplus.co/mp/h5/img/quotes.png">
                        <img src="//www.erplus.co/mp/h5/img/lieyun.png">
                    </div>
                    <p class="font-14">大管加希望通过一系列的数据让企业管理者能更客观的对工作本身以及团队成员做出决策。</p>
                </div>
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

<style lang="scss" scoped>
    @import "../../css/comment.css";
    @import "~swiper/dist/css/swiper.css";
    .section-fourth {
        width: 100%;

        .top,
        .bottom {
            border: 1px solid rgb(8, 16, 24);
            border-radius: 10px;
            padding: .4533rem 0.4267rem 0.56rem 0.4533rem;
            margin: 0.9333rem 0.7733rem 0.72rem 0.7733rem;
        }
        .img-wrap {
            display: flex;
            justify-content: space-between;
            height: 0.8133rem;
        }
        .top{
            .img-wrap {
                img:nth-child(1) {
                width: 1.8667rem;
                }
                img:nth-child(2) {
                    width: 0.6667rem;
                    transform: rotateZ(180deg);
                }
            }
            
        }

        .bottom {
            .img-wrap {
                img:nth-child(1) {
                width: 0.6667rem;
                transform: rotateX(0deg);
            }
                img:nth-child(2) {
                    width: 1.8667rem;
                }
            }
            
        }

        p {
            color: #333333;
            margin-top: 0.3733rem;
            word-break: break-all;
            text-align: justify;
        }

    }
</style>