<template lang="html">
    <div id="download-mp">
        <p class="download-title font-17">告别繁琐低效的传统办公时代</p>
        <p class="download-title font-17">从
            <span class="mp-font font-17">大管加</span>开始</p>
        <div class="download-buttons download-link">
            <a href="//a.app.qq.com/o/simple.jsp?pkgname=com.plusmoney.managerplus" class="base-btn positive-btn font-13">
                <img src="//www.erplus.co/mp/h5/img/img-mp-h5index-iOSlogo.png" alt="">
                <span>下载iOS版</span>
            </a>
            <a href="//a.app.qq.com/o/simple.jsp?pkgname=com.plusmoney.managerplus" class="base-btn positive-btn font-13">
                <img src="//www.erplus.co/mp/h5/img/img-mp-h5index-androidlogo.png" alt="">
                <span>下载安卓版</span>
            </a>
        </div>
        <p class="download-desc download-link font-9">iOS，Android，PC端现已全面上线</p>
        <div class="download-img">
            <img src="//www.erplus.co/mp/h5/img/img-mp-h5index-cover2.png" alt="">
        </div>
    </div>


</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    @import "../../css/comment.css";

    #download-mp {
        height: 13rem;
        background: #F4F4F4;
        overflow: hidden;
    }

    #download-mp .download-title {
        text-align: center;
        color: #000;
    }

    #download-mp .download-title:first-child {
        padding-top: 0.56rem;
    }

    #download-mp .mp-font {
        color: #4A90E2;
    }

    #download-mp .download-buttons {
        height: 0.77rem;
        padding: 0 2.0rem;
        margin-top: 0.466667rem;
        width: 100%;
        text-align: center;
    }

    #download-mp a.positive-btn {
        background-color: #4a90e2;
        color: #fff;
    }

    #download-mp a.base-btn {
        display: inline-block;
        border-radius: 0.106667rem;
        text-align: center;
    }

    #download-mp .download-buttons .base-btn:first-child {
        float: left;
    }

    .download-buttons .base-btn:last-child {
        float: right;
    }

    #download-mp .download-buttons .base-btn {
        width: 2.64rem;
        height: 0.77rem;
        line-height: 0.77rem;
        padding-left: .08rem;
    }

    #download-mp .download-buttons .base-btn img {
        width: 0.35rem;
        vertical-align: -3px;
    }

    [data-dpr="2"] #download-mp .download-buttons .base-btn img {
        vertical-align: -4px;
    }

    [data-dpr="3"] #download-mp .download-buttons .base-btn img {
        vertical-align: -5px;
    }

    #download-mp .download-desc {
        padding: 0.59rem 0 0.75rem;
        color: #a8a8a8;
        clear: both;
        text-align: center;
    }

    #download-mp .download-img {
        text-align: center;
    }

    #download-mp .download-img img {
        width: 6.67rem;
    }
</style>