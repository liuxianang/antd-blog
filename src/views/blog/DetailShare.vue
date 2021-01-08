<!-- 文章详情 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div  class="container" id="detail">
            <a-row  :gutter="30">
                <a-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <wbc-detail></wbc-detail>
                    <wbc-message></wbc-message>
                </a-col>
                <a-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </a-col>
            </a-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '@/components/blog/header'
import footer from '@/components/blog/footer'
import temRightlist from '@/components/blog/temRightlist'
import temDetail from '@/components/blog/temDetail'
import temMessage from '@/components/blog/temMessage'
    export default {
        name:'DetailShare',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-detail':temDetail,
            'wbc-message':temMessage,
            'wbc-rightlist':temRightlist,
            'wbc-footer':footer
        },
        created() { //生命周期函数

        },
        mounted(){
            var anchor = document.querySelector("#detail");
            // console.log(anchor,anchor.offsetTop);
            var top = anchor.offsetTop-60;
            document.body.scrollTop = top;
             // Firefox
             document.documentElement.scrollTop = top;
             // Safari
             window.pageYOffset = top;
        }
    }
</script>

<style>

</style>
