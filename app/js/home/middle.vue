<template lang="html">
    <div>
        <section class="section-second">
            <div class="mission">
                <span class="font-19">使命</span>
                <span class="font-17">帮助中小企业提升管理水平</span>
            </div>
            <div class="vision">
                <span class="font-19">愿景</span>
                <span class="font-17">成为最好用、最多企业家使</span>
                <p class="font-17">用的智能化管理系统</p>
            </div>
            <div class="learn-more">
                <p class="learn-more-word font-13">了解更多</p>
            </div>
        </section>
        <section class="section-third">
            <p class="font-17">已有超过 2,500 家企业正通过使用大管加进行精细化管理并提升人均效能</p>
            <img src="//www.erplus.co/mp/h5/img/represent-customer.png">
        </section>
    </div>

</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
@import "../../css/comment.scss";
    .section-second {
        margin-left: 0;
        margin-right: 0;
        padding: 0;
        background-color: #FFFFFF;
        width: 100%;
        background: url('//www.erplus.co/mp/h5/img/vision.png') no-repeat 0 0;
        background-position: 6.5rem 2.4rem;
        background-size: 2.5rem;

        .mission {
            text-align: center;
            margin-top: 1rem;

            span:nth-child(1) {
                margin-left: auto;
                color: #333333;
                letter-spacing: -0.46px;
            }

            span:nth-child(2) {
                margin-right: auto;
                margin-left: 0.4rem;
                color: #777777;
                letter-spacing: -0.41px;
            }
        }

        .vision {
            text-align: center;
            margin-bottom: 1rem; // margin-top: 0.36rem;
            span:nth-child(1) {
                margin-left: auto;
                color: #333333;
                letter-spacing: -0.46px;
                line-height: 22px;
            }

            span:nth-child(2) {
                margin-right: auto;
                margin-left: 0.4rem;
                color: #777777;
                letter-spacing: -0.41px;
            }

            p {
                margin-left: 1rem;
                color: #777777;
                letter-spacing: -0.41px;
                position: relative;
            }
        }

        .learn-more {
            background: #EFF6FF;
            border-radius: 3px;
            padding: 0.13rem;
            text-align: center;
            width: 2.6rem;
            height: 0.7rem;
            margin-bottom: 1rem;
            margin-left: 3.5rem;

            .learn-more-word {
                color: #777777;
            }
        }
    }

    .section-third {
        padding: 0;
        background-color: #F6F9FA;
        text-align: center;
        width: 100%;
        padding-top: 1.333rem;

        p {
            color: #333333;
            width: 100%;
            padding-left: 0.693rem;
            padding-right: 0.693rem;
        }

        img {
            width: 9rem;
            margin-top: 0.6053rem;
            margin-bottom: 1.3867rem;
        }
    }
</style>