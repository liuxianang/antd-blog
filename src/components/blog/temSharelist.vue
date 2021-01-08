<!-- 文章列表 -->
<template>
    <div>
    <a-card>
        <div v-if="this.$route.name=='Share'&&!this.$route.query.keywords" class="shareTitle">
            <div class="ui label" >
                <a  :href="'#/Share?classId='+classId">{{className}}</a>
            </div>
            <ul v-if="sonclassList" class="shareclassTwo" >
                <li :v-for="(citem,index) in sonclassList" :index="index">
                    <a :href="'#/Share?classId='+classId+'&classtwoId='+citem.class_id" :class="citem.class_id==classtwoId?'active':''">{{citem.cate_name}}</a>
                </li>
            </ul>
        </div>
        <a-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articleList" :key="'article'+index">
            <span class="s-round-date">
                <span class="month" v-html="showInitDate(item.gtmCreate,'month')+'月'"></span>
                <span class="day" v-html="showInitDate(item.gtmCreate,'date')"></span>
            </span>
            <header>
                <h1>
                    <a :href="'/index/DetailShare?aid='+item.cid" >
                        {{item.title}}
                    </a>
                </h1>
                <h2>
                    <a-icon type="user" />发表于
                    <a-icon type="clock-circle" /><span v-html="showInitDate(item.gtmCreate,'all')">{{showInitDate(item.gtmCreate,'all')}}</span> •
                    <a-icon type="eye" />{{item.browse_count}} 次围观 •
                    <a-icon type="wechat" />活捉 {{item.comment_count}} 条 •
                    <span class="rateBox">
                        <a-icon type="heart" />{{item.like_count?item.like_count:0}}点赞 •
                        <a-icon type="star" />{{item.collect_count?item.collect_count:0}}收藏
                    </span>
                </h2>
                <div class="ui label">
                    <a :href="'#/Share?classId='+item.class_id">{{item.type}}</a>
                </div>
            </header>
            <div class="article-content">
                <p style="text-indent:2em;">
                    {{item.slug}}
                </p>
                <p  style="max-height:300px;overflow:hidden;text-align:center;">
                    <img :src="item.image" alt="" class="maxW">
                </p>
            </div>
            <div class="viewdetail">
                <a class="tcolors-bg" :href="'/index/DetailShare?aid='+item.cid" >
                    阅读全文>>
                </a>
            </div>
        </a-col>
        <a-col class="viewmore">
            <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
            <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
        </a-col>
    </a-card>
    </div>
</template>

<script>
    import API from '../../api/api_blog'
    //初始化时间
    const initDate = (oldDate,full) => {
        var odate = new Date(oldDate);
        var year =  odate.getFullYear();
        var month = odate.getMonth()<9? '0' + (odate.getMonth()+1) : odate.getMonth()+1;
        var date = odate.getDate()<10? '0'+odate.getDate() : odate.getDate();
        if(full=='all'){
            var t = oldDate.split(" ")[0];
            // console.log(oldDate,t.split('-')[0],t.split('-')[1],t.split('-')[2]);
            return t.split('-')[0]+'年'+t.split('-')[1]+'月'+t.split('-')[2]+'日';
        }else if(full=='year'){
            return year
        }else if(full== 'month'){
            return odate.getMonth()+1
        }else if(full == 'date'){
            return date
        }else if(full== 'newDate'){
            return year+'年'+month+'月'+date+'日';
        }
    }
    export default {
        name:'Share',
        data() { //选项 / 数据
            return {
                artId:0,
                classId:0,
                sendId:'',
                className:'',
                sonclassList:{},//二级分类
                classtwoId:5,
                keywords:'',
                hasMore:true,
                level:1,
                shareClass:[
                    {classId:1,name:'技术分享',detshare:[
                        {classId:5,name:'移动端H5',pid:1},
                        {classId:6,name:'pc端web',pid:1},
                        {classId:7,name:'小程序',pid:1},
                        {classId:8,name:'php',pid:1},
                        {classId:9,name:'nodejs',pid:1},
                        {classId:10,name:'软件',pid:1},
                        {classId:11,name:'其他',pid:1}
                    ]},
                    {classId:2,name:'闲言碎语'},
                    {classId:3,name:'事件簿'},
                    {classId:4,name:'创作集'}
                ],
                queryClass:1,
                articleList:[]
            }
        },

        methods: { //事件处理器
            showInitDate: function(oldDate,full){
                // console.log(oldDate,full);
                return initDate(oldDate,full)
            },
            showSearchShowList:function(initpage){//展示数据
                var that = this;
                that.classId = (that.$route.query.classId==undefined?0:parseInt(that.$route.query.classId));//获取传参的classId
                that.keywords = that.$store.state.keywords;//获取传参的keywords
                that.classtwoId = that.$route.query.classtwoId==undefined?'':parseInt(that.$route.query.classtwoId);//获取传参的classtwoId
                that.sendId = that.classtwoId?that.classtwoId:that.classId;
                that.level = that.keywords ? 0 : that.classtwoId?0:1;
                // console.log(that.classId);

                //判断当前显示的分类名称 以及子分类
                for(var i=0;i<that.shareClass.length;i++){
                    if(that.classId==that.shareClass[i].class_id){
                        that.className = that.shareClass[i].cate_name;
                        if(that.shareClass[i].ChildsSon&&that.shareClass[i].ChildsSon.length>0){
                            that.sonclassList = that.shareClass[i].ChildsSon;
                        }else{
                            that.sonclassList = '';
                        }
                    }
                }
                //初始化 文章id为0开始
                that.artId = initpage ? 0 : that.artId;
            },
            addMoreFun:function(){//查看更多
                this.showSearchShowList(false);
            },
        },
        components: { //定义组件

        },

        created() { //生命周期函数
             console.log(this.$route);
            API.getblogall().then(res => {
                console.log(res);
                this.articleList=res.data
            })

        }
    }
</script>

<style>
/*分享标题*/
.shareTitle{
    margin-bottom: 40px;
    position: relative;
    border-radius: 5px;
    background: #fff;
    padding:15px;
}
.shareclassTwo{
    width:100%;
}
.shareclassTwo li{
    display: inline-block;
}
.shareclassTwo li a{
    display: inline-block;
    padding:3px 7px;
    margin:5px 10px;
    color:#fff;
    border-radius: 4px;
    background: #64609E;
    border: 1px solid #64609E;
    transition: transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
}
.shareclassTwo li a:hover{
    transform: translate(0,-3px);
    -webkit-transform: translate(0,-3px);
}
.shareclassTwo li a.active{
    background: #fff;
    color:#64609E;

}
/*文章列表*/
    .sharelistBox{
        transition: all 0.5s ease-out;
        font-size: 15px;
    }
.sharelistBox{
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    font-size: 15px;
}
.tcolors-bg {
    background: #97dffd;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.tcolord-bg {
    background: #48456D;
}
.tcolors-bg:hover {
    background: #48456D;
}
h1, h2, h3, h4, h5, h6{
    font-size:100%;
    font-weight:normal;
    text-align:center;
    background: #fff;
}
    /*.sharelistBox .viewmore a:hover,.s-item .viewdetail a:hover{
        background: #48456C;
    }*/
</style>
