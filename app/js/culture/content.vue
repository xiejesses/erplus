<template lang="html">
    <div class="content">
        <div id="top-bg">
            <div class="top-bg-intro">
                <p>Stay hungry, stay foolish,</p>
                <p>stay in Plustech.</p>
            </div>
        </div>

        <div id="hi-intro">
            <p>Hi, We are
                <span class="color-b">PLUSer</span>
            </p>
        </div>

        <div id="slogans">
            <div class="slogans-item">
                <h1>大管加使命</h1>
                <p>帮助中小企业提升管理水平</p>
            </div>
            <div class="slogans-item">
                <h1>大管加愿景</h1>
                <p>成为最好用、最多企业家使用的智能化管理系统</p>
            </div>
            <div class="slogans-item" style="padding-bottom: 0.7rem;">
                <h1>加号价值观</h1>
                <p>诚信、付出、创新、执行</p>
            </div>
            <div class="slogans-bg-bottom">
                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-slogans-bg.png">
            </div>
        </div>

        <div id="our-culture">
            <div class="our-culture-title-wrapper">
                <div class="our-culture-title fs28 text-center">加号文化</div>
                <div class="our-culture-title-en fs14 text-center">OUR CULTURE</div>
            </div>
        </div>

        <swiper id="culture-slide-wrapper" :options="options" :not-next-tick="options.notNextTick">
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-01.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-01.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>一个开放的工作环境</p>
                                <p>一个轻松的交流氛围</p>
                                <p>Hand in hand</p>
                                <p>Shoulder by shoulder</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-02.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-02.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>即使在深夜</p>
                                <p>也有“加”人奋战</p>
                                <p>Enduring through difficulties</p>
                                <p>because we care</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-03.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-03.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>一“加”人不说两家话，</p>
                                <p>在这里，我们敢想敢说，敢恨敢爱</p>
                                <p>Hate it, love it, just don't be silent on it</p>
                                <p>because we are families</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-04.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-04.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>一起上山, 一起下海</p>
                                <p>相信还有更多, 关于我们的故事</p>
                                <p>It is not a story about he or she</p>
                                <p>it is a story about all of us</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-05.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-05.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>快乐是能和你们一起笑, 一起闹</p>
                                <p>什么都可以忘掉</p>
                                <p>The happiness I know</p>
                                <p>is being with all of you</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="slide-first">
                    <div class="swiper-slide">
                        <div class="culture-photo">
                            <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-pic-06.png">
                        </div>
                        <div class="culture-intro center">
                            <div class="culture-title">
                                <img src="//www.erplus.co/mp/h5/img/culture/img-mp-culture-title-06.png">
                            </div>
                            <div class="culture-text fs14">
                                <p>思维的碰撞，观点的交错</p>
                                <p>生活的点滴，美味的共享</p>
                                <p>Ideas and experiences, ups and downs</p>
                                <p>no matter bitter or sweet, we share</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            <div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
        </swiper>

    </div>


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

<style scoped lang="scss">
    @import "../../css/comment.scss";
    @import "~swiper/dist/css/swiper.css";

    html,
    body {
        overflow: hidden;
    }
    .color-b {
        color: #4A90E2;
    }

    #top-bg {
        margin-top: 1.5rem;
        position: relative;
        width: 100%;
        height: 6rem;
        background: url("//www.erplus.co/mp/h5/img/culture/img-mp-culture-top-bg.png") no-repeat;
        background-size: 100% 100%;
    }

    #top-bg .top-bg-intro {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 24px;
        top: 40%;
    }

    [data-dpr="2"] #top-bg .top-bg-intro {
        font-size: 48px;
    }

    [data-dpr="3"] #top-bg .top-bg-intro {
        font-size: 72px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] #top-bg .top-bg-intro {
            font-size: 42px;
        }
    }

    /* hi-intro */

    #hi-intro {
        font-family: 'PingFangSC-Light';
        background-color: #fff;
        height: 3.4667rem;
        color: #333;
    }

    #hi-intro p {
        font-size: 28px;
        text-align: center;
        line-height: 3.4667rem;
    }

    [data-dpr="2"] #hi-intro p {
        font-size: 56px;
    }

    [data-dpr="3"] #hi-intro p {
        font-size: 84px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] #hi-intro p {
            font-size: 52px;
        }
    }



    #slogans {
        background-color: #4a90e2;
        color: #fff;
    }

    #slogans .slogans-item {
        text-align: center;
        padding: 0.28rem 0;
    }

    #slogans .slogans-item:first-child {
        padding-top: 1rem;
    }

    #slogans .slogans-bg-bottom {
        margin-bottom: -0.08rem;
    }

    [data-dpr="2"] #slogans .slogans-bg-bottom {
        margin-bottom: -1rem; // margin-top: 2rem;
    }

    #slogans .slogans-bg-bottom img {
        width: 100%;
    }

    #slogans .slogans-item h1 {
        line-height: 1.8em;
        font-size: 19px;
        font-weight: 400;
    }

    [data-dpr="2"] #slogans .slogans-item h1 {
        font-size: 38px;
    }

    [data-dpr="3"] #slogans .slogans-item h1 {
        font-size: 57px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] #slogans .slogans-item h1 {
            font-size: 34px;
        }
    }

    #slogans .slogans-item p {
        font-size: 14px;
        font-weight: 200;
        font-family: 'PingFangSC-Light';
    }

    [data-dpr="2"] #slogans .slogans-item p {
        font-size: 28px;
    }

    [data-dpr="3"] #slogans .slogans-item p {
        font-size: 42px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] #slogans .slogans-item p {
            font-size: 24px;
        }
    }



    #our-culture {
        background: #fff;
    }

    #our-culture .our-culture-title-wrapper {
        padding: 1rem 0;
    }

    #our-culture .our-culture-title {
        color: #333;
    }

    #our-culture .our-culture-title-en {
        font-family: 'PingFangSC-Light';
        color: #999;
        text-transform: uppercase;
        letter-spacing: 1px;
    }


    #culture-slide-wrapper {
        text-align: center;
        position: relative;
        width: 100%;
        height: 12rem;
    }

    [data-dpr="2"] #culture-slide-wrapper {
        height: 13.33rem;
    }

    [data-dpr="3"] #culture-slide-wrapper {
        height: 13rem;
    }

    #culture-slide-wrapper .culture-photo img {
        width: 100%;
        height: 5.44rem;
    }

    #culture-slide-wrapper .culture-intro {
        background-color: #fff;
    }

    #culture-slide-wrapper .culture-intro .culture-title {
        padding-top: 1rem;
        padding-bottom: 0.6rem;
    }

    #culture-slide-wrapper .culture-intro .culture-title img {
        width: 102px;
        height: 50px;
    }

    [data-dpr="2"] #culture-slide-wrapper .culture-intro .culture-title img {
        width: 204px;
        height: 100px;
    }

    [data-dpr="3"] #culture-slide-wrapper .culture-intro .culture-title img {
        width: 306px;
        height: 150px;
    }

    #culture-slide-wrapper .culture-intro .culture-text {
        font-family: 'PingFangSC-Light';
        margin-top: 12px;
        color: #333;
        line-height: 1.8em;
    }

    .text-center {
        text-align: center;
    }

    .fs20 {
        font-size: 20px;
    }

    [data-dpr="2"] .fs20 {
        font-size: 40px;
    }

    [data-dpr="3"] .fs20 {
        font-size: 60px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] .fs20 {
            font-size: 36px;
        }
    }

    .fs23 {
        font-size: 23px;
    }

    [data-dpr="2"] .fs23 {
        font-size: 46px;
    }

    [data-dpr="3"] .fs23 {
        font-size: 69px;
    }

    .fs14 {
        font-size: 14px;
    }

    [data-dpr="2"] .fs14 {
        font-size: 28px;
    }

    [data-dpr="3"] .fs14 {
        font-size: 42px;
    }

    @media screen and (device-width: 320px) and (device-height: 568px) {
        [data-dpr="2"] .fs14 {
            font-size: 24px;
        }
    }

    .fs28 {
        font-size: 28px;
    }

    [data-dpr="2"] .fs28 {
        font-size: 56px;
    }

    [data-dpr="3"] .fs28 {
        font-size: 84px;
    }

    .h1 {
        color: #212121;
    }

    .h2 {
        color: #777777;
    }

    .mt12 {
        margin-top: 0.32rem;
    }

    .mt30 {
        margin-top: 0.8rem;
    }

    [data-dpr='2'] .middle-one-title {
        font-size: 40px;
    }

    [data-dpr='3'] .middle-one-title {
        font-size: 60px;
    }
</style>