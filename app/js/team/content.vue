<template>
    <div class="content">
        <div class="top-photo">
        </div>
        <ul class="person-intro">
            <!-- <li v-for="person in Persons" v-bind:key="person.name">
                <div class="person-intro-padding-box">
                    <div class="short-intro">
                        <img class="person-photo" :src="person.photo" alt="">
                        <div class="person-name font-14">{{person.name}}</div>
                        <div class="person-position font-13">{{person.position}}</div>
                    </div>
                    <p lang="zh" class="detail-intro font-12" style="text-align: justify;">{{person.intro}}</p>
                </div>
            </li> -->
            <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-kent.png" alt="">
                                <div class="person-name font-14">吴今平</div>
                                <div class="person-position font-13">创始人&amp;CEO</div>
                            </div>
                            <p lang="zh" class="detail-intro t-font-12" style="text-align: justify;">英国华威大学（The University of Warwick）工商管理硕士、计算机工程学士。曾先后于路虎集团英国本部、富士康科技集团、怡亚通供应链股份有限公司任工程师、课长及运营总监，拥有丰富的企业管理经验，对生产、贸易、供应链及金融等各行业有深刻认识。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro" style="padding-top:.2rem">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-wangguangren.png" alt="">
                                <div class="person-name font-14">王广仁</div>
                                <div class="person-position font-13">首席技术官</div>
                            </div>
                            <p class="detail-intro t-font-12" style="padding-top: 0.2rem; text-align: justify;">西北工业大学软件应用技术硕士、计算机科学学士。曾任职于腾讯及招商财富，负责多项互联网产品的架构设计与开发，对高并发系统和大数据分析有深入研究，在互联网领域拥有丰富的产品研发和管理经验。于顶级学术期刊《软件学报》发表过多篇论文并获得三项技术类实用新型专利。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-ravi.png" alt="">
                                <div class="person-name font-14">Ravish Azad</div>
                                <div class="person-position font-13">数据科学家</div>
                            </div>
                            <p class="detail-intro t-font-12" style="text-align: justify;">印度理工学院（Indian Institute of Technology）工业设计硕士、计算机工程学士。曾先后任职于渣打银行新加坡分行、阿尔卡特，并曾是硅谷App Annie（知名APP数据分析平台）的创始成员，对数据挖掘和数据分析有独到见解。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-zhangchi.png" alt="">
                                <div class="person-name font-14">张弛</div>
                                <div class="person-position font-13">销售副总裁</div>
                            </div>
                            <p class="detail-intro t-font-12" style="text-align: justify;">英国伯明翰大学（The University of Birmingham）项目管理硕士、电子信息工程学士。曾任职于中国外运集团超过10年，负责营销及业务相关工作，主导或参与开发的客户包括英国劳氏船级社、地中海航运、博泽集团、Samsung、SUMEC、富士康、华为、The Hong Kong Jockey Club等国内外知名企业。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-henry.png" alt="">
                                <div class="person-name font-14">薛同辰</div>
                                <div class="person-position font-13">合伙人</div>
                            </div>
                            <p class="detail-intro t-font-12" style="text-align: justify;">美国俄亥俄州立大学（The Ohio State University）计算机工程与会计学学士。曾任职于德勤咨询（Deloitte）美国纽约总部，在企业信息化战略、财务管理以及风险管理领域拥有丰富的专业经验。曾服务过的客户包括摩根斯坦利、法国巴黎银行、史密斯菲尔德等欧美大型投资银行、食品集团。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class="short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-david.png" alt="">
                                <div class="person-name font-14">管琛</div>
                                <div class="person-position font-13">管理咨询总监</div>
                            </div>
                            <p class="detail-intro t-font-12" style="text-align: justify;">英国伦敦政治经济学院（The London School of Economics and Political Science）管理学硕士，特许金融分析师（CFA）。曾任职于中国华润集团战略管理部及美国合益管理咨询公司（Hay Group），在企业内部管理分析等方面具有丰富的专业经验。曾服务过的客户包括中国联通、华为、奥迪等国内外知名企业。</p>
                        </div>
                    </li>
                    <li>
                        <div class="person-intro-padding-box">
                            <div class=" short-intro">
                                <img class="person-photo" src="//www.erplus.co/mp/h5/img/team/photo-felix.png" alt="">
                                <div class="person-name font-14">曹洋</div>
                                <div class="person-position font-13">产品运营总监</div>
                            </div>
                            <p class=" detail-intro t-font-12" style="text-align: justify;">英国利兹大学（University of Leeds）广告与市场营销硕士、厦门大学市场营销学士。曾参与奥迪（Audi）和曼彻斯特联队（Manchester United）的产品营销方案策划。熟悉互联网产品设计与各项数字媒体技术，擅于准确把握用户需求。</p>
                        </div>
                    </li>

        </ul>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                Persons: [{
                        photo: '//www.erplus.co/mp/h5/img/team/photo-kent.png',
                        name: '吴今平',
                        position: '创始人&amp;CEO',
                        intro: '英国华威大学（The University of Warwick）工商管理硕士、计算机工程学士。曾先后于路虎集团英国本部、富士康科技集团、怡亚通供应链股份有限公司任工程师、课长及运营总监，拥有丰富的企业管理经验，对生产、贸易、供应链及金融等各行业有深刻认识。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-wangguangren.png',
                        name: '王广仁',
                        position: '首席技术官',
                        intro: '西北工业大学软件应用技术硕士、计算机科学学士。曾任职于腾讯及招商财富，负责多项互联网产品的架构设计与开发，对高并发系统和大数据分析有深入研究，在互联网领域拥有丰富的产品研发和管理经验。于顶级学术期刊《软件学报》发表过多篇论文并获得三项技术类实用新型专利。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-ravi.png',
                        name: 'Ravish Azad',
                        position: '数据科学家',
                        intro: '印度理工学院（Indian Institute of Technology）工业设计硕士、计算机工程学士。曾先后任职于渣打银行新加坡分行、阿尔卡特，并曾是硅谷App Annie（知名APP数据分析平台）的创始成员，对数据挖掘和数据分析有独到见解。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-zhangchi.png',
                        name: '张弛',
                        position: '销售副总裁',
                        intro: '英国伯明翰大学（The University of Birmingham）项目管理硕士、电子信息工程学士。曾任职于中国外运集团超过10年，负责营销及业务相关工作，主导或参与开发的客户包括英国劳氏船级社、地中海航运、博泽集团、Samsung、SUMEC、富士康、华为、The Hong Kong Jockey Club等国内外知名企业。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-henry.png',
                        name: '薛同辰',
                        position: '合伙人',
                        intro: '美国俄亥俄州立大学（The Ohio State University）计算机工程与会计学学士。曾任职于德勤咨询（Deloitte）美国纽约总部，在企业信息化战略、财务管理以及风险管理领域拥有丰富的专业经验。曾服务过的客户包括摩根斯坦利、法国巴黎银行、史密斯菲尔德等欧美大型投资银行、食品集团。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-david.png',
                        name: '管琛',
                        position: '管理咨询总监',
                        intro: '英国利兹大学（University of Leeds）广告与市场营销硕士、厦门大学市场营销学士。曾参与奥迪（Audi）和曼彻斯特联队（Manchester United）的产品营销方案策划。熟悉互联网产品设计与各项数字媒体技术，擅于准确把握用户需求。',
                    },
                    {
                        photo: '//www.erplus.co/mp/h5/img/team/photo-felix.png',
                        name: '曹洋',
                        position: '产品运营总监',
                        intro: '英国利兹大学（University of Leeds）广告与市场营销硕士、厦门大学市场营销学士。曾参与奥迪（Audi）和曼彻斯特联队（Manchester United）的产品营销方案策划。熟悉互联网产品设计与各项数字媒体技术，擅于准确把握用户需求。',
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../css/comment.css";

    .content {
        width: 100%;
    } 

    .top-photo {
        background: url("//www.erplus.co/mp/h5/img/team/background-photo.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 6rem;
        margin-top: 1.5rem;
    }

    ul.person-intro>li {
        padding: .8rem .6933333rem .8rem .4rem;
    }

    .person-intro-padding-box {
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start; 
    }

    div.short-intro {
        color: #556080;
        width: 2.186666666rem;
        text-align: center;
        height: 100%;
        margin-right: .2rem;
    }

    .person-name {
        margin: .08rem 0;
    }

    .person-photo {
        width: 1.6rem;
        height: 1.6rem;
    }

    p.detail-intro {
        display: inline-block;
        width: 6.4rem;
        line-height: 1.5;
    }

    ul.person-intro li:nth-child(2n+1) {
        background-color: #fff;
    }

    ul.person-intro li:nth-child(2n) {
        background-color: #f4f4f4;
    }

    ul.person-intro li:nth-child(2n+1) .fake-blank {
        color: #fff;
    }

    ul.person-intro li:nth-child(2n) .fake-blank {
        color: #f4f4f4;
    }
</style>