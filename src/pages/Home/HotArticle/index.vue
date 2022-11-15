<template>
  <div class="hot-article">
    <h3 class="iconfont">热门文章</h3>
    <div class="hot-list flex">
      <div class="hot-items" v-for="item in hot" :key="item.id">
        <img :src="item.imgUrl" alt="" style="width:100%;height:100%">
      </div>
      <!-- <div class="hot-items"></div>
      <div class="hot-items"></div>
      <div class="hot-items"></div> -->
    </div>
  </div>
</template>

<script>
// 引入mapState
import { mapState } from 'vuex';
export default {
  name: "HotArticle",
  mounted(){
    // 调用vuex中action发送api请求
    this.$store.dispatch("home/getHot")
  },
  // 获取Vuex中State中的数据
  computed:{
    ...mapState("home" , ['hot'])
  }
};
</script>

<style scoped lang='less'>
// PC端
@media screen and (min-width: 820px) {
  .hot-article {
    width: 100%;
    max-width: 850px;
    // background-color: #666;
    h3 {
      font-size: 18px;
      line-height: 32px;
      margin-top: 20px;
    }
    h3::before {
      content: "\e65a";
      color: #ff0000;
      margin-right: 0.2em;
    }
    .hot-list {
      justify-content: space-around;
      margin: 40px;
      .hot-items {
        width: 20%;
        height: 150px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 50px;
        overflow: hidden;
      }
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  .hot-article {
    width: 100%;
    max-width: 850px;
    // background-color: #666;
    h3 {
      font-size: 18px;
      line-height: 32px;
      margin-top: 20px;
    }
    h3::before {
      content: "\e65a";
      color: #ff0000;
      margin-right: 0.2em;
    }
    .hot-list {
      justify-content: space-around;
      .hot-items {
        width: 20%;
        height: 4rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 50px;
        overflow: hidden;
      }
    }
  }
}
</style>