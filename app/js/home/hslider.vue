<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider">
            <!-- <p>手机上最好用的</p> -->
        </Slider>
        <!-- <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section> -->
    </article>
</template>

<script>
    import Slider from "../core/slider.vue"
    export default {
        components: {
            Slider,
        },
        data() {
            return {
                items: [{
                    href: "home",
                    // src: "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320",
                    src: "//www.erplus.co/mp/h5/img/animate/make-logo.png",
                }, {
                    href: "home",
                    src: "//www.erplus.co/mp/h5/img/task-system.png",
                }, {
                    href: "home",
                    src: "//www.erplus.co/mp/h5/img/crm-system.png",
                }, {
                    href: "home",
                    src: "//www.erplus.co/mp/h5/img/achievements-system.png",
                }, {
                    href: "home",
                    src: "//www.erplus.co/mp/h5/img/approval-system.png",
                }, {
                    href: "home",
                    src: "//www.erplus.co/mp/h5/img/attendance-system.png",
                }],
            }
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider {
        margin-top: 97px;
        img {
            width: 100%;
        }
    }

    //   .list{
    //     @include list(row);
    //     background: #fff;
    //     padding-top: 40px;
    //     padding-bottom: 20px;
    //     justify-content: space-around;
    //     a{
    //       text-decoration: none;
    //     }
    //     .item{
    //       text-align: center;
    //       img{
    //         display: inline-block;
    //         width: 90px;
    //         height: 90px;
    //       }
    //       h4{
    //         font-size: 26px;
    //         margin-top: 12px;
    //         color: #666;
    //       }
    //     }
    //   }
</style>