<template lang="html">
    <div class="headerContainer">
        <header>
            <div class="topBar" :style="{height:height + 'rem', marginBottom:bottom + 'rem'}">
                <div class="menuTopBar">
                    <a href="">
                        <img class="titleLogo" src="//www.erplus.co/mp/h5/img/erplus.png" alt="">
                    </a>
                    <a href="javascript:;" @click="showMenu">
                        <img v-if="isOpen" class="menu-btn close" src="//www.erplus.co/mp/h5/img/close.png" alt="">
                        <img v-else class="menu-btn option" src="//www.erplus.co/mp/h5/img/group.png" alt="">
                    </a>
                </div>
                <ul class="nav">
                    <li>
                        <a>主页</a>
                    </li>
                    <li>
                        <a>关于我们</a>
                    </li>
                    <li>
                        <a>管理团队</a>
                    </li>
                    <li>
                        <a>企业文化</a>
                    </li>
                    <li>
                        <span>下载大管加</span>
                        <span class="download-btn"></span>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false, //菜单导航默认属于折叠状态，为 true 时，表示菜单导航打开
            }
        },
        methods: {
            showMenu() {
                this.isOpen = !this.isOpen;
                
                if (this.isOpen) {
                    //当菜单导航属于打状态时，改变 topBar 的高度
                    this.height = 8.5;
                    this.bottom = 8.5;
                } else {
                    //否则为原来高度
                    this.height = 1.5;
                    this.bottom = -1.5;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topBar {
        position: fixed;
        overflow: hidden;
        z-index: 999;
        top: -2px;
        left: 0px;
        right: 0px;
        height: 96px;
        padding: 25.6px 39.68px;
        background-color: white;        
        margin-bottom: -120px;
        border-bottom: 1px solid #777;
        transition: height 0.5s, width 0.5s, transform 0.5s ease-out;

        .menuTopBar {
            position: relative;

            a,
            img {
                display: block;
            }

            .titleLogo {
                width: 170px;
                margin-top: 1px;
            }

            img.menu-btn {
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto 0;
                transition: height 0.5s, width 0.5s, transform 0.5s ease-out;
                opacity: 0.9;
            }

            .option {
                width: 38.4px;
                height: 30.72px;
                transform: rotateZ(-180deg);
            }

            .close {
                width: 38.4px;
                height: 38.4px;
                transform: rotateZ(0deg);
            }
        }

        ul.nav {
            margin-top: 34px;
            display: block;

            li {
                border-bottom: 1px solid #979797;
                color: #efefef;
                line-height: 82px;
                height: 82px;
                font-size: 20px;

                a {
                    display: block;
                    color: #000000;
                    width: 100%;
                }

                .download-btn {
                    display:inline-block;
                    width:30.72px;
                    height: 30.72px;
                    position: absolute;
                    right:0;
                    top:0;
                    bottom:0;
                    margin:auto 0;
                    background:url(//www.erplus.co/mp/h5/img/download.png);
                    background-size:cover;
                }
            }
            li:last-child {
                position: relative;
                border-bottom: 0;
                color: red;

                span {
                    color: #4A90E2;
                    font-weight: bold;
                }
            }
        }
    }

    [data-dpr="2"] ul.nav li {
        font-size: 34px;
    }

    [data-dpr="3"] ul.nav li {
        font-size: 34px;
    } 
</style>