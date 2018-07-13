<template lang="html">
    <section class="section-first">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide class="slide-first">
                <article class="slide-first-top">
                    <p class="font-26">帮助中小企业提升管理水平</p>
                    <!-- <p class="font-26">企业智能化管理系统</p> -->
                </article>
                <div class="slide-first-middle">
                    <img src="//www.erplus.co/mp/h5/img/animate/make-logo.png" alt="">
                    <img class="filament-off" src="//www.erplus.co/mp/h5/img/animate/filament-off.png">
                    <img class="animate-1" style="height: 2.7rem; top: 1.5rem;" src="//www.erplus.co/mp/h5/img/animate/liquid1.png">
                    <img class="animate-2" src="//www.erplus.co/mp/h5/img/animate/filament-on.png">
                    <img class="animate-3" style="display:block" src="//www.erplus.co/mp/h5/img/animate/light.png">
                    <img class="animate-4" src="//www.erplus.co/mp/h5/img/animate/bubble.png">
                    <img class="animate-5" style="height: 1.76rem; top: 1.45rem;" src="//www.erplus.co/mp/h5/img/animate/liquid2.png">
                    <img class="animate-6" style="width:0.7rem" src="//www.erplus.co/mp/h5/img/animate/progress.png">
                    <!-- <div class="apple-group" style="left:1.333rem"> -->
                    <div class="apple-group">
                        <img class="animate-7" style="display: block; top: 4rem;" src="//www.erplus.co/mp/h5/img/animate/apple.png">
                        <img class="plate" src="//www.erplus.co/mp/h5/img/animate/plate.png">
                    </div>
                    <img class="arrow" style="transform: rotate(30deg); transform-origin: 0px 50% 0px;" src="//www.erplus.co/mp/h5/img/animate/arrow.png">
                    <img class="animate-8" style="height: 2.04rem;" src="//www.erplus.co/mp/h5/img/animate/dialog.png">
                </div>
                <div class="slide-first-bottom">
                    <a class="button-big font-17" onclick="javascript:;">下载APP</a>
                    <a class="button-big font-17" onclick="javascript:;">预约演示</a>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-second">
                <article>
                    <h1 class="font-20">任务目标系统 OKR</h1>
                    <p class="font-14">员工实时状态
                        <span class="high-light">一目了然</span>
                    </p>
                    <p class="font-14">临近截止时间
                        <span class="high-light">自动提醒</span>
                    </p>
                    <p class="font-14">任务完成后由上司进行
                        <span class="high-light">多维度评分评级</span>
                    </p>
                    <p class="font-14">随时随地
                        <span class="high-light">拆分任务目标</span>,并转为任务下达给团队下属</p>
                    <p class="font-14">实时
                        <span class="high-light">跟踪项目进展</span>情况</p>
                </article>
                <img class="video task-video" src="//www.erplus.co/mp/h5/img/video.png">
            </swiper-slide>
            <swiper-slide class="slide-third">
                <article>
                    <h1 class="font-20">客户渠道管理 CRM</h1>
                    <p class="font-14">团队
                        <span class="high-light">业务跟进活动</span>实时查看</p>
                    <p class="font-14">通话记录支持
                        <span class="high-light">自动录音上传</span>
                    </p>
                    <p class="font-14">数据报表实时统计
                        <span class="high-light">全方位销售数据</span>
                    </p>
                    <p class="font-14">订单可快速关联
                        <span class="high-light">用户自定义的产品</span>
                    </p>
                    <p class="font-14">
                        <span class="high-light">团队业绩相互PK</span>,有竞争才有进步</p>
                </article>
                <img class="video crm-video" src="//www.erplus.co/mp/h5/img/video.png">
            </swiper-slide>
            <swiper-slide class="slide-fourth">
                <article>
                    <h1 class="font-20">智能绩效考核 APE</h1>
                    <p class="font-14">团队成员排名
                        <span class="high-light">实时</span>查看</p>
                    <p class="font-14">工作成果自动影响
                        <span class="high-light">动态排名</span>
                    </p>
                    <p class="font-14">周期性考核
                        <span class="high-light">主客观比例</span>自主分配</p>
                    <p class="font-14">评分人按工作相关度
                        <span class="high-light">自动推荐</span>
                    </p>
                    <p class="font-14">支持
                        <span class="high-light">自定义</span>职业素养主观考核项</p>
                </article>
                <img class="video achievements-video" src="//www.erplus.co/mp/h5/img/video.png">
            </swiper-slide>
            <swiper-slide class="slide-fifth">
                <article>
                    <h1 class="font-20">审批系统</h1>
                    <p class="font-14">预置
                        <span class="high-light">请假、报销、外出</span>等5大模板</p>
                    <p class="font-14">支持
                        <span class="high-light">自定义审批流程</span>和
                        <span class="high-light">自定义审批模板</span>
                    </p>
                    <p class="font-14">支持针对不同部门开放不同审批类型</p>
                    <p class="font-14">独有
                        <span class="high-light">下属审批</span>视角汇总所有下属相关审批</p>
                </article>
                <img class="video approval-video" src="//www.erplus.co/mp/h5/img/video.png">
            </swiper-slide>
            <swiper-slide class="slide-sixth">
                <article>
                    <h1 class="font-20">考勤系统</h1>
                    <p class="font-14">支持
                        <span class="high-light">GPS</span>与
                        <span class="high-light">WIFI</span>双重打卡确保成功率</p>
                    <p class="font-14">支持针对不同人员设置不同考勤方案</p>
                    <p class="font-14">
                        <span class="high-light">自动导入法定假日</span>并支持公司自定义休假</p>
                    <p class="font-14">考勤管理员可
                        <span class="high-light">一键导出</span>公司考勤信息</p>
                </article>
                <img class="video attendance-video" src="//www.erplus.co/mp/h5/img/video.png">
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

<style scoped lang="scss">
    @import "../../css/comment.css";
    @import "~swiper/dist/css/swiper.css";
    
    .slide-first {
        padding: 0;
        margin-top: 96px;
        background-color: #F6F9FA;
        margin-left: 0;
        margin-right: 0;
        width: 100%;
    }
    .slide-first .slide-first-top p {
        color: #333333;
        letter-spacing: 0;
        // margin-top: 1.333rem;
        padding: 0px 50px 0px 50px;
    }
    
    .video {
        margin-left: 3.4rem;
        margin-top: 7.3rem;
        width: 3.3333rem;
    }

    .approval-video {
        margin-top: 8.1rem;
    }

    .attendance-video {
        margin-top: 8.1rem;
    }

    article {
        padding-top: 1.2rem;
        text-align: center;
    }

    article h1 {
        color: #212121;
        letter-spacing: 0;
        margin-bottom: 0.3rem;
    }

    article p {
        color: #777777;
        letter-spacing: -0.34px;
        margin-top: 0.15rem;
    }

    article .high-light {
        color: #4A90E2;
        letter-spacing: -0.34px;
    }

    .slide-first-middle {
        position: relative;
        margin-top: 1.8rem;
        height: 5.3rem;
    }
    
    .slide-first-bottom {
        margin: 1.25rem 0 2.1rem 1.3rem;
    }
    [data-dpr="2"] .slide-first-bottom {
        margin: 1.25rem 0 1.1rem 1.3rem;
    }
    [data-dpr="3"] .slide-first-bottom {
        margin: 1.25rem 0 1.65rem 1.3rem;
    }

    .slide-first-bottom a:first-child {
        background: #4A90E2;
        color: #FFFFFF;
        letter-spacing: 0;
        padding: 0.2133rem 0.8rem;
        border-radius: 3px;
        text-decoration: none;
    }

    .slide-first-bottom a:last-child {
        border: 1px solid #D8D8D8;
        color: #333333;
        letter-spacing: 0;
        margin-left: 20px;
        background: #FFFFFF;
        padding: 0.2133rem 0.8rem;
        border-radius: 3px;
        text-decoration: none;
    }


    .slide-first-middle img:nth-child(1) {
        width: 8rem;
        left: 0.8rem;
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

    .slide-first-middle .apple-group .plate {
        position: absolute;
        width: 0.9677rem;
        top: 4.65rem;
        left: 5.2rem;
        z-index: 1;
    }

    .slide-first-middle .animate-1 {
        position: absolute;
        width: 0.16rem;
        height: 0px;
        left: 1.56rem;
        bottom: 0; 
    }

    .slide-first-middle .animate-2 {
        position: absolute;
        width: .4rem;
        top: 1rem;
        left: 1.43rem;
        z-index: 21;
    }

    .slide-first-middle .animate-3 {
        position: absolute;
        top: .3rem;
        left: 1rem;
        width: 1.33rem;
    }

    .slide-first-middle .animate-4 {
        position: absolute;
        top: 3.7rem;
        left: 2.6rem;
        width: 0.5rem;
        z-index: 21;
    }

    .slide-first-middle .animate-5 {
        position: absolute;
        bottom: 0;
        width: 0.54rem;
        height: 0px; 
        left: 3.83rem;
    }

    .slide-first-middle .animate-6 {
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

    .slide-first-middle .apple-group .animate-7 {
        position: absolute;
        z-index: 1;
        left: 5.35rem;
        top: 4.5rem;
        width: 0.6rem;
    }

    .slide-first-middle .animate-8 {
        position: absolute;
        bottom: 0;
        width: 1.44rem;
        height: 0px;
        left: 7.8rem;
        top: 1rem;
    }

    .slide-second {
        background: url(//www.erplus.co/mp/h5/img/task-system.png) no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 14.5rem;
        width: 100%;
        margin-top: 96px;
    }

    .slide-third {
        background: url(//www.erplus.co/mp/h5/img/crm-system.png) no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 14.5rem;
        width: 100%;
        margin-top: 96px;
    }

    .slide-fourth {
        background: url(//www.erplus.co/mp/h5/img/achievements-system.png) no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 14.5rem;
        width: 100%;
        margin-top: 96px;
    }

    .slide-fifth {
        background: url(//www.erplus.co/mp/h5/img/approval-system.png) no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 14.5rem;
        width: 100%;
        margin-top: 96px;
    }

    .slide-sixth {
        background: url(//www.erplus.co/mp/h5/img/attendance-system.png) no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 14.5rem;
        width: 100%;
        margin-top: 96px;
    }
</style>