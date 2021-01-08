<template>
    <a-locale-provider :locale="locale">
    <div id="app">
        <router-view></router-view>
    </div>
    </a-locale-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
    export default {
        name: 'app',
        data () {
            return {
                locale: zhCN
            }
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width:100%;
        overflow-x: hidden;
        -webkit-overflow-x: hidden;
        color: #444;

    }
    .ui.label {
        border-color: #97dffd;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        background-color: #97dffd;
        margin: 5px 0 15px 2px;
        font-size: 14px;
        position: relative;
        left: -32px;
        border-radius: 0 4px 4px 0;
        padding: 7px 11.2px 7px 32px;
        display: inline-block;
        color: #fff;
    }
    .ui.label::after {
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        border-top: 0 solid transparent;
        border-right-width: 1em;
        border-right-color: #48456D;
        border-right-style: solid;
        border-bottom: 1em solid transparent;
        border-left: 0 solid transparent;
        width: 0;
        height: 0;
    }
    .ui.label a {
        color: #fff;
        line-height: 100%;
    }


  .s-round-date{
          position: absolute;
          top:-20px;
          left:-35px;
          height:60px;
          width:70px;
          padding-top:10px;
          border-radius: 100px;
          color:#fff;
          background:#97dffd;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
      }
    .s-round-date span{
        text-align: center;
        display: block;
    }
    .s-round-date .day{
        font-size: 30px;
        font-weight: 700;
    }


    .s-item .article-coontent{
        font-size: 15px;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
      .s-item .article-content p{
          margin:10px 0;
          line-height:24px;
      }
    .s-item .viewdetail{
        margin:10px 0 ;
        line-height: 24px;
        text-align: center;
    }
    .s-item .viewdetail a{
        color:#fff;
        font-size: 12px;
        padding:5px 10px;
        border-radius: 5px;
    }

    .viewmore{
        text-align: center;
        width:100%;
    }
    .viewmore a{
        /*background:  #97dffd;*/
        /*padding:6px 0;*/
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
        color:#fff;
        height:30px;
        line-height: 30px;
        display: block;
    }
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
        -webkit-transition: -webkit-transform 0.2s linear;
        transition: -webkit-transform 0.2s linear;
        transition: transform 0.2s linear;
        transition: transform 0.2s linear, -webkit-transform 0.2s linear;
        -webkit-transition: transform 0.2s linear;
    }
    .shareclassTwo li a:hover{
        transform: translate(0,-3px);
        -webkit-transform: translate(0,-3px);
    }
    .shareclassTwo li a.active{
        background: #fff;
        color:#64609E;}
    .detailBox .article-content {
        font-size: 15px;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
        overflow-x: hidden;
    }
    .detailBox .article-content p {
        margin: 10px 0;
        line-height: 24px;
        word-wrap: break-word;
        word-break: break-all;
        overflow-x: hidden;
    }
    .detailBox .article-content pre {
        word-wrap: break-word;
        word-break: break-all;
        overflow-x: hidden;
    }
    .detailBox .article-content img {
        max-width: 100%!important;
        height: auto!important;
        overflow-x: hidden;
    }
    .detailBox .article-content a {
        color: #df2050!important;
    }
    .detailBox .article-content a:hover {
        text-decoration: underline;
        color: #f00!important;
    }
    .detailBox .article-content i {
        font-style: italic;
    }
    .detailBox .article-content strong {
        font-weight: bold;
    }
    .detailBox .article-content ul {
        list-style-type: disc!important;
        list-style: disc!important;
        padding-left: 40px!important;
    }
    .detailBox .article-content ul li {
        list-style-type: disc!important;
        list-style: disc!important;
    }
    .detailBox .article-content h1,
    .detailBox .article-content h2,
    .detailBox .article-content h3 {
        font-size: 200%;
        font-weight: bold;
    }
    .detailBox .article-content h4,
    .detailBox .article-content h5,
    .detailBox .article-content h6 {
        font-size: 150%;
        font-weight: bold;
    }
    .detailBox .viewdetail {
        margin: 10px 0 ;
        line-height: 24px;
        text-align: center;
    }
    .tcommonBox {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
        position: relative;
        background: #fff;
        padding: 45px;
        border-radius: 5px;
        margin-bottom: 40px;
        font-size: 15px;
    }
    .tcommonBox header {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    .tcommonBox header h1 {
        margin: 10px 0;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
        line-height: 30px;
    }
    .tcommonBox header h2 {
        margin: 10px 0;
        line-height: 24px;
        text-align: center;
        color: #555;
        font-size: 14px;
    }
    .tcommonBox section p {
        line-height: 24px;
        margin: 10px 0;
    }
    .tcommonBox header h2 .el-rate,
    .rateBox {
        display: inline-block;
    }
    .tcommonBox header h2 .el-rate i {
        font-size: 16px;
    }
    .i-name{
        font-size: 14px;
        margin:5px 8px 7px 0;
        color:#444;
        font-weight: bold;
        display: inline-block;
    }
</style>
