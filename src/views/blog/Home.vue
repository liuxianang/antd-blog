<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <a-row  :gutter="30">
                <a-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                   <wbc-sharelist></wbc-sharelist>
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
import temSharelist from '@/components/blog/temSharelist'
import temRightlist from '@/components/blog/temRightlist'
    export default {
        name:'Home',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
           'wbc-nav':header,
            'wbc-sharelist':temSharelist,
            'wbc-rightlist':temRightlist,
            'wbc-footer':footer
        },
        created() { //生命周期函数

        }
    }
</script>

<style>

</style>
