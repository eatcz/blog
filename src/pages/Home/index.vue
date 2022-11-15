<template>
  <!-- 主体部分 -->
  <main class="flex clearfix">
    <MainHeader></MainHeader>
    <!-- 内容区 -->
    <section class="flex clearfix">
      <HotArticle></HotArticle>
      <NewArticle></NewArticle>
    </section>
  </main>
</template>

<script>
import MainHeader from "@/pages/Home/MainHeader";
import HotArticle from "@/pages/Home/HotArticle";
import NewArticle from "@/pages/Home/NewArticle";
export default {
  name: "Home",
  components: {
    MainHeader,
    HotArticle,
    NewArticle
  }
};
</script>

<style scoped lang='less'>
// 主体部分
// PC端
/* PC端 */
@media screen and (min-width: 820px) {
  main {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f9fafb;
    // 内容区
    section {
      flex-direction: column;
      width: 60%;
      // background-color: #00cec9;
      margin-top: 2rem;
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  main {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f5f5f5;
    section {
      flex-direction: column;
      width: 80%;
    }
  }
}
</style>