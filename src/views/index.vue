<template>
  <a-layout id="main" style="background-color: #f1f1f1">
    <a-layout-header  style="background-color: #ffffff">
      <a-menu style="background-color: #ffffff"
              :default-active="activeIndex"
              mode="horizontal"
              active-text-color="#409EFF">
        <a-menu-item index="1"> <router-link to="/index">首页</router-link></a-menu-item>
        <a-menu-item index="2" style="float: right"> <a href="http://114.115.178.160:8100/">登录后台 </a></a-menu-item>
        <a-menu-item index="5" style="float: right">  <a href="http://114.115.178.160:8200/">在线考试 </a></a-menu-item>
        <a-menu-item index="4" style="float: right">  <a href="http://114.115.178.160:8400/">在线商城 </a></a-menu-item>
        <a-menu-item index="3" style="float: right">  <a href="http://114.115.178.160:8300/">我的博客 </a></a-menu-item>


      </a-menu>

    </a-layout-header>
    <a-layout-content id="content" >
      <a-carousel indicator-position="outside" style="margin-top: 30px;text-align: center;margin-bottom: 30px;">
        <div class="ant-carousel-item1">
          <a-row>
            <a-col :span="10" :offset="7">
              <div>
                <h1> <span style="color:#ffffff ">BootDo</span></h1>
                <h2>
                 <span style="color:#ffffff ">基于springboot的开源框架<br>单体项目急速开发利器</span>
                </h2>
                <a-button shape="round"><a href="https://gitee.com/lcg0124/bootdo/wikis/Home">起步</a></a-button>
                <a-button shape="round"><a href="https://gitee.com/lcg0124/bootdo">源码</a></a-button>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="ant-carousel-item2">
          <a-row>
            <a-col :span="10" :offset="7">
              <div>
                <h1> <span style="color:#ffffff ">CloudDo</span></h1>
                <h2>
                  <span style="color:#ffffff ">基于springcloud的开源框架<br>微服务入门</span>
                </h2>
                <a-button shape="round">起步</a-button>
                <a-button shape="round">源码</a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-carousel>
      <a-row :gutter="20" style="margin-top: 30px;">
        <a-timeline>
          <a-timeline-item>
          <div>
            <a-row :gutter="20" style="margin-top: 30px;" >
              <a-card
                      style=""
                      title="项目主题"
                      :body-style="bodystyle">
        <a-col :span="6">
          <a-card class="ant-pro-pages-account-projects-card" hoverable>
          <img  slot="cover" src="../assets/images/index-tu1.png" alt="Angular" />

          <div class="cardItemContent">
            <h3>大道至简</h3>
            <span>减少过度封装，展现技术本质</span>
          </div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card shadow="hover" style="text-align: center">
            <img  slot="cover" src="../assets/images/index-tu2.png" alt="Angular" />
            <div class="cardItemContent">
            <h3>开源精神</h3>
            <span>做简洁高效，易于上手的项目</span>
            </div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card shadow="never" style="text-align: center">
            <img  slot="cover" src="../assets/images/index-tu3.png" alt="Angular" />
            <div class="cardItemContent">
            <h3>不懈追求</h3>
            <span>技术服务于人，服务于生活</span>
            </div>
          </a-card>
        </a-col>
              </a-card>
            </a-row>
          </div>
          </a-timeline-item>
          <a-timeline-item>

              <a-row :gutter="20" style="margin-top: 30px;"  >
                <a-card
                        style=""
                        title="进行中的项目"
                        :body-style="{ padding:100}">
                  <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">

                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta>
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.cover"/>
                      <a @click="exam(item.id)">{{ item.name }}</a>
                    </div>
                    <div slot="description" class="card-description">
                      {{ item.description }}
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a href="/#/">作者： <a-tag color="green">{{item.author}}</a-tag></a>
                    <span class="datetime">{{item.created}}</span>
                  </div>
                </a-card>
              </a-card-grid>
                  </div>
                </a-card>

              </a-row>
              <a-row :gutter="20" style="margin-top: 30px;">
              <a-card title="动态" :bordered="false">
                <a-list>
                  <a-list-item :key="index" v-for="(item, index) in activities">
                    <a-list-item-meta>
                      <a-avatar slot="avatar" :src="item.user.avatar" />
                      <div slot="title">
                        <span>{{ item.user.nickname }}</span>&nbsp;
                        在&nbsp;<a href="#">{{ item.project.name }}</a>&nbsp;
                        <span>{{ item.project.action }}</span>&nbsp;
                        <a href="#">{{ item.project.event }}</a>
                      </div>
                      <div slot="description">{{ item.time }}</div>
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </a-card>
              </a-row>
          </a-timeline-item>
        </a-timeline>
      </a-row>
    </a-layout-content>
    <a-layout-footer ><div>
         <span><a type="primary">Copyright © bootdo.com 2019</a>
        <a-divider></a-divider>
          <a type="success">鲁ICP备17042918号</a></span>
      </div>
    </a-layout-footer>
  </a-layout>

</template>

<script>

  export default {
    name: "index",
    data() {
      return {
        activeIndex:"1",
          bodystyle:{"margin-left":"130px"},
          projects:[
              {
                  "id":3,
                  "name":"博客项目",
                  "description":"测试试卷，我测试使用的试卷11111",
                  "cover":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
                  "author":"张球风",
                  "created":"2019-07-17",
                  "startTime":"2019-07-17",
                  "endTime":"2019-07-17",
                  "subjectName":"测试",
                  "publish":"2",
                  "type":"1",
                  "remark":"1",
                  "questionallId":"22,1,31"
              },
              {
                  "id":2,
                  "name":"商城项目",
                  "description":"测试试卷，我测试使用的试卷11111",
                  "cover":"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
                  "author":"刘民",
                  "created":"2019-07-17",
                  "startTime":"2019-07-17",
                  "endTime":"2019-07-17",
                  "subjectName":"1",
                  "publish":"1",
                  "type":"1",
                  "remark":"1",
                  "questionallId":"1,22,23,24,27,28,31,33,34,35,36,37"
              },
              {
                  "id":1,
                  "name":"后台管理",
                  "description":"测试试卷，我测试使用的试卷",
                  "cover":"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
                  "author":"刘献盎",
                  "created":"2019-07-17",
                  "startTime":"2019-07-17",
                  "endTime":"2019-07-17",
                  "subjectName":"1",
                  "publish":"1",
                  "type":"1",
                  "remark":"1",
                  "questionallId":"22,23,1,31"
              },
              {
                  "id":1,
                  "name":"考试项目",
                  "description":"测试试卷，我测试使用的试卷",
                  "cover":"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
                  "author":"刘献盎",
                  "created":"2019-07-17",
                  "startTime":"2019-07-17",
                  "endTime":"2019-07-17",
                  "subjectName":"1",
                  "publish":"1",
                  "type":"1",
                  "remark":"1",
                  "questionallId":"22,23,1,31"
              }
          ],
          activities: [{
              id: 1,
              user: {
                  nickname: '@name',
                  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
              },
              project: {
                  name: '白鹭酱油开发组',
                  action: '更新',
                  event: '番组计划'
              },
              time: '2018-08-23 14:47:00'
          },
              {
                  id: 1,
                  user: {
                      nickname: '蓝莓酱',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
                  },
                  project: {
                      name: '白鹭酱油开发组',
                      action: '更新',
                      event: '番组计划'
                  },
                  time: '2018-08-23 09:35:37'
              },
              {
                  id: 1,
                  user: {
                      nickname: '@name',
                      avatar: '@image(64x64)'
                  },
                  project: {
                      name: '白鹭酱油开发组',
                      action: '创建',
                      event: '番组计划'
                  },
                  time: '2017-05-27 00:00:00'
              },
              {
                  id: 1,
                  user: {
                      nickname: '曲丽丽',
                      avatar: '@image(64x64)'
                  },
                  project: {
                      name: '高逼格设计天团',
                      action: '更新',
                      event: '六月迭代'
                  },
                  time: '2018-08-23 14:47:00'
              },
              {
                  id: 1,
                  user: {
                      nickname: '@name',
                      avatar: '@image(64x64)'
                  },
                  project: {
                      name: '高逼格设计天团',
                      action: 'created',
                      event: '六月迭代'
                  },
                  time: '2018-08-23 14:47:00'
              },
              {
                  id: 1,
                  user: {
                      nickname: '曲丽丽',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                  },
                  project: {
                      name: '高逼格设计天团',
                      action: 'created',
                      event: '六月迭代'
                  },
                  time: '2018-08-23 14:47:00'
              }],
      }
    }
  }
</script>

<style scoped>
  .ant-carousel >>> .slick-slide {
    text-align: center;
    background:  #364d79;
    line-height: 50px;
  }
  .ant-carousel-item1{
    text-align: center;
    background: url(../assets/images/index1.jpg);
    line-height: 50px;
  }
  .ant-carousel-item2 {
    text-align: center;
    background: url(../assets/images/index2.jpg);
    line-height: 50px;
  }
  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
  .ant-layout-footer{
    background-color: #e3e4e5;
    color: #333;
    text-align: center;
    line-height: 0px;
  }
  .cardItemContent{
    text-align: center;
  }
</style>
