<template lang="html">
    <section class="section-fifth">
        <article>
            <h1 class="font-20">预约演示</h1>
            <p class="font-11">大管加还能为您的企业带来哪些改变？请留下联系方式，我们将免费为您上门演示。</p>
            <form class="section-fifth-form">
                <div class="form-group name-box">
                    <img src="//www.erplus.co//mp/h5/img/user.png">
                    <input name="name" type="text" class="font-12 form-control" id="inputName" placeholder="姓名">
                </div>
                <div class="form-group phone-box">
                    <img src="//www.erplus.co//mp/h5/img/phone.png">
                    <input name="phone" type="text" class="font-12 form-control" id="inputPhone" placeholder="手机" maxlength="13">
                </div>
                <div class="form-group textarea-box">
                    <textarea name="describe" class="c-font-13 form-control" rows="5" placeholder="请输入公司的相关信息，如行业、规模和公司地址"></textarea>
                </div>
                <div class="submit-button">
                    <div>
                        <input class="btn btn-info font-15" type="submit" value="提交">
                    </div>
                </div>
            </form>
        </article>
    </section>

</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    @import "../../css/comment.css";

    .section-fifth {
        margin-left: 0;
        margin-right: 0;
        padding: 0;
        width: 100%;
        background-color: #F6F9FA;

        article {
            margin-left: 0.6rem;
            margin-right: 0.8rem;
            padding-top: 1rem;

            h1 {
                color: #212121;
            }

            p {
                color: #777777;
                margin-top: 0.2667rem;
            }

            .section-fifth-form {
                position: relative;

                input[type="text"],
                textarea {
                    border-radius: 5px;
                    border: 2px solid #ccc;
                }

                .form-control {
                    padding: 8px 15px;
                }

                .name-box {
                    position: relative;

                    img {
                        position: absolute;
                        top: .65rem;
                        left: 0.1333rem;
                        width: 0.5333rem;
                    }

                    input {
                        text-indent: 0.6333rem;
                        width: 8.4533rem;
                        height: 0.8267rem;
                    }
                }

                .phone-box {
                    position: relative;

                    img {
                        position: absolute;
                        top: .65rem;
                        left: 0.1333rem;
                        width: 0.5333rem;
                    }

                    input {
                        text-indent: 0.6333rem;
                        width: 8.4533rem;
                        height: 0.8267rem;
                    }
                }

                textarea {
                    margin-top: 0.5333rem;
                    resize: none;
                    width: 8.4533rem;
                    height: 2.5rem;
                }

                .submit-button {
                    display: flex;
                    justify-content: center;
                    padding-bottom: 1.1467rem;

                    input {
                        width: 5rem;
                        height: 1.0667rem;
                        background-color: #4A90E2;
                        border-radius: 3px;
                    }
                }

            }
        }
    }
</style>