<template>
  <div class="new-article flex">
    <h3 class="iconfont">最新文章</h3>
    <div class="new-art-lists" >
      <div class="new-items flex">
        <div class="lf-img">
          <a href="javascript:;" style="display:block;">
            <img src="~@/assets/images/1.jpeg" class="img-cover" alt />
          </a>
        </div>
        <div class="article-con" >
          <a href="javascript:;">
            <h2></h2>
          </a>
          <p></p>
          <div class="post-meta flex">
            <a href="javascript:;" class="text-sm">
              <span>HTML</span>
            </a>
            <span>2022-8-20 21:47</span>
          </div>
        </div>
      </div>
      <!-- <div class="new-items flex"></div>
      <div class="new-items"></div>
      <div class="new-items"></div> -->
    </div>
    <el-pagination background layout="prev, pager, next" 
    :total="totalCount"
    :page-size="3"
    :current-page="currentPage"
     style="text-align:center">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {reqNewArticles} from '@/api/index'
export default {
  name: "NewArticle",
  data(){
    return{
      // 总数据
      articles:[],
      // 默认显示第几页
      currentPage:1,
      // 总条数
      totalCount:3,
      // 总页数
      // 每页显示个数
      pageSizes:[1,2,3,4],
      // 默认每页显示的条数
      pageSize:3,
      // 当前页展示的数据
      currentPageData:[],
      totalPageData:[]

    }
  },
  methods:{
    //获取接口数据
    async getArticles() {
     let res =  await reqNewArticles()
    //  将获取到的数据存在articles中
     this.articles = res.data
    //  总条数
    this.totalCount = res.data.length
    },

  },
  mounted(){
    // getArticles()
    this.getArticles()
    // this.$store.dispatch('home/getNews')
  },
  computed:{
    ...mapState("home",['newArticles'])
  }
};
</script>

<style scoped lang='less'>
// PC端
@media screen and (min-width: 820px) {
  .new-article {
    flex-direction: column;
    width: 100%;
    max-width: 850px;
    h3 {
      font-size: 18px;
      line-height: 32px;
      margin-top: 20px;
    }
    h3::before {
      content: "\e71e";
      color: #ff0000;
      margin-right: 0.2em;
    }
    .new-art-lists {
      margin-top: 40px;
      .new-items {
        position: relative;
        align-items: center;
        height: 150px;
        border: 1px solid #dfe6e9;
        border-radius: 5px;
        margin-bottom: 1.5rem;
        /* 文章左侧图片 */
        .lf-img {
          width: 14rem;
          height: 9rem;
          /* background-color: 20; */
          border-radius: 20px;
          overflow: hidden;
          .img-cover {
            width: 100%;
            height: 100%;
          }
        }
        /* 文章右侧标题和内容 */
        .article-con {
          width: 30rem;
          height: 9rem;
          padding-left: 1rem;
          h2 {
            font-size: 1.5rem;
            line-height: 2rem;
            color: #000;
          }
          p {
            display: -webkit-box;
            overflow: hidden;
            font-size: 0.9rem;
            line-height: 1.5rem;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
            margin-top: 1.5rem;
          }
        }
        // 标签
        .post-meta {
          justify-content: space-between;
          margin-top: 1.5rem;
          a,
          span {
            font-size: 0.5rem;
            color: #6b7280;
          }
        }
      }
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  .new-article {
    flex-direction: column;
    width: 100%;
    max-width: 850px;
    h3 {
      font-size: 18px;
      line-height: 32px;
      margin-top: 20px;
    }
    h3::before {
      content: "\e71e";
      color: #ff0000;
      margin-right: 0.2em;
    }
    .new-art-lists {
      margin-top: 40px;
      .new-items {
        position: relative;
        align-items: center;
        height: 6rem;
        border: 1px solid #dfe6e9;
        border-radius: 5px;
        margin-bottom: 1.5rem;
        /* 文章左侧图片 */
        .lf-img {
          width: 16rem;
          height: 5rem;
          /* background-color: 20; */
          border-radius: 20px;
          overflow: hidden;
          .img-cover {
            width: 100%;
            height: 100%;
          }
        }
        /* 文章右侧标题和内容 */
        .article-con {
          width: 30rem;
          height: 6rem;
          padding-left: 1rem;
          h2 {
            font-size: 1.5rem;
            line-height: 2rem;
            color: #000;
          }
          p {
            display: -webkit-box;
            overflow: hidden;
            font-size: 0.6rem;
            line-height: 1.5rem;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
            margin-top: 0.1rem;
          }
        }
        // 标签
        .post-meta {
          justify-content: space-between;
          margin-top: 00rem;
          a,
          span {
            font-size: 0.1rem;
            color: #6b7280;
          }
        }
      }
    }
  }
}
</style>